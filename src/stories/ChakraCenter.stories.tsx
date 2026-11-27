import type { Meta, StoryObj } from '@storybook/react-vite';
import { Center } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Center',
  component: Center,
  args: { h: '32', w: '64', bg: 'primary.muted' },
  argTypes: {
    h: { control: 'select', options: ['16', '24', '32', '48'], table: { category: 'Props' } },
    w: { control: 'select', options: ['32', '48', '64', '96'], table: { category: 'Props' } },
    bg: { control: 'select', options: ['primary.muted', 'primary.solid', 'success.subtle', 'info.subtle'], table: { category: 'Props' } },
    inline: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Center>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Center {...args}>Centered content</Center>,
};

export const Default: Story = {
  render: () => (
    <Center h="32" w="64" bg="primary.muted">
      Centered content
    </Center>
  ),
};
