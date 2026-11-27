import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loader, Spinner, Text } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Feedback/Loader',
  component: Loader,
  args: { visible: true },
  argTypes: {
    visible: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Loader>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. Loader has no Chakra recipe.
export const Playground: Story = {
  render: (args) => (
    <Loader {...args} spinner={<Spinner colorPalette="primary" color="colorPalette.solid" />}>
      <Text>Content</Text>
    </Loader>
  ),
};

export const Default: Story = {
  render: () => (
    <Loader visible spinner={<Spinner colorPalette="primary" color="colorPalette.solid" />}>
      <Text>Content</Text>
    </Loader>
  ),
};

export const Hidden: Story = {
  render: () => (
    <Loader visible={false} spinner={<Spinner />}>
      <Text>Content is loaded.</Text>
    </Loader>
  ),
};
