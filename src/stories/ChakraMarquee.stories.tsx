import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, Marquee } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Marquee',
  component: Marquee.Root,
  args: { speed: 50, reverse: false, pauseOnInteraction: false, autoFill: false, spacing: '1rem', maxW: 'md' },
  argTypes: {
    speed: { control: { type: 'number', min: 10, max: 200, step: 10 }, description: 'Pixels per second.', table: { category: 'Props' } },
    reverse: { control: 'boolean', table: { category: 'Props' } },
    pauseOnInteraction: { control: 'boolean', table: { category: 'Props' } },
    autoFill: { control: 'boolean', table: { category: 'Props' } },
    spacing: { control: 'text', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Marquee.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const words = ['Tokens', 'Components', 'Storybook', 'Chakra', 'Figma'];

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Marquee.Root {...args}>
      <Marquee.Viewport>
        <Marquee.Content>
          {words.map((w) => (
            <Marquee.Item key={w} px="2">
              <Badge colorPalette="primary">{w}</Badge>
            </Marquee.Item>
          ))}
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Marquee.Root maxW="md">
      <Marquee.Viewport>
        <Marquee.Content>
          {words.map((w) => (
            <Marquee.Item key={w} px="2">
              <Badge colorPalette="primary">{w}</Badge>
            </Marquee.Item>
          ))}
        </Marquee.Content>
      </Marquee.Viewport>
    </Marquee.Root>
  ),
};
