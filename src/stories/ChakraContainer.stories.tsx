import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Container } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('container', { palette: false });

const meta = {
  title: 'Chakra/Layout/Container',
  component: Container,
  args: { ...args, maxW: '2xl', bg: 'primary.muted', py: '4' },
  argTypes: {
    ...argTypes,
    maxW: { control: 'select', options: ['md', 'lg', 'xl', '2xl', '4xl'], table: { category: 'Props' } },
    py: { control: 'select', options: ['0', '2', '4', '8'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Container>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Container {...args}>
      <Box>Content limited to a maximum width.</Box>
    </Container>
  ),
};

export const Default: Story = {
  render: () => (
    <Container maxW="2xl" bg="primary.muted" py="4">
      <Box>Content limited to a maximum width.</Box>
    </Container>
  ),
};

export const Centered: Story = {
  render: () => (
    <Container centerContent maxW="md" bg="primary.muted" py="4">
      <Box>Centered content.</Box>
    </Container>
  ),
};
