import type { Meta, StoryObj } from '@storybook/react-vite';
import { CheckboxCard, HStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('checkboxCard');

const meta = {
  title: 'Chakra/Forms/Selection/CheckboxCard',
  component: CheckboxCard.Root,
  args,
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof CheckboxCard.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

type CardProps = { label: string } & ComponentProps<typeof CheckboxCard.Root>;

const Card = ({ label, ...root }: CardProps) => (
  <CheckboxCard.Root maxW="2xs" colorPalette="primary" {...root}>
    <CheckboxCard.HiddenInput />
    <CheckboxCard.Control>
      <CheckboxCard.Content>
        <CheckboxCard.Label>{label}</CheckboxCard.Label>
        <CheckboxCard.Description>Short description</CheckboxCard.Description>
      </CheckboxCard.Content>
      <CheckboxCard.Indicator />
    </CheckboxCard.Control>
  </CheckboxCard.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Card label="Card label" {...args} />,
};

export const Variants: Story = {
  render: () => (
    <HStack align="start" gap="4" wrap="wrap">
      <Card label="Surface" variant="surface" defaultChecked />
      <Card label="Subtle" variant="subtle" defaultChecked />
      <Card label="Outline" variant="outline" defaultChecked />
      <Card label="Solid" variant="solid" defaultChecked />
    </HStack>
  ),
};

export const States: Story = {
  render: () => (
    <HStack align="start" gap="4">
      <Card label="Unchecked" variant="outline" />
      <Card label="Disabled" variant="outline" disabled />
    </HStack>
  ),
};
