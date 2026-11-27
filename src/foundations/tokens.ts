// Read DTCG tokens for Foundations pages. Source of truth: tokens/*.json.
import colorP from '../../tokens/primitive/color.json';
import spaceP from '../../tokens/primitive/space.json';
import borderP from '../../tokens/primitive/border.json';
import motionP from '../../tokens/primitive/motion.json';
import gridP from '../../tokens/primitive/grid.json';
import typoP from '../../tokens/primitive/typography.json';
import colorLight from '../../tokens/semantic/color.light.json';
import colorDark from '../../tokens/semantic/color.dark.json';
import actionLight from '../../tokens/semantic/action.light.json';
import actionDark from '../../tokens/semantic/action.dark.json';

export interface Flat {
  path: string[];
  name: string; // dot path, for example color.brand.core.300
  cssVar: string; // for example --color-brand-core-300
  value: unknown;
  type?: string;
  description?: string;
}

export function flatten(node: unknown, path: string[] = []): Flat[] {
  const out: Flat[] = [];
  for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
    if (k.startsWith('$') || v === null || typeof v !== 'object') continue;
    const t = v as Record<string, unknown>;
    const p = [...path, k];
    if ('$value' in t) {
      out.push({
        path: p,
        name: p.join('.'),
        cssVar: '--' + p.join('-'),
        value: t.$value,
        type: t.$type as string | undefined,
        description: t.$description as string | undefined,
      });
    } else {
      out.push(...flatten(t, p));
    }
  }
  return out;
}

export const colorPrimitive = flatten(colorP);
export const space = flatten(spaceP);
export const borderWidth = flatten(borderP).filter((t) => t.path[1] === 'width');
export const borderRadius = flatten(borderP).filter((t) => t.path[1] === 'radius');
export const motionDuration = flatten(motionP).filter((t) => t.path[1] === 'duration');
export const motionEasing = flatten(motionP).filter((t) => t.path[1] === 'easing');
export const grid = flatten(gridP);
export const typography = flatten(typoP);

// Resolve "{color.brand.core.300}" to a hex value.
const primitiveByName = new Map(colorPrimitive.map((t) => [t.name, String(t.value)]));
export const resolve = (ref: string): string => {
  const m = ref.match(/^\{(.+)\}$/);
  return m ? (primitiveByName.get(m[1]) ?? ref) : ref;
};

export interface SemanticColor {
  path: string[];
  name: string;
  cssVar: string;
  description?: string;
  light: { ref: string; hex: string };
  dark: { ref: string; hex: string };
}

const lightFlat = [...flatten(colorLight), ...flatten(actionLight)];
const darkByName = new Map([...flatten(colorDark), ...flatten(actionDark)].map((t) => [t.name, t]));

export const colorSemantic: SemanticColor[] = lightFlat.map((t) => {
  const d = darkByName.get(t.name);
  const lref = String(t.value);
  const dref = String(d?.value ?? '');
  return {
    path: t.path,
    name: t.name,
    cssVar: t.cssVar,
    description: t.description,
    light: { ref: lref, hex: resolve(lref) },
    dark: { ref: dref, hex: resolve(dref) },
  };
});

export const groupBy = <T,>(items: T[], key: (t: T) => string): [string, T[]][] => {
  const m = new Map<string, T[]>();
  for (const i of items) {
    const k = key(i);
    m.set(k, [...(m.get(k) ?? []), i]);
  }
  return [...m.entries()];
};
