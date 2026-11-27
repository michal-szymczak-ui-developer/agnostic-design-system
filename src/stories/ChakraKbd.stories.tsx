import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Kbd } from '@chakra-ui/react';
import { recipeControls } from './controls';

// The Kbd recipe has no color palette.
const { argTypes, args } = recipeControls('kbd', { palette: false });

const meta = {
  title: 'Chakra/Typography/Kbd',
  component: Kbd,
  args: { ...args, children: 'Ctrl' },
  argTypes: {
    ...argTypes,
    children: { control: 'text', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Kbd>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Kbd {...args} />,
};

export const Shortcut: Story = {
  render: () => (
    <HStack gap="1">
      <Kbd>Ctrl</Kbd>+<Kbd>K</Kbd>
    </HStack>
  ),
};

export const Variants: Story = {
  render: () => (
    <HStack gap="3">
      {(['raised', 'outline', 'subtle', 'plain'] as const).map((v) => (
        <Kbd key={v} variant={v}>
          {v}
        </Kbd>
      ))}
    </HStack>
  ),
};
