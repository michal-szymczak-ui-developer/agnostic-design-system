import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, FileUpload } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('fileUpload', { palette: false });

const meta = {
  title: 'Chakra/Forms/Text input/FileUpload',
  component: FileUpload.Root,
  args: { ...args, maxFiles: 3 },
  argTypes: {
    ...argTypes,
    maxFiles: { control: 'number', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    directory: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof FileUpload.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <FileUpload.Root maxW="sm" {...args}>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" colorPalette="primary" disabled={args.disabled}>
          Upload files
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List showSize clearable />
    </FileUpload.Root>
  ),
};

export const Button_: Story = {
  name: 'Button trigger',
  render: () => (
    <FileUpload.Root maxFiles={3} maxW="sm">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" colorPalette="primary">
          Upload files
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List showSize clearable />
    </FileUpload.Root>
  ),
};

export const Dropzone: Story = {
  render: () => (
    <FileUpload.Root maxFiles={5} maxW="md" alignItems="stretch">
      <FileUpload.HiddenInput />
      <FileUpload.Dropzone>
        <FileUpload.DropzoneContent>Drag and drop files here</FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List showSize clearable />
    </FileUpload.Root>
  ),
};

export const Disabled: Story = {
  render: () => (
    <FileUpload.Root disabled maxW="sm">
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button variant="outline" disabled>
          Upload files
        </Button>
      </FileUpload.Trigger>
    </FileUpload.Root>
  ),
};
