import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field, Input, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('input', { palette: false });

const meta = {
  title: 'Chakra/Forms/Text input/Input',
  component: Input,
  args: { ...args, placeholder: 'name@example.com' },
  argTypes: {
    ...argTypes,
    placeholder: { control: 'text', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    required: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Field.Root maxW="sm">
      <Field.Label>Email</Field.Label>
      <Input {...args} />
      <Field.HelperText>Use your work address.</Field.HelperText>
    </Field.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Field.Root maxW="sm">
      <Field.Label>Email</Field.Label>
      <Input placeholder="name@example.com" />
      <Field.HelperText>Use your work address.</Field.HelperText>
    </Field.Root>
  ),
};

export const States: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="sm">
      <Field.Root invalid>
        <Field.Label>Invalid</Field.Label>
        <Input defaultValue="not-an-email" />
        <Field.ErrorText>Enter a valid email.</Field.ErrorText>
      </Field.Root>
      <Field.Root disabled>
        <Field.Label>Disabled</Field.Label>
        <Input defaultValue="Locked" />
      </Field.Root>
    </VStack>
  ),
};
