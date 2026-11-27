import type { Meta, StoryObj } from '@storybook/react-vite';
import { Circle, HStack } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Circle',
  component: Circle,
  args: { size: '12', bg: 'primary.solid', color: 'primary.contrast' },
  argTypes: {
    size: { control: 'select', options: ['6', '8', '12', '16', '24'], table: { category: 'Props' } },
    bg: { control: 'select', options: ['primary.solid', 'success.solid', 'warning.solid', 'critical.solid', 'info.solid'], table: { category: 'Props' } },
    color: { control: 'select', options: ['primary.contrast', 'success.contrast', 'critical.contrast'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Circle>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Circle {...args}>{String(args.size)}</Circle>,
};

export const Sizes: Story = {
  render: () => (
    <HStack gap="3">
      {['8', '12', '16'].map((s) => (
        <Circle key={s} size={s} bg="primary.solid" color="primary.contrast">
          {s}
        </Circle>
      ))}
    </HStack>
  ),
};
