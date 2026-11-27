import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, QrCode } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('qrCode', { palette: false });

const meta = {
  title: 'Chakra/Media/QrCode',
  component: QrCode.Root,
  args: { ...args, value: 'https://example.com' },
  argTypes: {
    ...argTypes,
    value: { control: 'text', table: { category: 'Props' } },
  },
} satisfies Meta<typeof QrCode.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <QrCode.Root {...args}>
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <QrCode.Root value="https://example.com">
      <QrCode.Frame>
        <QrCode.Pattern />
      </QrCode.Frame>
    </QrCode.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <HStack gap="6">
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <QrCode.Root key={s} size={s} value="https://example.com">
          <QrCode.Frame>
            <QrCode.Pattern />
          </QrCode.Frame>
        </QrCode.Root>
      ))}
    </HStack>
  ),
};
