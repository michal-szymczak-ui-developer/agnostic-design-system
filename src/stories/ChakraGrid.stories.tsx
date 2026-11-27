import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Grid, GridItem } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Grid',
  component: Grid,
  args: { templateColumns: 'repeat(3, 1fr)', gap: '4', autoFlow: 'row' },
  argTypes: {
    templateColumns: { control: 'select', options: ['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', '1fr 2fr'], table: { category: 'Props' } },
    gap: { control: 'select', options: ['0', '2', '4', '8'], table: { category: 'Props' } },
    autoFlow: { control: 'inline-radio', options: ['row', 'column', 'dense'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Grid>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Grid {...args} maxW="lg">
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={i} bg="primary.solid" color="primary.contrast" p="3">
          {i + 1}
        </Box>
      ))}
    </Grid>
  ),
};

export const Areas: Story = {
  render: () => (
    <Grid templateColumns="repeat(4, 1fr)" gap="4" maxW="lg">
      <GridItem colSpan={4} bg="primary.solid" color="primary.contrast" p="3">
        Header
      </GridItem>
      <GridItem colSpan={1} bg="primary.muted" p="3">
        Nav
      </GridItem>
      <GridItem colSpan={3} bg="primary.subtle" p="3">
        Content
      </GridItem>
    </Grid>
  ),
};
