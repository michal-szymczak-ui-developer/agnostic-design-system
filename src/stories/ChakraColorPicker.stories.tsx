import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorPicker, HStack, Portal, parseColor } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('colorPicker', { palette: false });

const meta = {
  title: 'Chakra/Forms/Date and color/ColorPicker',
  component: ColorPicker.Root,
  args,
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof ColorPicker.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Picker = (p: ComponentProps<typeof ColorPicker.Root>) => (
  <ColorPicker.Root defaultValue={parseColor('#A100FF')} maxW="xs" {...p}>
    <ColorPicker.HiddenInput />
    <ColorPicker.Label>Brand color</ColorPicker.Label>
    <ColorPicker.Control>
      <ColorPicker.Input />
      <ColorPicker.Trigger />
    </ColorPicker.Control>
    <Portal>
      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <ColorPicker.Area />
          <HStack>
            <ColorPicker.EyeDropper size="xs" variant="outline" />
            <ColorPicker.Sliders />
          </HStack>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
    </Portal>
  </ColorPicker.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Picker {...args} /> };
export const Default: Story = { render: () => <Picker /> };
export const Sizes: Story = {
  render: () => (
    <HStack align="start" gap="6">
      <Picker size="sm" />
      <Picker size="lg" />
    </HStack>
  ),
};
export const Disabled: Story = { render: () => <Picker disabled /> };
