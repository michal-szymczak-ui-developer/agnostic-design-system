import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bleed, Box } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Bleed',
  component: Bleed,
  args: { inline: '8', block: '0' },
  argTypes: {
    inline: { control: 'select', options: ['0', '2', '4', '8'], table: { category: 'Props' } },
    block: { control: 'select', options: ['0', '2', '4', '8'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Bleed>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Box borderWidth="1px" borderColor="ads.border.300" p="8" maxW="md">
      <Bleed {...args}>
        <Box bg="primary.solid" color="primary.contrast" p="3">
          Bleeds past the parent padding.
        </Box>
      </Bleed>
    </Box>
  ),
};

export const Inline: Story = {
  render: () => (
    <Box borderWidth="1px" borderColor="ads.border.300" p="8" maxW="md">
      <Bleed inline="8">
        <Box bg="primary.solid" color="primary.contrast" p="3">
          Bleeds past the parent padding.
        </Box>
      </Bleed>
    </Box>
  ),
};
