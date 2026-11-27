import type { Meta, StoryObj } from '@storybook/react-vite';
import { AspectRatio, Center } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/AspectRatio',
  component: AspectRatio,
  args: { ratio: 16 / 9, maxW: 'xs' },
  argTypes: {
    ratio: { control: { type: 'number', min: 0.5, max: 4, step: 0.05 }, table: { category: 'Props' } },
    maxW: { control: 'select', options: ['2xs', 'xs', 'sm', 'md'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof AspectRatio>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <AspectRatio {...args}>
      <Center bg="primary.muted">{Number(args.ratio).toFixed(2)}</Center>
    </AspectRatio>
  ),
};

export const Ratios: Story = {
  render: () => (
    <>
      {[16 / 9, 4 / 3, 1].map((r) => (
        <AspectRatio key={r} ratio={r} maxW="xs" mb="4">
          <Center bg="primary.muted">{r.toFixed(2)}</Center>
        </AspectRatio>
      ))}
    </>
  ),
};
