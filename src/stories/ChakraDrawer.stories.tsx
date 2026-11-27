import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, CloseButton, Drawer, Portal } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('drawer', { palette: false });
const props = { table: { category: 'Props' } } as const;

function Demo(rootProps: Omit<ComponentProps<typeof Drawer.Root>, 'children'>) {
  return (
    <Drawer.Root lazyMount unmountOnExit {...rootProps}>
      <Drawer.Trigger asChild>
        <Button colorPalette="primary">Open drawer</Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Filters</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>Choose how to filter the list.</Drawer.Body>
            <Drawer.Footer>
              <Drawer.ActionTrigger asChild>
                <Button variant="outline" colorPalette="primary">
                  Cancel
                </Button>
              </Drawer.ActionTrigger>
              <Button colorPalette="primary">Apply</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
}

const meta = {
  title: 'Chakra/Overlays/Drawer',
  component: Demo,
  args: { ...args, modal: true, closeOnEscape: true, closeOnInteractOutside: true },
  argTypes: {
    ...argTypes,
    modal: { control: 'boolean', ...props },
    closeOnEscape: { control: 'boolean', ...props },
    closeOnInteractOutside: { control: 'boolean', ...props },
    trapFocus: { control: 'boolean', ...props },
    preventScroll: { control: 'boolean', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
