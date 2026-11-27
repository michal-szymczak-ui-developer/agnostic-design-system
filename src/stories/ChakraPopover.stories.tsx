import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Popover, Portal } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('popover', { palette: false });
const props = { table: { category: 'Props' } } as const;
const placements = ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-start', 'top-end', 'left', 'right'];

type DemoProps = Omit<ComponentProps<typeof Popover.Root>, 'children'> & { placement?: string };

function Demo({ placement, ...rootProps }: DemoProps) {
  return (
    <Popover.Root
      lazyMount
      unmountOnExit
      positioning={placement ? { placement: placement as 'bottom' } : undefined}
      {...rootProps}
    >
      <Popover.Trigger asChild>
        <Button variant="outline" colorPalette="primary">
          Open popover
        </Button>
      </Popover.Trigger>
      <Portal>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Arrow>
              <Popover.ArrowTip />
            </Popover.Arrow>
            <Popover.Body>
              <Popover.Title>Tip</Popover.Title>
              Use tokens, not raw values.
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
}

const meta = {
  title: 'Chakra/Overlays/Popover',
  component: Demo,
  args: { ...args, placement: 'bottom', closeOnEscape: true, closeOnInteractOutside: true },
  argTypes: {
    ...argTypes,
    placement: { control: 'select', options: placements, ...props },
    closeOnEscape: { control: 'boolean', ...props },
    closeOnInteractOutside: { control: 'boolean', ...props },
    modal: { control: 'boolean', ...props },
    autoFocus: { control: 'boolean', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
