import type { Meta, StoryObj } from '@storybook/react-vite';
import { RatingGroup, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('ratingGroup');

const meta = {
  title: 'Chakra/Forms/Selection/RatingGroup',
  component: RatingGroup.Root,
  args: { ...args, count: 5, defaultValue: 3 },
  argTypes: {
    ...argTypes,
    count: { control: 'number', table: { category: 'Props' } },
    allowHalf: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof RatingGroup.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ label, ...root }: { label: string } & ComponentProps<typeof RatingGroup.Root>) => (
  <RatingGroup.Root count={5} defaultValue={3} colorPalette="primary" {...root}>
    <RatingGroup.HiddenInput />
    <RatingGroup.Label>{label}</RatingGroup.Label>
    <RatingGroup.Control />
  </RatingGroup.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Item label="Rating" {...args} /> };

export const Sizes: Story = {
  render: () => (
    <VStack align="start" gap="4">
      <Item label="Small" size="sm" />
      <Item label="Medium" size="md" />
      <Item label="Large" size="lg" />
    </VStack>
  ),
};

export const Modes: Story = {
  render: () => (
    <VStack align="start" gap="4">
      <Item label="Half steps" allowHalf />
      <Item label="Read only" readOnly />
    </VStack>
  ),
};
