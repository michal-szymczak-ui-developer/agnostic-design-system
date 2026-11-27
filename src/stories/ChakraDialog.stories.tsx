import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, CloseButton, Dialog, Portal } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('dialog', { palette: false });
const props = { table: { category: 'Props' } } as const;

function Demo(rootProps: Omit<ComponentProps<typeof Dialog.Root>, 'children'>) {
  return (
    <Dialog.Root lazyMount unmountOnExit {...rootProps}>
      <Dialog.Trigger asChild>
        <Button colorPalette="primary">Open dialog</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Confirm action</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>This action starts the export. You can cancel it later.</Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" colorPalette="primary">
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button colorPalette="primary">Confirm</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

const meta = {
  title: 'Chakra/Overlays/Dialog',
  component: Demo,
  args: { ...args, modal: true, closeOnEscape: true, closeOnInteractOutside: true },
  argTypes: {
    ...argTypes,
    modal: { control: 'boolean', ...props },
    closeOnEscape: { control: 'boolean', ...props },
    closeOnInteractOutside: { control: 'boolean', ...props },
    trapFocus: { control: 'boolean', ...props },
    preventScroll: { control: 'boolean', ...props },
    role: { control: 'inline-radio', options: ['dialog', 'alertdialog'], ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
