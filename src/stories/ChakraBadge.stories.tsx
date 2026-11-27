import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, HStack, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('badge');

const meta = {
  title: 'Chakra/Data display/Badge',
  component: Badge,
  args: { ...args, children: 'Badge' },
  argTypes,
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The component takes args directly.
export const Playground: Story = {};

const palettes = ['primary', 'success', 'warning', 'critical', 'info'] as const;

export const Matrix: Story = {
  render: () => (
    <VStack align="start" gap="3">
      {(['solid', 'subtle', 'outline'] as const).map((v) => (
        <HStack key={v} gap="3">
          {palettes.map((p) => (
            <Badge key={p} variant={v} colorPalette={p}>
              {p}
            </Badge>
          ))}
        </HStack>
      ))}
    </VStack>
  ),
};
