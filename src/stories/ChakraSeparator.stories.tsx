import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Separator, Stack, Text } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('separator', { palette: false });

const meta = {
  title: 'Chakra/Layout/Separator',
  component: Separator,
  args,
  argTypes,
} satisfies Meta<typeof Separator>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) =>
    args.orientation === 'vertical' ? (
      <HStack h="8" gap="3">
        <Text>One</Text>
        <Separator {...args} />
        <Text>Two</Text>
      </HStack>
    ) : (
      <Stack maxW="xs" gap="3">
        <Text>Above</Text>
        <Separator {...args} />
        <Text>Below</Text>
      </Stack>
    ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack maxW="xs" gap="3">
      <Text>Above</Text>
      <Separator />
      <Text>Below</Text>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <HStack h="8" gap="3">
      <Text>One</Text>
      <Separator orientation="vertical" />
      <Text>Two</Text>
    </HStack>
  ),
};

export const Variants: Story = {
  render: () => (
    <Stack maxW="xs" gap="3">
      {(['solid', 'dashed', 'dotted'] as const).map((v) => (
        <Separator key={v} variant={v} />
      ))}
    </Stack>
  ),
};
