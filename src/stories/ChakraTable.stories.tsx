import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('table', { palette: false });

const meta = {
  title: 'Chakra/Data display/Table',
  component: Table.Root,
  args,
  argTypes,
} satisfies Meta<typeof Table.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => <Data {...args} maxW="lg" />,
};

const rows = [
  { id: 1, name: 'Primary', usage: 'Main action', count: 12 },
  { id: 2, name: 'Secondary', usage: 'Other actions', count: 34 },
  { id: 3, name: 'Tertiary', usage: 'Low priority', count: 8 },
];

const Data = (props: React.ComponentProps<typeof Table.Root>) => (
  <Table.Root {...props}>
    <Table.Caption>Button usage</Table.Caption>
    <Table.Header>
      <Table.Row>
        <Table.ColumnHeader>Variant</Table.ColumnHeader>
        <Table.ColumnHeader>Usage</Table.ColumnHeader>
        <Table.ColumnHeader textAlign="end">Count</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {rows.map((r) => (
        <Table.Row key={r.id}>
          <Table.Cell>{r.name}</Table.Cell>
          <Table.Cell>{r.usage}</Table.Cell>
          <Table.Cell textAlign="end">{r.count}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.Cell colSpan={2}>Total</Table.Cell>
        <Table.Cell textAlign="end">54</Table.Cell>
      </Table.Row>
    </Table.Footer>
  </Table.Root>
);

export const Line: Story = { render: () => <Data variant="line" maxW="lg" /> };
export const Outline: Story = { render: () => <Data variant="outline" striped maxW="lg" /> };
export const Sizes: Story = {
  render: () => (
    <>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <Data key={s} size={s} maxW="lg" mb="6" />
      ))}
    </>
  ),
};
