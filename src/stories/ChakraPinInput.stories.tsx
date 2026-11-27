import type { Meta, StoryObj } from '@storybook/react-vite';
import { PinInput, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('pinInput');

const meta = {
  title: 'Chakra/Forms/Text input/PinInput',
  component: PinInput.Root,
  args,
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    mask: { control: 'boolean', table: { category: 'Props' } },
    otp: { control: 'boolean', table: { category: 'Props' } },
    type: { control: 'inline-radio', options: ['numeric', 'alphanumeric', 'alphabetic'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof PinInput.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ label, ...root }: { label: string } & ComponentProps<typeof PinInput.Root>) => (
  <PinInput.Root colorPalette="primary" {...root}>
    <PinInput.HiddenInput />
    <PinInput.Label>{label}</PinInput.Label>
    <PinInput.Control>
      {[0, 1, 2, 3].map((i) => (
        <PinInput.Input key={i} index={i} />
      ))}
    </PinInput.Control>
  </PinInput.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Item label="Code" {...args} /> };

export const Sizes: Story = {
  render: () => (
    <VStack align="start" gap="4">
      <Item label="Small" size="sm" />
      <Item label="Medium" size="md" />
      <Item label="Large" size="lg" />
    </VStack>
  ),
};

export const States: Story = {
  render: () => (
    <VStack align="start" gap="4">
      <Item label="Invalid" invalid />
      <Item label="Disabled" disabled />
    </VStack>
  ),
};
