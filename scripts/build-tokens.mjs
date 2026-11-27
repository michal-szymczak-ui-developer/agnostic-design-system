// Build CSS variables from DTCG tokens. One file per color mode.
import StyleDictionary from 'style-dictionary';

const build = async (mode, selector) => {
  const sd = new StyleDictionary({
    include: ['tokens/primitive/**/*.json'],
    source: [`tokens/semantic/*.${mode}.json`],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'dist/tokens/',
        files: [
          {
            destination: `${mode}.css`,
            format: 'css/variables',
            // Emit primitives once (light file). Emit only semantic tokens in dark.
            // Skip text-only rules ($type string). They are not valid CSS values.
            filter: (t) => t.$type !== 'string' && (mode === 'light' ? true : t.filePath.includes('semantic')),
            options: { selector, outputReferences: true },
          },
        ],
      },
    },
  });
  await sd.buildAllPlatforms();
};

await build('light', ':root');
await build('dark', '[data-theme="dark"]');
