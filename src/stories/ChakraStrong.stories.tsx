import type { Meta, StoryObj } from '@storybook/react-vite';
import { Strong, Text } from '@chakra-ui/react';

// No Chakra recipe for Strong. Controls are written by hand.
const meta = {
  title: 'Chakra/Typography/Strong',
  component: Strong,
  args: { children: 'one primary button', fontWeight: 'ads.semibold' },
  argTypes: {
    children: { control: 'text', table: { category: 'Props' } },
    fontWeight: {
      control: 'inline-radio',
      options: ['ads.regular', 'ads.semibold'],
      table: { category: 'Props' },
    },
    color: {
      control: 'select',
      options: ['ads.text.body.primary', 'ads.text.body.secondary', 'ads.text.body.tertiary', 'primary.fg'],
      table: { category: 'Props' },
    },
  },
} satisfies Meta<typeof Strong>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Text>
      Use <Strong {...args} /> per view.
    </Text>
  ),
};

export const Default: Story = {
  render: () => (
    <Text>
      Use <Strong>one primary button</Strong> per view.
    </Text>
  ),
};
