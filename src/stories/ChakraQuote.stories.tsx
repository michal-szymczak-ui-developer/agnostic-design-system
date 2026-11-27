import type { Meta, StoryObj } from '@storybook/react-vite';
import { Quote, Text } from '@chakra-ui/react';

// No Chakra recipe for Quote. Controls are written by hand.
const meta = {
  title: 'Chakra/Typography/Quote',
  component: Quote,
  args: { children: 'keep corners square', color: 'ads.text.body.primary' },
  argTypes: {
    children: { control: 'text', table: { category: 'Props' } },
    color: {
      control: 'select',
      options: ['ads.text.body.primary', 'ads.text.body.secondary', 'ads.text.body.tertiary', 'primary.fg'],
      table: { category: 'Props' },
    },
    fontStyle: { control: 'inline-radio', options: ['normal', 'italic'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Quote>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Text>
      The brief said <Quote {...args} /> in every pattern.
    </Text>
  ),
};

export const Inline: Story = {
  render: () => (
    <Text>
      The brief said <Quote>keep corners square</Quote> in every pattern.
    </Text>
  ),
};
