import type { Meta, StoryObj } from '@storybook/react-vite';
import { DateInput, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('dateInput', { palette: false });

const meta = {
  title: 'Chakra/Forms/Date and color/DateInput',
  component: DateInput.Root,
  args,
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof DateInput.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ label, ...root }: { label: string } & ComponentProps<typeof DateInput.Root>) => (
  <DateInput.Root colorPalette="primary" maxW="xs" {...root}>
    <DateInput.Label>{label}</DateInput.Label>
    <DateInput.Control>
      <DateInput.Segments />
    </DateInput.Control>
    <DateInput.HiddenInput />
  </DateInput.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Item label="Date" {...args} /> };

export const Sizes: Story = {
  render: () => (
    <VStack align="stretch" gap="4">
      <Item label="Small" size="sm" />
      <Item label="Medium" size="md" />
      <Item label="Large" size="lg" />
    </VStack>
  ),
};

export const States: Story = {
  render: () => (
    <VStack align="stretch" gap="4">
      <Item label="Invalid" invalid />
      <Item label="Disabled" disabled />
    </VStack>
  ),
};
