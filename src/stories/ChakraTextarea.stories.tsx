import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field, Textarea, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('textarea', { palette: false });

const meta = {
  title: 'Chakra/Forms/Text input/Textarea',
  component: Textarea,
  args: { ...args, placeholder: 'Write a message' },
  argTypes: {
    ...argTypes,
    placeholder: { control: 'text', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    autoresize: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Field.Root maxW="md">
      <Textarea {...args} />
    </Field.Root>
  ),
};

export const Variants: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="md">
      {(['outline', 'subtle', 'flushed'] as const).map((v) => (
        <Textarea key={v} variant={v} placeholder={v} />
      ))}
    </VStack>
  ),
};

export const States: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="md">
      <Field.Root invalid>
        <Textarea defaultValue="Invalid" />
        <Field.ErrorText>This field is invalid.</Field.ErrorText>
      </Field.Root>
      <Textarea disabled defaultValue="Disabled" />
      <Textarea autoresize placeholder="Grows with content" />
    </VStack>
  ),
};
