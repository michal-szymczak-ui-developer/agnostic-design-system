import type { Meta, StoryObj } from '@storybook/react-vite';
import { Em, Text } from '@chakra-ui/react';

// No Chakra recipe for Em. Controls are written by hand.
const meta = {
  title: 'Chakra/Typography/Em',
  component: Em,
  args: { children: 'linear', color: 'ads.text.body.primary' },
  argTypes: {
    children: { control: 'text', table: { category: 'Props' } },
    color: {
      control: 'select',
      options: ['ads.text.body.primary', 'ads.text.body.secondary', 'ads.text.body.tertiary', 'primary.fg'],
      table: { category: 'Props' },
    },
    fontWeight: {
      control: 'inline-radio',
      options: ['ads.regular', 'ads.semibold'],
      table: { category: 'Props' },
    },
  },
} satisfies Meta<typeof Em>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Text>
      Never use <Em {...args} /> easing.
    </Text>
  ),
};

export const Default: Story = {
  render: () => (
    <Text>
      Never use <Em>linear</Em> easing.
    </Text>
  ),
};
