import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Flex } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Flex',
  component: Flex,
  args: { direction: 'row', gap: '4', align: 'center', justify: 'flex-start', wrap: 'nowrap' },
  argTypes: {
    direction: { control: 'select', options: ['row', 'column', 'row-reverse', 'column-reverse'], table: { category: 'Props' } },
    gap: { control: 'select', options: ['0', '2', '4', '8'], table: { category: 'Props' } },
    align: { control: 'select', options: ['stretch', 'flex-start', 'center', 'flex-end', 'baseline'], table: { category: 'Props' } },
    justify: { control: 'select', options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'], table: { category: 'Props' } },
    wrap: { control: 'inline-radio', options: ['nowrap', 'wrap', 'wrap-reverse'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Flex>;
export default meta;
type Story = StoryObj<typeof meta>;

const Cell = ({ n }: { n: number }) => (
  <Box bg="primary.solid" color="primary.contrast" px="4" py="2">
    {n}
  </Box>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Flex {...args} borderWidth="1px" borderColor="ads.border.300" p="2" maxW="md" minH="24">
      {[1, 2, 3].map((n) => (
        <Cell key={n} n={n} />
      ))}
    </Flex>
  ),
};

export const Row: Story = {
  render: () => (
    <Flex gap="4" align="center">
      {[1, 2, 3].map((n) => (
        <Cell key={n} n={n} />
      ))}
    </Flex>
  ),
};

export const Justify: Story = {
  render: () => (
    <Flex justify="space-between" borderWidth="1px" borderColor="ads.border.300" p="2" maxW="md">
      {[1, 2, 3].map((n) => (
        <Cell key={n} n={n} />
      ))}
    </Flex>
  ),
};
