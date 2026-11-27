import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Button, Collapsible } from '@chakra-ui/react';

// The Collapsible recipe has no variants. Controls are written by hand.
const meta = {
  title: 'Chakra/Disclosure/Collapsible',
  component: Collapsible.Root,
  args: { defaultOpen: false, disabled: false, lazyMount: false, unmountOnExit: false },
  argTypes: {
    defaultOpen: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    lazyMount: { control: 'boolean', table: { category: 'Props' } },
    unmountOnExit: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Collapsible.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  // The key remounts the component, because defaultOpen is read only on mount.
  render: (args) => (
    <Collapsible.Root key={String(args.defaultOpen)} maxW="sm" {...args}>
      <Collapsible.Trigger asChild>
        <Button variant="outline" colorPalette="primary">
          Toggle details
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Box padding="4" borderWidth="1px" mt="2">
          Hidden details appear here.
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Collapsible.Root maxW="sm">
      <Collapsible.Trigger asChild>
        <Button variant="outline" colorPalette="primary">
          Toggle details
        </Button>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <Box padding="4" borderWidth="1px" mt="2">
          Hidden details appear here.
        </Box>
      </Collapsible.Content>
    </Collapsible.Root>
  ),
};
