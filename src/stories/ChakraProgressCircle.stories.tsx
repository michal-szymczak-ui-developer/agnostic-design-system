import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, ProgressCircle } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('progressCircle');

const meta = {
  title: 'Chakra/Feedback/ProgressCircle',
  component: ProgressCircle.Root,
  args: { ...args, value: 65 },
  argTypes: {
    ...argTypes,
    value: { control: 'number', table: { category: 'Props' } },
  },
} satisfies Meta<typeof ProgressCircle.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => (
    <ProgressCircle.Root {...args}>
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
      <ProgressCircle.ValueText />
    </ProgressCircle.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <HStack gap="6">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <ProgressCircle.Root key={s} size={s} value={65} colorPalette="primary">
          <ProgressCircle.Circle>
            <ProgressCircle.Track />
            <ProgressCircle.Range />
          </ProgressCircle.Circle>
        </ProgressCircle.Root>
      ))}
    </HStack>
  ),
};

export const WithValue: Story = {
  render: () => (
    <HStack gap="6">
      {(['primary', 'success', 'warning', 'critical', 'info'] as const).map((p, i) => (
        <ProgressCircle.Root key={p} colorPalette={p} value={20 + i * 20} size="lg">
          <ProgressCircle.Circle>
            <ProgressCircle.Track />
            <ProgressCircle.Range />
          </ProgressCircle.Circle>
          <ProgressCircle.ValueText />
        </ProgressCircle.Root>
      ))}
    </HStack>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <ProgressCircle.Root value={null} colorPalette="primary">
      <ProgressCircle.Circle>
        <ProgressCircle.Track />
        <ProgressCircle.Range />
      </ProgressCircle.Circle>
    </ProgressCircle.Root>
  ),
};
