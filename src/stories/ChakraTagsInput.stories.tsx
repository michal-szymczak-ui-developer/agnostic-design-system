import type { Meta, StoryObj } from '@storybook/react-vite';
import { TagsInput, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('tagsInput');

const meta = {
  title: 'Chakra/Forms/Text input/TagsInput',
  component: TagsInput.Root,
  args: { ...args, defaultValue: ['tokens', 'react'] },
  argTypes: {
    ...argTypes,
    max: { control: 'number', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof TagsInput.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ label, ...root }: { label: string } & ComponentProps<typeof TagsInput.Root>) => (
  <TagsInput.Root defaultValue={['tokens', 'react']} colorPalette="primary" maxW="sm" {...root}>
    <TagsInput.Label>{label}</TagsInput.Label>
    <TagsInput.Control>
      <TagsInput.Items />
      <TagsInput.Input placeholder="Add tag" />
      <TagsInput.ClearTrigger />
    </TagsInput.Control>
    <TagsInput.HiddenInput />
  </TagsInput.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Item label="Tags" {...args} /> };

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
