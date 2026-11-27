import type { Meta, StoryObj } from '@storybook/react-vite';
import { Editable, IconButton, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('editable');

const meta = {
  title: 'Chakra/Forms/Text input/Editable',
  component: Editable.Root,
  args: { ...args, defaultValue: 'Click to edit' },
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    placeholder: { control: 'text', table: { category: 'Props' } },
    submitMode: { control: 'select', options: ['enter', 'blur', 'both', 'none'], table: { category: 'Props' } },
    activationMode: {
      control: 'select',
      options: ['focus', 'dblclick', 'click', 'none'],
      table: { category: 'Props' },
    },
  },
} satisfies Meta<typeof Editable.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Editable.Root maxW="xs" {...args}>
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Editable.Root defaultValue="Click to edit" maxW="xs">
      <Editable.Preview />
      <Editable.Input />
    </Editable.Root>
  ),
};

export const WithControls: Story = {
  render: () => (
    <Editable.Root defaultValue="Edit with buttons" maxW="xs" colorPalette="primary">
      <Editable.Label>Title</Editable.Label>
      <Editable.Area>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Area>
      <Editable.Control>
        <Editable.EditTrigger asChild>
          <IconButton variant="ghost" size="xs" aria-label="Edit">
            ✎
          </IconButton>
        </Editable.EditTrigger>
        <Editable.CancelTrigger asChild>
          <IconButton variant="outline" size="xs" aria-label="Cancel">
            ✕
          </IconButton>
        </Editable.CancelTrigger>
        <Editable.SubmitTrigger asChild>
          <IconButton variant="outline" size="xs" aria-label="Save">
            ✓
          </IconButton>
        </Editable.SubmitTrigger>
      </Editable.Control>
    </Editable.Root>
  ),
};

export const States: Story = {
  render: () => (
    <VStack align="start" gap="4">
      <Editable.Root defaultValue="Disabled" disabled>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>
      <Editable.Root defaultValue="Starts in edit mode" defaultEdit>
        <Editable.Preview />
        <Editable.Input />
      </Editable.Root>
    </VStack>
  ),
};
