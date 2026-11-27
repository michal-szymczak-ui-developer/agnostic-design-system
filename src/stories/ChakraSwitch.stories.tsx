import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('switch');

const meta = {
  title: 'Chakra/Forms/Selection/Switch',
  component: Switch.Root,
  args,
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Switch.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Switch.Root {...args}>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label>Notifications</Switch.Label>
    </Switch.Root>
  ),
};

const Item = (p: { label: string; checked?: boolean; disabled?: boolean }) => (
  <Switch.Root colorPalette="primary" defaultChecked={p.checked} disabled={p.disabled}>
    <Switch.HiddenInput />
    <Switch.Control>
      <Switch.Thumb />
    </Switch.Control>
    <Switch.Label>{p.label}</Switch.Label>
  </Switch.Root>
);

export const States: Story = {
  render: () => (
    <VStack align="start" gap="3">
      <Item label="Off" />
      <Item label="On" checked />
      <Item label="Disabled" disabled />
    </VStack>
  ),
};
