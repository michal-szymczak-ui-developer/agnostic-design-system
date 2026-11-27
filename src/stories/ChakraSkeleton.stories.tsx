import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('skeleton', { palette: false });

const meta = {
  title: 'Chakra/Feedback/Skeleton',
  component: Skeleton,
  args: { ...args, height: '5', maxW: 'sm', children: 'Content is loaded.' },
  argTypes: {
    ...argTypes,
    height: { control: 'text', table: { category: 'Props' } },
    maxW: { control: 'text', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Skeleton>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. Turn "loading" off to see the content.
export const Playground: Story = {};

export const Default: Story = {
  render: () => <Skeleton height="5" maxW="sm" />,
};

export const Text: Story = {
  render: () => <SkeletonText noOfLines={3} maxW="sm" />,
};

export const Circle: Story = {
  render: () => (
    <HStack gap="4">
      <SkeletonCircle size="12" />
      <Stack flex="1" maxW="xs">
        <Skeleton height="4" />
        <Skeleton height="4" width="70%" />
      </Stack>
    </HStack>
  ),
};

export const Loaded: Story = {
  render: () => (
    <Skeleton loading={false} maxW="sm">
      Content is loaded.
    </Skeleton>
  ),
};
