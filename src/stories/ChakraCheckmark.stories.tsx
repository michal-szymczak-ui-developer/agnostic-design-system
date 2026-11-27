import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkmark, HStack, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('checkmark');

const meta = {
  title: 'Chakra/Forms/Selection/Checkmark',
  component: Checkmark,
  args: { ...args, checked: true },
  argTypes: {
    ...argTypes,
    checked: { control: 'boolean', table: { category: 'Props' } },
    indeterminate: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Checkmark>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Checkmark {...args} />,
};

export const States: Story = {
  render: () => (
    <HStack gap="4">
      <Checkmark colorPalette="primary" />
      <Checkmark colorPalette="primary" checked />
      <Checkmark colorPalette="primary" indeterminate />
      <Checkmark colorPalette="primary" checked disabled />
    </HStack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <VStack align="start" gap="3">
      <HStack gap="4">
        {(['xs', 'sm', 'md', 'lg'] as const).map((s) => (
          <Checkmark key={s} size={s} checked colorPalette="primary" />
        ))}
      </HStack>
      <HStack gap="4">
        {(['solid', 'outline', 'subtle'] as const).map((v) => (
          <Checkmark key={v} variant={v} checked colorPalette="primary" />
        ))}
      </HStack>
    </VStack>
  ),
};
