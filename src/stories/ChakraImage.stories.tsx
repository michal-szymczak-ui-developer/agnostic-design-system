import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Image } from '@chakra-ui/react';

const svg =
  "<svg xmlns='http://www.w3.org/2000/svg' width='160' height='120'><rect width='160' height='120' fill='#A100FF'/><circle cx='80' cy='60' r='30' fill='#E6DCFF'/></svg>";
const src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

const meta = {
  title: 'Chakra/Media/Image',
  component: Image,
  args: { src, alt: 'Sample', boxSize: '32', objectFit: 'cover' },
  argTypes: {
    boxSize: { control: 'select', options: ['16', '24', '32', '40'], table: { category: 'Props' } },
    objectFit: { control: 'inline-radio', options: ['cover', 'contain', 'fill', 'none'], table: { category: 'Props' } },
    alt: { control: 'text', table: { category: 'Props' } },
    src: { control: false },
  },
} satisfies Meta<typeof Image>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Image {...args} />,
};

export const Default: Story = {
  render: () => <Image src={src} alt="Sample" w="40" />,
};

export const Fit: Story = {
  render: () => (
    <HStack gap="4">
      {(['cover', 'contain'] as const).map((f) => (
        <Image key={f} src={src} alt={f} boxSize="32" objectFit={f} />
      ))}
    </HStack>
  ),
};
