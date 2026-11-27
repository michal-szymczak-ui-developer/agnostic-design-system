import type { Meta, StoryObj } from '@storybook/react-vite';
import { SegmentGroup, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('segmentGroup');

const meta = {
  title: 'Chakra/Forms/Selection/SegmentGroup',
  component: SegmentGroup.Root,
  args: { ...args, defaultValue: 'Week' },
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof SegmentGroup.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const items = ['Day', 'Week', 'Month'];

const Item = (p: ComponentProps<typeof SegmentGroup.Root>) => (
  <SegmentGroup.Root defaultValue="Week" colorPalette="primary" {...p}>
    <SegmentGroup.Indicator />
    <SegmentGroup.Items items={items} />
  </SegmentGroup.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Item {...args} /> };

export const Sizes: Story = {
  render: () => (
    <VStack align="start" gap="4">
      <Item size="sm" />
      <Item size="md" />
      <Item size="lg" />
    </VStack>
  ),
};

export const Disabled: Story = { render: () => <Item disabled /> };
