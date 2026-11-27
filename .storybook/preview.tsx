import type { Preview } from '@storybook/react-vite';
import '../dist/tokens/light.css';
import '../dist/tokens/dark.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color mode',
      toolbar: { icon: 'circlehollow', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, ctx) => {
      document.documentElement.dataset.theme = ctx.globals.theme;
      return (
        <div style={{ background: 'var(--color-bg-base-primary)', padding: 'var(--space-24)' }}>
          <Story />
        </div>
      );
    },
  ],
};
export default preview;
