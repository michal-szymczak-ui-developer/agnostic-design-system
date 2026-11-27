import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberInput, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('numberInput', { palette: false });

const meta = {
  title: 'Chakra/Forms/Text input/NumberInput',
  component: NumberInput.Root,
  args: { ...args, min: 0, max: 10, step: 1 },
  argTypes: {
    ...argTypes,
    min: { control: 'number', table: { category: 'Props' } },
    max: { control: 'number', table: { category: 'Props' } },
    step: { control: 'number', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof NumberInput.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ label, ...root }: { label: string } & ComponentProps<typeof NumberInput.Root>) => (
  <NumberInput.Root defaultValue="5" min={0} max={10} {...root}>
    <NumberInput.Label>{label}</NumberInput.Label>
    <NumberInput.Control>
      <NumberInput.IncrementTrigger />
      <NumberInput.DecrementTrigger />
    </NumberInput.Control>
    <NumberInput.Input />
  </NumberInput.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Item label="Quantity" maxW="xs" {...args} /> };

export const Sizes: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="xs">
      <Item label="Small" size="sm" />
      <Item label="Medium" size="md" />
      <Item label="Large" size="lg" />
    </VStack>
  ),
};

export const States: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="xs">
      <Item label="Invalid" invalid />
      <Item label="Disabled" disabled />
    </VStack>
  ),
};
