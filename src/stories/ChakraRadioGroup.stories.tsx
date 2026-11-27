import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, RadioGroup } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('radioGroup');

const meta = {
  title: 'Chakra/Forms/Selection/RadioGroup',
  component: RadioGroup.Root,
  args: { ...args, defaultValue: 'md' },
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof RadioGroup.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Items = () => (
  <HStack gap="6">
    {['sm', 'md', 'lg'].map((v) => (
      <RadioGroup.Item key={v} value={v}>
        <RadioGroup.ItemHiddenInput />
        <RadioGroup.ItemIndicator />
        <RadioGroup.ItemText>{v}</RadioGroup.ItemText>
      </RadioGroup.Item>
    ))}
  </HStack>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <RadioGroup.Root {...args}>
      <Items />
    </RadioGroup.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <RadioGroup.Root colorPalette="primary" defaultValue="md">
      <Items />
    </RadioGroup.Root>
  ),
};
