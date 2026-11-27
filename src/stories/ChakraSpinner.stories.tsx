import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Spinner } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('spinner');

const meta = {
  title: 'Chakra/Feedback/Spinner',
  component: Spinner,
  args: { ...args, color: 'colorPalette.solid' },
  argTypes: {
    ...argTypes,
    color: { control: 'text', table: { category: 'Props' } },
    borderWidth: { control: 'text', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Spinner>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The component takes args directly.
export const Playground: Story = {};

export const Sizes: Story = {
  render: () => (
    <HStack gap="6">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Spinner key={s} size={s} colorPalette="primary" color="colorPalette.solid" />
      ))}
    </HStack>
  ),
};

export const Palettes: Story = {
  render: () => (
    <HStack gap="6">
      {(['primary', 'success', 'warning', 'critical', 'info'] as const).map((p) => (
        <Spinner key={p} colorPalette={p} color="colorPalette.solid" borderWidth="3px" />
      ))}
    </HStack>
  ),
};
