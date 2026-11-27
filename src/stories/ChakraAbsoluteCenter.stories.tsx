import type { Meta, StoryObj } from '@storybook/react-vite';
import { AbsoluteCenter, Box } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/AbsoluteCenter',
  component: AbsoluteCenter,
  args: { axis: 'both', bg: 'primary.solid', color: 'primary.contrast', px: '3', py: '1' },
  argTypes: {
    axis: { control: 'inline-radio', options: ['both', 'horizontal', 'vertical'], table: { category: 'Props' } },
    bg: { control: 'select', options: ['primary.solid', 'success.solid', 'critical.solid', 'info.solid'], table: { category: 'Props' } },
    px: { control: 'select', options: ['0', '2', '3', '6'], table: { category: 'Props' } },
    py: { control: 'select', options: ['0', '1', '2', '4'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof AbsoluteCenter>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Box position="relative" h="32" w="64" bg="primary.muted">
      <AbsoluteCenter {...args}>Centered</AbsoluteCenter>
    </Box>
  ),
};

export const Both: Story = {
  render: () => (
    <Box position="relative" h="32" w="64" bg="primary.muted">
      <AbsoluteCenter bg="primary.solid" color="primary.contrast" px="3" py="1">
        Centered
      </AbsoluteCenter>
    </Box>
  ),
};

export const HorizontalOnly: Story = {
  render: () => (
    <Box position="relative" h="32" w="64" bg="primary.muted">
      <AbsoluteCenter axis="horizontal" top="2" bg="primary.solid" color="primary.contrast" px="3" py="1">
        Horizontal
      </AbsoluteCenter>
    </Box>
  ),
};
