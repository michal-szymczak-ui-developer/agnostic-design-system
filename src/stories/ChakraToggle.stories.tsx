import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Toggle } from '@chakra-ui/react';

// No recipe variants for Toggle in this theme. Controls are written by hand.
const meta = {
  title: 'Chakra/Actions/Toggle',
  component: Toggle.Root,
  args: { defaultPressed: false, disabled: false },
  argTypes: {
    defaultPressed: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Toggle.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  // The key remounts the component, because defaultPressed is read only on mount.
  render: (args) => (
    <Toggle.Root key={String(args.defaultPressed)} {...args}>
      <Toggle.Indicator fallback="Off">On</Toggle.Indicator>
    </Toggle.Root>
  ),
};

export const States: Story = {
  render: () => (
    <HStack gap="3">
      <Toggle.Root>
        <Toggle.Indicator fallback="Off">On</Toggle.Indicator>
      </Toggle.Root>
      <Toggle.Root defaultPressed>
        <Toggle.Indicator fallback="Off">On</Toggle.Indicator>
      </Toggle.Root>
      <Toggle.Root disabled>
        <Toggle.Indicator fallback="Disabled">On</Toggle.Indicator>
      </Toggle.Root>
    </HStack>
  ),
};
