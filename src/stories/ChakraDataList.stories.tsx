import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, DataList } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('dataList', { palette: false });

const meta = {
  title: 'Chakra/Data display/DataList',
  component: DataList.Root,
  args,
  argTypes,
} satisfies Meta<typeof DataList.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => (
    <DataList.Root {...args} maxW="md">
      <Items />
    </DataList.Root>
  ),
};

const Items = () => (
  <>
    <DataList.Item>
      <DataList.ItemLabel>Status</DataList.ItemLabel>
      <DataList.ItemValue>
        <Badge colorPalette="success">Active</Badge>
      </DataList.ItemValue>
    </DataList.Item>
    <DataList.Item>
      <DataList.ItemLabel>Owner</DataList.ItemLabel>
      <DataList.ItemValue>Design Engineering</DataList.ItemValue>
    </DataList.Item>
    <DataList.Item>
      <DataList.ItemLabel>Version</DataList.ItemLabel>
      <DataList.ItemValue>1.0.0</DataList.ItemValue>
    </DataList.Item>
  </>
);

export const Horizontal: Story = {
  render: () => (
    <DataList.Root orientation="horizontal" maxW="md">
      <Items />
    </DataList.Root>
  ),
};

export const Vertical: Story = {
  render: () => (
    <DataList.Root orientation="vertical" maxW="md">
      <Items />
    </DataList.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <DataList.Root key={s} size={s} maxW="md" mb="6">
          <Items />
        </DataList.Root>
      ))}
    </>
  ),
};
