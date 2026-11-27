// Convert DTCG tokens to a Chakra UI v3 theme config (dist/tokens/chakra.json).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const read = (p) => JSON.parse(readFileSync(p, 'utf8'));
const set = (obj, path, val) => {
  let o = obj;
  path.slice(0, -1).forEach((k) => (o = o[k] ??= {}));
  o[path.at(-1)] = val;
};
// Walk a DTCG tree. Call fn(path, token) for each leaf token.
const walk = (node, fn, path = []) => {
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$')) continue;
    if (v && typeof v === 'object' && '$value' in v) fn([...path, k], v);
    else if (v && typeof v === 'object') walk(v, fn, [...path, k]);
  }
};
// "{color.neutral.500}" -> "{colors.neutral.500}"
const ref = (v) => (typeof v === 'string' ? v.replace(/\{color\./g, '{colors.') : v);

const tokens = {};
const semantic = {};
const P = 'tokens/primitive/';

walk(read(P + 'color.json'), (p, t) => set(tokens, ['colors', ...p.slice(1)], { value: t.$value }));
walk(read(P + 'space.json'), (p, t) => set(tokens, ['spacing', 'ads', ...p.slice(1)], { value: t.$value }));
walk(read(P + 'border.json'), (p, t) => {
  const [, kind, ...rest] = p;
  set(tokens, [kind === 'width' ? 'borderWidths' : 'radii', 'ads', ...rest], { value: t.$value });
});
walk(read(P + 'motion.json'), (p, t) => {
  const [, kind, ...rest] = p;
  const value = kind === 'easing' ? `cubic-bezier(${t.$value.join(', ')})` : t.$value;
  set(tokens, [kind === 'duration' ? 'durations' : 'easings', 'ads', ...rest], { value });
});
walk(read(P + 'typography.json'), (p, t) => {
  const [, kind, ...rest] = p;
  if (kind === 'weight') set(tokens, ['fontWeights', 'ads', ...rest], { value: t.$value });
  if (kind === 'size' && rest[0] === 'ui') set(tokens, ['fontSizes', 'ads', ...rest], { value: t.$value });
});

// Fonts, square corners (Chakra components read radii.l1..l3).
const stack = (a) => a.join(', ');
const fam = read(P + 'typography.json').font.family;
set(tokens, ['fonts', 'heading'], { value: stack(fam.brand.$value) });
set(tokens, ['fonts', 'body'], { value: stack(fam.brand.$value) });
for (const k of ['l1', 'l2', 'l3']) set(tokens, ['radii', k], { value: '{radii.ads.none}' });

// Semantic colors: merge light and dark into { base, _dark }.
const light = {};
const dark = {};
for (const f of ['color', 'action']) {
  walk(read(`tokens/semantic/${f}.light.json`), (p, t) => set(light, p, { $value: t.$value }));
  walk(read(`tokens/semantic/${f}.dark.json`), (p, t) => set(dark, p, { $value: t.$value }));
}
const flat = [];
walk(light, (p) => flat.push(p));
for (const p of flat) {
  const get = (o) => p.reduce((x, k) => x[k], o);
  const val = { base: ref(get(light).$value), _dark: ref(get(dark).$value) };
  set(semantic, ['colors', 'ads', ...p.slice(1)], { value: val });
}
// Palette "primary" feeds Chakra's colorPalette API (solid, outline, ghost).
const a = (k) => `{colors.ads.action.${k}}`;
const pal = {
  solid: a('primary.bg'), contrast: a('primary.text'), fg: a('secondary.text'),
  muted: a('secondary.hover'), subtle: a('secondary.hover'), emphasized: a('secondary.active'),
  focusRing: '{colors.ads.border.focus}', border: a('secondary.border'),
};
for (const [k, v] of Object.entries(pal)) set(semantic, ['colors', 'primary', k], { value: v });

// Status palettes for Badge, Alert, Progress.
for (const st of ['success', 'warning', 'critical', 'info']) {
  const s = (k) => `{colors.status.${st}.${k}}`;
  const surf = `{colors.ads.bg.surface.${st}}`;
  const v = {
    solid: { base: s(300), _dark: s(200) }, contrast: { base: '{colors.neutral.white}', _dark: '{colors.neutral.black}' },
    fg: { base: s(300), _dark: s(200) }, muted: surf, subtle: surf, emphasized: { base: s(100), _dark: s(400) },
    focusRing: '{colors.ads.border.focus}', border: `{colors.ads.border.${st}}`,
  };
  for (const [k, val] of Object.entries(v)) set(semantic, ['colors', st, k], { value: val });
}

mkdirSync('dist/tokens', { recursive: true });
writeFileSync('dist/tokens/chakra.json', JSON.stringify({ theme: { tokens, semanticTokens: semantic } }, null, 2) + '\n');
console.log('chakra.json written');
