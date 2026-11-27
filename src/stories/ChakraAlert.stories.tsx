import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('alert');

const meta = {
  title: 'Chakra/Feedback/Alert',
  component: Alert.Root,
  args: { ...args, colorPalette: 'info' },
  argTypes,
} satisfies Meta<typeof Alert.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The palette is explicit: Chakra does not map status to our palettes.
export const Playground: Story = {
  render: (args) => (
    <Alert.Root {...args} maxW="lg">
      <Alert.Indicator />
      <Alert.Content>
        <Alert.Title>Update</Alert.Title>
        <Alert.Description>A new version is available.</Alert.Description>
      </Alert.Content>
    </Alert.Root>
  ),
};

const items = [
  { status: 'success', palette: 'success', title: 'Saved', text: 'Your changes are saved.' },
  { status: 'warning', palette: 'warning', title: 'Check input', text: 'Some fields need review.' },
  { status: 'error', palette: 'critical', title: 'Failed', text: 'The request did not complete.' },
  { status: 'info', palette: 'info', title: 'Update', text: 'A new version is available.' },
] as const;

export const Status: Story = {
  render: () => (
    <VStack align="stretch" gap="3" maxW="lg">
      {items.map((i) => (
        <Alert.Root key={i.status} status={i.status} colorPalette={i.palette} variant="subtle">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>{i.title}</Alert.Title>
            <Alert.Description>{i.text}</Alert.Description>
          </Alert.Content>
        </Alert.Root>
      ))}
    </VStack>
  ),
};
