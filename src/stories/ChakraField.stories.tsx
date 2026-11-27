import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field, Input, VStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('field', { palette: false });

const meta = {
  title: 'Chakra/Forms/Text input/Field',
  component: Field.Root,
  args,
  argTypes: {
    ...argTypes,
    invalid: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    required: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Field.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Field.Root maxW="sm" {...args}>
      <Field.Label>
        Name <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="Ada Lovelace" />
      <Field.HelperText>As shown on your badge.</Field.HelperText>
      <Field.ErrorText>This field is required.</Field.ErrorText>
    </Field.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Field.Root required maxW="sm">
      <Field.Label>
        Name <Field.RequiredIndicator />
      </Field.Label>
      <Input placeholder="Ada Lovelace" />
      <Field.HelperText>As shown on your badge.</Field.HelperText>
    </Field.Root>
  ),
};

export const States: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="sm">
      <Field.Root invalid>
        <Field.Label>Invalid</Field.Label>
        <Input defaultValue="x" />
        <Field.ErrorText>This field is required.</Field.ErrorText>
      </Field.Root>
      <Field.Root disabled>
        <Field.Label>Disabled</Field.Label>
        <Input defaultValue="Locked" />
      </Field.Root>
      <Field.Root readOnly>
        <Field.Label>Read only</Field.Label>
        <Input defaultValue="Read only" />
      </Field.Root>
    </VStack>
  ),
};
