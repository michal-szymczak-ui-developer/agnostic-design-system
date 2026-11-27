import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('checkbox');

const meta = {
  title: 'Chakra/Forms/Selection/Checkbox',
  component: Checkbox.Root,
  args,
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    required: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Checkbox.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Checkbox.Root {...args}>
      <Checkbox.HiddenInput />
      <Checkbox.Control />
      <Checkbox.Label>Accept terms</Checkbox.Label>
    </Checkbox.Root>
  ),
};

const Item = (p: { label: string; checked?: boolean | 'indeterminate'; disabled?: boolean }) => (
  <Checkbox.Root colorPalette="primary" defaultChecked={p.checked} disabled={p.disabled}>
    <Checkbox.HiddenInput />
    <Checkbox.Control />
    <Checkbox.Label>{p.label}</Checkbox.Label>
  </Checkbox.Root>
);

export const States: Story = {
  render: () => (
    <VStack align="start" gap="3">
      <Item label="Unchecked" />
      <Item label="Checked" checked />
      <Item label="Indeterminate" checked="indeterminate" />
      <Item label="Disabled" disabled />
    </VStack>
  ),
};
