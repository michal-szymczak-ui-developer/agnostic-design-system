import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Text } from '@chakra-ui/react';

// No Chakra recipe for Text. Controls are written by hand.
const meta = {
  title: 'Chakra/Typography/Text',
  component: Text,
  args: {
    children: 'Opisuję komponent, AI generuje Figmę i kod, ja oceniam jakość.',
    textStyle: 'md',
    fontWeight: 'ads.regular',
    color: 'ads.text.body.primary',
  },
  argTypes: {
    children: { control: 'text', table: { category: 'Props' } },
    textStyle: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      table: { category: 'Props' },
    },
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
    textAlign: { control: 'inline-radio', options: ['left', 'center', 'right'], table: { category: 'Props' } },
    truncate: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Text maxW="md" {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="2">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((s) => (
        <Text key={s} textStyle={s}>
          Text {s}
        </Text>
      ))}
    </Stack>
  ),
};

export const Weights: Story = {
  render: () => (
    <Stack gap="2">
      <Text fontWeight="ads.regular">Regular (400)</Text>
      <Text fontWeight="ads.semibold">Semibold (600)</Text>
      <Text color="ads.text.body.tertiary">Tertiary color</Text>
    </Stack>
  ),
};
