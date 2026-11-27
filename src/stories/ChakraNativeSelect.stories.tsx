import type { Meta, StoryObj } from '@storybook/react-vite';
import { NativeSelect, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('nativeSelect', { palette: false });

const meta = {
  title: 'Chakra/Forms/Selection/NativeSelect',
  component: NativeSelect.Root,
  args,
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof NativeSelect.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Sel = (p: ComponentProps<typeof NativeSelect.Root>) => (
  <NativeSelect.Root {...p}>
    <NativeSelect.Field placeholder="Select option">
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </NativeSelect.Field>
    <NativeSelect.Indicator />
  </NativeSelect.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Sel maxW="xs" {...args} /> };

export const Sizes: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="xs">
      <Sel size="sm" />
      <Sel size="md" />
      <Sel size="lg" />
    </VStack>
  ),
};

export const States: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="xs">
      <Sel invalid />
      <Sel disabled />
    </VStack>
  ),
};
