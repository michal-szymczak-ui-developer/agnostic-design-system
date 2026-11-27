import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, createToaster, HStack, Portal, Spinner, Stack, Toast, Toaster } from '@chakra-ui/react';

const toaster = createToaster({ placement: 'bottom-end', pauseOnPageIdle: true });

const meta = { title: 'Chakra/Feedback/Toast', component: Toaster } satisfies Meta<typeof Toaster>;
export default meta;
type Story = StoryObj;

// Toaster has no Chakra recipe and no props that fit Controls. Controls set the toast content instead.
type PlaygroundArgs = {
  type: 'success' | 'warning' | 'error' | 'info' | 'loading';
  title: string;
  description: string;
  duration: number;
  closable: boolean;
};

export const Playground: StoryObj<PlaygroundArgs> = {
  args: { type: 'info', title: 'Toast title', description: 'Short message.', duration: 5000, closable: true },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info', 'loading'],
      table: { category: 'Props' },
    },
    title: { control: 'text', table: { category: 'Props' } },
    description: { control: 'text', table: { category: 'Props' } },
    duration: { control: 'number', table: { category: 'Props' } },
    closable: { control: 'boolean', table: { category: 'Props' } },
  },
  render: ({ type, title, description, duration, closable }) => (
    <>
      <Button
        colorPalette="primary"
        onClick={() => toaster.create({ type, title, description, duration, closable })}
      >
        Show toast
      </Button>
      <Portal>
        <Toaster toaster={toaster} insetInline={{ mdDown: '4' }}>
          {(toast) => (
            <Toast.Root width={{ md: 'sm' }}>
              {toast.type === 'loading' ? <Spinner size="sm" /> : <Toast.Indicator />}
              <Stack gap="1" flex="1" maxWidth="100%">
                {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
                {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
              </Stack>
              {toast.closable && <Toast.CloseTrigger />}
            </Toast.Root>
          )}
        </Toaster>
      </Portal>
    </>
  ),
};

export const Default: Story = {
  render: () => (
    <>
      <HStack gap="3">
        {(['success', 'warning', 'error', 'info'] as const).map((type) => (
          <Button
            key={type}
            variant="outline"
            colorPalette="primary"
            onClick={() => toaster.create({ title: `Toast: ${type}`, description: 'Short message.', type })}
          >
            {type}
          </Button>
        ))}
      </HStack>
      <Portal>
        <Toaster toaster={toaster} insetInline={{ mdDown: '4' }}>
          {(toast) => (
            <Toast.Root width={{ md: 'sm' }}>
              {toast.type === 'loading' ? <Spinner size="sm" /> : <Toast.Indicator />}
              <Stack gap="1" flex="1" maxWidth="100%">
                {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
                {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
              </Stack>
              {toast.closable && <Toast.CloseTrigger />}
            </Toast.Root>
          )}
        </Toaster>
      </Portal>
    </>
  ),
};
