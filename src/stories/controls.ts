import { defaultConfig } from '@chakra-ui/react';

// Storybook cannot read props of Chakra components (docgen fails on chakra() factory).
// Read variants and sizes from the Chakra recipe instead. Reason: one source, no hand-copied lists.

export const PALETTES = ['primary', 'success', 'warning', 'critical', 'info', 'gray'] as const;

type ArgType = {
  control: 'select' | 'inline-radio' | 'boolean' | 'text' | 'number';
  options?: string[];
  description?: string;
  table?: { category: string };
};

type Recipe = {
  variants?: Record<string, Record<string, unknown>>;
  defaultVariants?: Record<string, unknown>;
};

const theme = defaultConfig.theme as unknown as {
  recipes?: Record<string, Recipe>;
  slotRecipes?: Record<string, Recipe>;
};

/**
 * Controls for a Chakra recipe. `name` is the recipe key, for example 'button' or 'radioGroup'.
 * Spread `argTypes` and `args` into the story meta. Spread the story args onto the root component.
 */
export function recipeControls(name: string, opts: { palette?: boolean } = {}) {
  const recipe = theme.recipes?.[name] ?? theme.slotRecipes?.[name];
  if (!recipe) throw new Error(`No Chakra recipe named "${name}"`);

  const argTypes: Record<string, ArgType> = {};
  const args: Record<string, unknown> = {};

  for (const [key, values] of Object.entries(recipe.variants ?? {})) {
    const options = Object.keys(values);
    const isBoolean = options.every((o) => o === 'true' || o === 'false');
    argTypes[key] = isBoolean
      ? { control: 'boolean', table: { category: 'Recipe' } }
      : { control: options.length <= 4 ? 'inline-radio' : 'select', options, table: { category: 'Recipe' } };
    const def = recipe.defaultVariants?.[key];
    if (def !== undefined) args[key] = def;
  }

  if (opts.palette !== false) {
    argTypes.colorPalette = { control: 'select', options: [...PALETTES], table: { category: 'Recipe' } };
    args.colorPalette = 'primary';
  }
  return { argTypes, args };
}
