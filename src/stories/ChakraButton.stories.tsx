import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, HStack, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('button');

const meta = {
  title: 'Chakra/Actions/Button',
  component: Button,
  args: { ...args, children: 'Continue' },
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {};
export const Solid: Story = { args: { variant: 'solid' } };
export const Outline: Story = { args: { variant: 'outline' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Disabled: Story = { args: { disabled: true } };

export const Matrix: Story = {
  render: () => (
    <VStack align="start" gap="4">
      {(['solid', 'outline', 'ghost'] as const).map((v) => (
        <HStack key={v} gap="4">
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <Button key={s} variant={v} size={s} colorPalette="primary">{v} {s}</Button>
          ))}
          <Button variant={v} colorPalette="primary" disabled>{v} disabled</Button>
        </HStack>
      ))}
    </VStack>
  ),
};
