import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Box',
  component: Box,
  args: {
    bg: 'primary.solid',
    color: 'primary.contrast',
    p: '4',
    maxW: 'sm',
    borderWidth: '0px',
    borderColor: 'ads.border.contrast',
  },
  argTypes: {
    bg: { control: 'select', options: ['primary.solid', 'primary.muted', 'success.subtle', 'critical.subtle', 'transparent'], table: { category: 'Props' } },
    color: { control: 'select', options: ['primary.contrast', 'primary.fg', 'ads.text.body.primary'], table: { category: 'Props' } },
    p: { control: 'select', options: ['0', '2', '4', '8'], table: { category: 'Props' } },
    maxW: { control: 'select', options: ['xs', 'sm', 'md', 'lg'], table: { category: 'Props' } },
    borderWidth: { control: 'inline-radio', options: ['0px', '1px', '2px', '4px'], table: { category: 'Props' } },
    borderColor: { control: 'select', options: ['ads.border.contrast', 'ads.border.300', 'primary.solid'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Box>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Box {...args}>Box with token colors and spacing.</Box>,
};

export const Default: Story = {
  render: () => (
    <Box bg="primary.solid" color="primary.contrast" p="4" maxW="sm">
      Box with token colors and spacing.
    </Box>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Box borderWidth="2px" borderColor="ads.border.contrast" p="4" maxW="sm">
      Square corners come from the theme.
    </Box>
  ),
};
