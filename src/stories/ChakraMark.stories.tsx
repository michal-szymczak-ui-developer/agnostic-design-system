import type { Meta, StoryObj } from '@storybook/react-vite';
import { Mark, Text } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('mark');

const meta = {
  title: 'Chakra/Typography/Mark',
  component: Mark,
  args: { ...args, variant: 'subtle', children: 'marked text' },
  argTypes: {
    ...argTypes,
    children: { control: 'text', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Mark>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Text>
      Use <Mark {...args} /> to draw attention.
    </Text>
  ),
};

export const Variants: Story = {
  render: () => (
    <Text>
      Use <Mark variant="subtle" colorPalette="primary">subtle</Mark>,{' '}
      <Mark variant="solid" colorPalette="primary">solid</Mark> or{' '}
      <Mark variant="text" colorPalette="primary">text</Mark> marks.
    </Text>
  ),
};
