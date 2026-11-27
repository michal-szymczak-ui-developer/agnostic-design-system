import type { Meta, StoryObj } from '@storybook/react-vite';
import { Group, Input, InputAddon, InputGroup, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

// InputGroup has no recipe. Size and variant come from the Input recipe.
type Args = {
  startElement?: string;
  endElement?: string;
  size?: ComponentProps<typeof Input>['size'];
  variant?: ComponentProps<typeof Input>['variant'];
};

const { argTypes, args } = recipeControls('input', { palette: false });

const meta: Meta<Args> = {
  title: 'Chakra/Forms/Text input/InputGroup',
  args: { ...args, startElement: '$', endElement: 'kg' },
  argTypes: {
    ...argTypes,
    startElement: { control: 'text', table: { category: 'Props' } },
    endElement: { control: 'text', table: { category: 'Props' } },
  },
};
export default meta;
type Story = StoryObj<Args>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: ({ startElement, endElement, size, variant }) => (
    <InputGroup
      maxW="sm"
      startElement={startElement || undefined}
      endElement={endElement || undefined}
    >
      <Input placeholder="Amount" size={size} variant={variant} />
    </InputGroup>
  ),
};

export const Elements: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="sm">
      <InputGroup startElement="$">
        <Input placeholder="Amount" />
      </InputGroup>
      <InputGroup endElement="kg">
        <Input placeholder="Weight" />
      </InputGroup>
      <InputGroup startElement="@" endElement=".com">
        <Input placeholder="domain" />
      </InputGroup>
    </VStack>
  ),
};

export const Addons: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="sm">
      <Group attached>
        <InputAddon>https://</InputAddon>
        <Input placeholder="example" />
      </Group>
      <Group attached>
        <Input placeholder="example" />
        <InputAddon>.com</InputAddon>
      </Group>
    </VStack>
  ),
};
