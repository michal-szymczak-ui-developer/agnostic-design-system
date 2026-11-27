import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Status, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('status');

const meta = {
  title: 'Chakra/Data display/Status',
  component: Status.Root,
  args: { ...args, colorPalette: 'success' },
  argTypes,
} satisfies Meta<typeof Status.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => (
    <Status.Root {...args}>
      <Status.Indicator />
      Operational
    </Status.Root>
  ),
};

const items = [
  { palette: 'success', label: 'Operational' },
  { palette: 'warning', label: 'Degraded' },
  { palette: 'critical', label: 'Outage' },
  { palette: 'info', label: 'Maintenance' },
] as const;

export const Palettes: Story = {
  render: () => (
    <VStack align="start" gap="3">
      {items.map((i) => (
        <Status.Root key={i.palette} colorPalette={i.palette}>
          <Status.Indicator />
          {i.label}
        </Status.Root>
      ))}
    </VStack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <HStack gap="6">
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <Status.Root key={s} size={s} colorPalette="success">
          <Status.Indicator />
          {s}
        </Status.Root>
      ))}
    </HStack>
  ),
};
