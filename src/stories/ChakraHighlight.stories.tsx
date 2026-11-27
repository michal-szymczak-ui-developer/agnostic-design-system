import type { Meta, StoryObj } from '@storybook/react-vite';
import { Highlight } from '@chakra-ui/react';

// No Chakra recipe for Highlight. Controls are written by hand.
const meta = {
  title: 'Chakra/Typography/Highlight',
  component: Highlight,
  args: {
    query: 'tokens',
    children: 'Chakra reads the design tokens from one source.',
    ignoreCase: true,
    matchAll: true,
  },
  argTypes: {
    query: { control: 'text', description: 'Text to highlight.', table: { category: 'Props' } },
    children: { control: 'text', table: { category: 'Props' } },
    ignoreCase: { control: 'boolean', table: { category: 'Props' } },
    matchAll: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Highlight>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Highlight styles={{ bg: 'primary.muted', px: '1' }} {...args} />,
};

export const Default: Story = {
  args: { query: ['tokens', 'Chakra'], children: 'Chakra reads the design tokens from one source.' },
  render: () => (
    <Highlight query={['tokens', 'Chakra']} styles={{ bg: 'primary.muted', px: '1' }}>
      Chakra reads the design tokens from one source.
    </Highlight>
  ),
};
