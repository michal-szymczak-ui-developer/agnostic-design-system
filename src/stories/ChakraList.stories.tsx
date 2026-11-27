import type { Meta, StoryObj } from '@storybook/react-vite';
import { List } from '@chakra-ui/react';
import { recipeControls } from './controls';

// The List recipe has no color palette.
const { argTypes, args } = recipeControls('list', { palette: false });

const meta = {
  title: 'Chakra/Typography/List',
  component: List.Root,
  args: { ...args, as: 'ul', gap: '1' },
  argTypes: {
    ...argTypes,
    as: { control: 'inline-radio', options: ['ul', 'ol'], table: { category: 'Props' } },
    gap: { control: 'select', options: ['0', '1', '2', '4'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof List.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const items = ['Primitive tokens', 'Semantic tokens', 'Components'];

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <List.Root {...args}>
      {items.map((i) => (
        <List.Item key={i}>{i}</List.Item>
      ))}
    </List.Root>
  ),
};

export const Unordered: Story = {
  render: () => (
    <List.Root>
      {items.map((i) => (
        <List.Item key={i}>{i}</List.Item>
      ))}
    </List.Root>
  ),
};

export const Ordered: Story = {
  render: () => (
    <List.Root as="ol">
      {items.map((i) => (
        <List.Item key={i}>{i}</List.Item>
      ))}
    </List.Root>
  ),
};

export const Plain: Story = {
  render: () => (
    <List.Root listStyle="none" gap="2">
      {items.map((i) => (
        <List.Item key={i}>{i}</List.Item>
      ))}
    </List.Root>
  ),
};
