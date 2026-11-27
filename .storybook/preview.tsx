import type { Preview } from '@storybook/react-vite';
import { ChakraProvider } from '@chakra-ui/react';
import '../dist/tokens/light.css';
import '../dist/tokens/dark.css';
import { system } from '../src/theme/system';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Color', 'Typography', 'Space', 'Border', 'Motion', 'Grid', 'Shadow'],
          'Components',
          'Chakra',
          ['Layout', 'Typography', 'Media', 'Actions', 'Forms', ['Text input', 'Selection', 'Date and color'],
           'Overlays', 'Navigation', 'Disclosure', 'Data display', 'Feedback', 'Utilities'],
        ],
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Color mode',
      toolbar: { icon: 'circlehollow', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, ctx) => {
      const mode = ctx.globals.theme as 'light' | 'dark';
      const root = document.documentElement;
      root.dataset.theme = mode; // custom CSS tokens
      root.classList.toggle('dark', mode === 'dark'); // Chakra _dark condition
      root.classList.toggle('light', mode === 'light');
      return (
        <ChakraProvider value={system}>
          <div style={{ background: 'var(--color-bg-base-primary)', padding: 'var(--space-24)' }}>
            <Story />
          </div>
        </ChakraProvider>
      );
    },
  ],
};
export default preview;
