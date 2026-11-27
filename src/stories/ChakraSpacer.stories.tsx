import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Flex, Spacer } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Spacer',
  component: Spacer,
  args: { flex: '1', bg: 'primary.subtle' },
  argTypes: {
    flex: { control: 'inline-radio', options: ['0', '1', '2', '3'], table: { category: 'Props' } },
    bg: { control: 'select', options: ['transparent', 'primary.subtle', 'primary.muted'], description: 'Color makes the space visible.', table: { category: 'Props' } },
    minW: { control: 'select', options: ['0', '8', '16', '32'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Spacer>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Flex maxW="md" gap="2">
      <Button variant="ghost" colorPalette="primary">
        Back
      </Button>
      <Spacer {...args} />
      <Button colorPalette="primary">Next</Button>
    </Flex>
  ),
};

export const Default: Story = {
  render: () => (
    <Flex maxW="md" gap="2">
      <Button variant="ghost" colorPalette="primary">
        Back
      </Button>
      <Spacer />
      <Button colorPalette="primary">Next</Button>
    </Flex>
  ),
};
