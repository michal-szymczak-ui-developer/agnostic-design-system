import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Circle, Float } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Float',
  component: Float,
  args: { placement: 'top-end', offset: '0' },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top-start', 'top-center', 'top-end', 'middle-start', 'middle-center', 'middle-end', 'bottom-start', 'bottom-center', 'bottom-end'],
      table: { category: 'Props' },
    },
    offset: { control: 'select', options: ['0', '1', '2', '4'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Float>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Box position="relative" w="24" h="24" bg="primary.muted">
      <Float {...args}>
        <Circle size="5" bg="critical.solid" color="critical.contrast" fontSize="xs">
          3
        </Circle>
      </Float>
    </Box>
  ),
};

export const Placements: Story = {
  render: () => (
    <Box display="flex" gap="8">
      {(['top-end', 'top-start', 'bottom-end', 'middle-end'] as const).map((p) => (
        <Box key={p} position="relative" w="24" h="24" bg="primary.muted">
          <Float placement={p}>
            <Circle size="5" bg="critical.solid" color="critical.contrast" fontSize="xs">
              3
            </Circle>
          </Float>
        </Box>
      ))}
    </Box>
  ),
};
