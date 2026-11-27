import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, SimpleGrid } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/SimpleGrid',
  component: SimpleGrid,
  args: { columns: 3, gap: '4' },
  argTypes: {
    columns: { control: { type: 'number', min: 1, max: 6, step: 1 }, table: { category: 'Props' } },
    gap: { control: 'select', options: ['0', '2', '4', '8'], table: { category: 'Props' } },
    minChildWidth: { control: 'text', description: 'Example: 120px. Overrides columns.', table: { category: 'Props' } },
  },
} satisfies Meta<typeof SimpleGrid>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <SimpleGrid {...args} maxW="lg">
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={i} bg="primary.solid" color="primary.contrast" p="3">
          {i + 1}
        </Box>
      ))}
    </SimpleGrid>
  ),
};

export const Columns: Story = {
  args: { columns: 3, gap: '4' },
  render: (args) => (
    <SimpleGrid {...args} maxW="lg">
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={i} bg="primary.solid" color="primary.contrast" p="3">
          {i + 1}
        </Box>
      ))}
    </SimpleGrid>
  ),
};

export const MinChildWidth: Story = {
  render: () => (
    <SimpleGrid minChildWidth="120px" gap="4" maxW="lg">
      {Array.from({ length: 5 }, (_, i) => (
        <Box key={i} bg="primary.muted" p="3">
          {i + 1}
        </Box>
      ))}
    </SimpleGrid>
  ),
};
