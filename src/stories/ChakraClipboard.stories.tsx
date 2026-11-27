import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Clipboard, Input, InputGroup, VStack } from '@chakra-ui/react';

// No Chakra recipe for Clipboard. Controls are written by hand.
const meta = {
  title: 'Chakra/Actions/Clipboard',
  component: Clipboard.Root,
  args: { value: 'npm run storybook', timeout: 3000 },
  argTypes: {
    value: { control: 'text', table: { category: 'Props' } },
    timeout: { control: 'number', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Clipboard.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Clipboard.Root {...args}>
      <Clipboard.Trigger asChild>
        <Button variant="outline" colorPalette="primary">
          <Clipboard.Indicator copied="Copied">Copy command</Clipboard.Indicator>
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  ),
};

export const ButtonTrigger: Story = {
  name: 'Button trigger',
  render: () => (
    <Clipboard.Root value="npm run storybook">
      <Clipboard.Trigger asChild>
        <Button variant="outline" colorPalette="primary">
          <Clipboard.Indicator copied="Copied">Copy command</Clipboard.Indicator>
        </Button>
      </Clipboard.Trigger>
    </Clipboard.Root>
  ),
};

export const WithInput: Story = {
  render: () => (
    <VStack align="stretch" maxW="sm">
      <Clipboard.Root value="https://example.com/design-system">
        <Clipboard.Label>Share link</Clipboard.Label>
        <InputGroup endElement={<Clipboard.Trigger>Copy</Clipboard.Trigger>}>
          <Clipboard.Input asChild>
            <Input />
          </Clipboard.Input>
        </InputGroup>
      </Clipboard.Root>
    </VStack>
  ),
};
