import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, FloatingPanel, Portal } from '@chakra-ui/react';

const props = { table: { category: 'Props' } } as const;

function Demo(rootProps: ComponentProps<typeof FloatingPanel.Root>) {
  return (
    <FloatingPanel.Root {...rootProps}>
      <FloatingPanel.Trigger asChild>
        <Button variant="outline" colorPalette="primary">
          Toggle panel
        </Button>
      </FloatingPanel.Trigger>
      <Portal>
        <FloatingPanel.Positioner>
          <FloatingPanel.Content>
            <FloatingPanel.DragTrigger>
              <FloatingPanel.Header>
                <FloatingPanel.Title>Notes</FloatingPanel.Title>
                <FloatingPanel.Control>
                  <FloatingPanel.StageTrigger stage="minimized">_</FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="maximized">[]</FloatingPanel.StageTrigger>
                  <FloatingPanel.StageTrigger stage="default">o</FloatingPanel.StageTrigger>
                  <FloatingPanel.CloseTrigger>x</FloatingPanel.CloseTrigger>
                </FloatingPanel.Control>
              </FloatingPanel.Header>
            </FloatingPanel.DragTrigger>
            <FloatingPanel.Body>Drag the header. Resize from the edges.</FloatingPanel.Body>
            <FloatingPanel.ResizeTriggers />
          </FloatingPanel.Content>
        </FloatingPanel.Positioner>
      </Portal>
    </FloatingPanel.Root>
  );
}

// The floating panel recipe has no variants, so only behavior controls exist.
const meta = {
  title: 'Chakra/Overlays/FloatingPanel',
  component: Demo,
  args: { draggable: true, resizable: true, closeOnEscape: true },
  argTypes: {
    draggable: { control: 'boolean', ...props },
    resizable: { control: 'boolean', ...props },
    closeOnEscape: { control: 'boolean', ...props },
    lockAspectRatio: { control: 'boolean', ...props },
    allowOverflow: { control: 'boolean', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
