import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Radiomark, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('radiomark');

const meta = {
  title: 'Chakra/Forms/Selection/Radiomark',
  component: Radiomark,
  args: { ...args, checked: true },
  argTypes: {
    ...argTypes,
    checked: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Radiomark>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Radiomark {...args} /> };

export const States: Story = {
  render: () => (
    <HStack gap="4">
      <Radiomark colorPalette="primary" />
      <Radiomark colorPalette="primary" checked />
      <Radiomark colorPalette="primary" checked disabled />
    </HStack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <VStack align="start" gap="3">
      <HStack gap="4">
        {(['xs', 'sm', 'md', 'lg'] as const).map((s) => (
          <Radiomark key={s} size={s} checked colorPalette="primary" />
        ))}
      </HStack>
      <HStack gap="4">
        {(['solid', 'outline', 'subtle'] as const).map((v) => (
          <Radiomark key={v} variant={v} checked colorPalette="primary" />
        ))}
      </HStack>
    </VStack>
  ),
};
