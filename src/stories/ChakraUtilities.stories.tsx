import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Box,
  Button,
  For,
  FormatByte,
  FormatNumber,
  Portal,
  Presence,
  Show,
  Stack,
  Text,
  Theme,
  VisuallyHidden,
} from '@chakra-ui/react';

const meta = { title: 'Chakra/Utilities/Utilities' } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const ForAndShow: Story = {
  render: () => (
    <Stack gap="3">
      <For each={['Primary', 'Secondary', 'Tertiary']} fallback={<Text>No items</Text>}>
        {(item) => <Text key={item}>{item}</Text>}
      </For>
      <Show when={false} fallback={<Text>Show: fallback</Text>}>
        <Text>Show: content</Text>
      </Show>
    </Stack>
  ),
};

export const Formatting: Story = {
  render: () => (
    <Stack gap="2">
      <Text>
        Number: <FormatNumber value={1234567.891} maximumFractionDigits={1} />
      </Text>
      <Text>
        Percent: <FormatNumber value={0.256} style="percent" />
      </Text>
      <Text>
        Currency: <FormatNumber value={1450} style="currency" currency="EUR" />
      </Text>
      <Text>
        Bytes: <FormatByte value={1450000} />
      </Text>
    </Stack>
  ),
};

export const HiddenText: Story = {
  render: () => (
    <Button colorPalette="primary">
      <span aria-hidden>X</span>
      <VisuallyHidden>Close dialog (read by screen readers only)</VisuallyHidden>
    </Button>
  ),
};

export const PresenceExample: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <Stack gap="3" align="start">
        <Button variant="outline" colorPalette="primary" onClick={() => setOpen((o) => !o)}>
          Toggle
        </Button>
        <Presence
          present={open}
          animationName={{ _open: 'slide-from-bottom, fade-in', _closed: 'slide-to-bottom, fade-out' }}
          animationDuration="moderate"
        >
          <Box p="4" borderWidth="1px">
            Presence content
          </Box>
        </Presence>
      </Stack>
    );
  },
};

export const PortalExample: Story = {
  render: () => (
    <Box>
      <Text>Text in the story root.</Text>
      <Portal>
        <Box position="fixed" bottom="4" right="4" p="3" borderWidth="1px" bg="ads.bg.surface.brand">
          Rendered in a portal on document.body
        </Box>
      </Portal>
    </Box>
  ),
};

export const ThemeExample: Story = {
  render: () => (
    <Stack gap="3">
      <Theme appearance="light" p="4" bg="ads.bg.base.primary" color="ads.text.body.primary">
        Forced light theme
      </Theme>
      <Theme appearance="dark" p="4" bg="ads.bg.base.primary" color="ads.text.body.primary">
        Forced dark theme
      </Theme>
    </Stack>
  ),
};
