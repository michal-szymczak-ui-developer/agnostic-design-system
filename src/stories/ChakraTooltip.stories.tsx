import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Portal, Tooltip } from '@chakra-ui/react';

const props = { table: { category: 'Props' } } as const;
const placements = ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-start', 'top-end', 'left', 'right'];

type DemoProps = ComponentProps<typeof Tooltip.Root> & { placement?: string; text?: string };

function Demo({ placement, text = 'Short helper text', ...rootProps }: DemoProps) {
  return (
    <Tooltip.Root positioning={placement ? { placement: placement as 'top' } : undefined} {...rootProps}>
      <Tooltip.Trigger asChild>
        <Button variant="outline" colorPalette="primary">
          Hover me
        </Button>
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            {text}
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}

// The tooltip recipe has no variants, so only behavior controls exist.
const meta = {
  title: 'Chakra/Overlays/Tooltip',
  component: Demo,
  args: { placement: 'top', text: 'Short helper text', openDelay: 0, closeDelay: 0 },
  argTypes: {
    text: { control: 'text', ...props },
    placement: { control: 'select', options: placements, ...props },
    openDelay: { control: 'number', ...props },
    closeDelay: { control: 'number', ...props },
    disabled: { control: 'boolean', ...props },
    interactive: { control: 'boolean', ...props },
    closeOnClick: { control: 'boolean', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo openDelay={0} closeDelay={0} /> };
