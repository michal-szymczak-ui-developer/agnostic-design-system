import type { Meta, StoryObj } from '@storybook/react-vite';
import { Field, Fieldset, Input } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('fieldset', { palette: false });

const meta = {
  title: 'Chakra/Forms/Text input/Fieldset',
  component: Fieldset.Root,
  args,
  argTypes: {
    ...argTypes,
    invalid: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Fieldset.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Fieldset.Root maxW="sm" {...args}>
      <Fieldset.Legend>Contact details</Fieldset.Legend>
      <Fieldset.HelperText>We use this only for account notices.</Fieldset.HelperText>
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input type="email" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Phone</Field.Label>
          <Input type="tel" />
        </Field.Root>
      </Fieldset.Content>
      <Fieldset.ErrorText>Fix the errors above.</Fieldset.ErrorText>
    </Fieldset.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Fieldset.Root maxW="sm">
      <Fieldset.Legend>Contact details</Fieldset.Legend>
      <Fieldset.HelperText>We use this only for account notices.</Fieldset.HelperText>
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input type="email" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Phone</Field.Label>
          <Input type="tel" />
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  ),
};

export const Invalid: Story = {
  render: () => (
    <Fieldset.Root invalid maxW="sm">
      <Fieldset.Legend>Contact details</Fieldset.Legend>
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input type="email" />
        </Field.Root>
      </Fieldset.Content>
      <Fieldset.ErrorText>Fix the errors above.</Fieldset.ErrorText>
    </Fieldset.Root>
  ),
};
