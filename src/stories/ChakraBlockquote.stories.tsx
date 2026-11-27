import type { Meta, StoryObj } from '@storybook/react-vite';
import { Blockquote } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('blockquote');

const meta = {
  title: 'Chakra/Typography/Blockquote',
  component: Blockquote.Root,
  args,
  argTypes,
} satisfies Meta<typeof Blockquote.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Blockquote.Root maxW="md" {...args}>
      <Blockquote.Content>
        A semantic color is named after its purpose, not its appearance.
      </Blockquote.Content>
      <Blockquote.Caption>
        — <cite>Design system guideline</cite>
      </Blockquote.Caption>
    </Blockquote.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Blockquote.Root colorPalette="primary" maxW="md">
      <Blockquote.Content>
        A semantic color is named after its purpose, not its appearance.
      </Blockquote.Content>
      <Blockquote.Caption>
        — <cite>Design system guideline</cite>
      </Blockquote.Caption>
    </Blockquote.Root>
  ),
};

export const Variants: Story = {
  render: () => (
    <>
      {(['subtle', 'solid', 'plain'] as const).map((v) => (
        <Blockquote.Root key={v} variant={v} colorPalette="primary" maxW="md" mb="4">
          <Blockquote.Content>Variant {v}.</Blockquote.Content>
        </Blockquote.Root>
      ))}
    </>
  ),
};
