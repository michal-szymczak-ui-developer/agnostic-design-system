import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('slider');

const meta = {
  title: 'Chakra/Forms/Selection/Slider',
  component: Slider.Root,
  args: { ...args, min: 0, max: 100, step: 1, defaultValue: [40] },
  argTypes: {
    ...argTypes,
    min: { control: 'number', table: { category: 'Props' } },
    max: { control: 'number', table: { category: 'Props' } },
    step: { control: 'number', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Slider.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Item = ({ label, ...root }: { label: string } & ComponentProps<typeof Slider.Root>) => (
  <Slider.Root maxW="sm" colorPalette="primary" defaultValue={[40]} {...root}>
    <Slider.Label>{label}</Slider.Label>
    <Slider.Control>
      <Slider.Track>
        <Slider.Range />
      </Slider.Track>
      <Slider.Thumbs />
    </Slider.Control>
  </Slider.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Item label="Volume" {...args} /> };

export const Sizes: Story = {
  render: () => (
    <VStack align="stretch" gap="6">
      <Item label="Small" size="sm" />
      <Item label="Medium" size="md" />
      <Item label="Large" size="lg" />
    </VStack>
  ),
};

export const RangeAndDisabled: Story = {
  render: () => (
    <VStack align="stretch" gap="6">
      <Item label="Range" defaultValue={[20, 70]} />
      <Item label="Disabled" disabled />
    </VStack>
  ),
};
