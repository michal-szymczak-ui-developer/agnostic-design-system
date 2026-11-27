import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('progress');

const meta = {
  title: 'Chakra/Feedback/Progress',
  component: Progress.Root,
  args: { ...args, value: 60, min: 0, max: 100 },
  argTypes: {
    ...argTypes,
    value: { control: 'number', table: { category: 'Props' } },
    min: { control: 'number', table: { category: 'Props' } },
    max: { control: 'number', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Progress.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => (
    <Progress.Root {...args} maxW="md">
      <Progress.Label>Progress</Progress.Label>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  ),
};

export const Palettes: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="md">
      {(['primary', 'success', 'warning', 'critical', 'info'] as const).map((p, i) => (
        <Progress.Root key={p} colorPalette={p} value={20 + i * 20}>
          <Progress.Label>{p}</Progress.Label>
          <Progress.Track>
            <Progress.Range />
          </Progress.Track>
        </Progress.Root>
      ))}
    </VStack>
  ),
};
