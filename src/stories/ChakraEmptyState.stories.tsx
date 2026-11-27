import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, EmptyState, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('emptyState', { palette: false });

const meta = {
  title: 'Chakra/Data display/EmptyState',
  component: EmptyState.Root,
  args,
  argTypes,
} satisfies Meta<typeof EmptyState.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => (
    <EmptyState.Root {...args}>
      <EmptyState.Content>
        <EmptyState.Title>No components yet</EmptyState.Title>
        <EmptyState.Description>Describe a component to generate the first one.</EmptyState.Description>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <EmptyState.Root>
      <EmptyState.Content>
        <EmptyState.Indicator>*</EmptyState.Indicator>
        <VStack textAlign="center">
          <EmptyState.Title>No components yet</EmptyState.Title>
          <EmptyState.Description>Describe a component to generate the first one.</EmptyState.Description>
        </VStack>
        <Button colorPalette="primary">Create component</Button>
      </EmptyState.Content>
    </EmptyState.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <EmptyState.Root key={s} size={s}>
          <EmptyState.Content>
            <EmptyState.Title>Size {s}</EmptyState.Title>
            <EmptyState.Description>Nothing to show.</EmptyState.Description>
          </EmptyState.Content>
        </EmptyState.Root>
      ))}
    </>
  ),
};
