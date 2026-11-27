import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, HStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('avatar');

const meta = {
  title: 'Chakra/Media/Avatar',
  component: Avatar.Root,
  args,
  argTypes,
} satisfies Meta<typeof Avatar.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Avatar.Root {...args}>
      <Avatar.Fallback name="Ada Lovelace" />
    </Avatar.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <HStack gap="4">
      {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Avatar.Root key={s} size={s} colorPalette="primary" shape="full">
          <Avatar.Fallback name="Ada Lovelace" />
        </Avatar.Root>
      ))}
    </HStack>
  ),
};
