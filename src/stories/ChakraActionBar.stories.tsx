import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionBar, Button, Checkbox, Portal } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('actionBar', { palette: false });

const meta = {
  title: 'Chakra/Actions/ActionBar',
  component: ActionBar.Root,
  args: { ...args, open: true },
  argTypes: {
    ...argTypes,
    open: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof ActionBar.Root>;
export default meta;
type Story = StoryObj;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <ActionBar.Root {...args}>
      <Portal>
        <ActionBar.Positioner>
          <ActionBar.Content>
            <ActionBar.SelectionTrigger>1 selected</ActionBar.SelectionTrigger>
            <ActionBar.Separator />
            <Button variant="outline" size="sm" colorPalette="primary">
              Delete
            </Button>
            <Button variant="outline" size="sm" colorPalette="primary">
              Share
            </Button>
          </ActionBar.Content>
        </ActionBar.Positioner>
      </Portal>
    </ActionBar.Root>
  ),
};

export const Default: Story = {
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return (
      <>
        <Checkbox.Root colorPalette="primary" checked={checked} onCheckedChange={(e) => setChecked(!!e.checked)}>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>Select item</Checkbox.Label>
        </Checkbox.Root>
        <ActionBar.Root open={checked}>
          <Portal>
            <ActionBar.Positioner>
              <ActionBar.Content>
                <ActionBar.SelectionTrigger>1 selected</ActionBar.SelectionTrigger>
                <ActionBar.Separator />
                <Button variant="outline" size="sm" colorPalette="primary">
                  Delete
                </Button>
                <Button variant="outline" size="sm" colorPalette="primary">
                  Share
                </Button>
              </ActionBar.Content>
            </ActionBar.Positioner>
          </Portal>
        </ActionBar.Root>
      </>
    );
  },
};
