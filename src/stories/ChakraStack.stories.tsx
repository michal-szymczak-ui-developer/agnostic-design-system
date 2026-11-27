import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, HStack, Stack, VStack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Stack',
  component: Stack,
  args: { direction: 'column', gap: '3', align: 'flex-start', justify: 'flex-start', wrap: 'nowrap' },
  argTypes: {
    direction: { control: 'select', options: ['row', 'column', 'row-reverse', 'column-reverse'], table: { category: 'Props' } },
    gap: { control: 'select', options: ['0', '2', '3', '6', '8'], table: { category: 'Props' } },
    align: { control: 'select', options: ['stretch', 'flex-start', 'center', 'flex-end'], table: { category: 'Props' } },
    justify: { control: 'select', options: ['flex-start', 'center', 'flex-end', 'space-between'], table: { category: 'Props' } },
    wrap: { control: 'inline-radio', options: ['nowrap', 'wrap'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Stack>;
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
    <Stack {...args} borderWidth="1px" borderColor="ads.border.300" p="2" maxW="md" minH="40">
      {[1, 2, 3].map((n) => (
        <Cell key={n} n={n} />
      ))}
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <VStack align="start" gap="3">
      {[1, 2, 3].map((n) => (
        <Cell key={n} n={n} />
      ))}
    </VStack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <HStack gap="3">
      {[1, 2, 3].map((n) => (
        <Cell key={n} n={n} />
      ))}
    </HStack>
  ),
};
