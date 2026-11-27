import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Tag, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('tag');

const meta = {
  title: 'Chakra/Data display/Tag',
  component: Tag.Root,
  args,
  argTypes,
} satisfies Meta<typeof Tag.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => (
    <Tag.Root {...args}>
      <Tag.Label>Tag</Tag.Label>
      <Tag.EndElement>
        <Tag.CloseTrigger />
      </Tag.EndElement>
    </Tag.Root>
  ),
};

const palettes = ['primary', 'success', 'warning', 'critical', 'info'] as const;

export const Variants: Story = {
  render: () => (
    <VStack align="start" gap="3">
      {(['subtle', 'solid', 'outline', 'surface'] as const).map((v) => (
        <HStack key={v} gap="3">
          {palettes.map((p) => (
            <Tag.Root key={p} variant={v} colorPalette={p}>
              <Tag.Label>{p}</Tag.Label>
            </Tag.Root>
          ))}
        </HStack>
      ))}
    </VStack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <HStack gap="3">
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <Tag.Root key={s} size={s} colorPalette="primary">
          <Tag.Label>{s}</Tag.Label>
        </Tag.Root>
      ))}
    </HStack>
  ),
};

export const Closable: Story = {
  render: () => (
    <Tag.Root colorPalette="primary">
      <Tag.Label>Removable</Tag.Label>
      <Tag.EndElement>
        <Tag.CloseTrigger />
      </Tag.EndElement>
    </Tag.Root>
  ),
};
