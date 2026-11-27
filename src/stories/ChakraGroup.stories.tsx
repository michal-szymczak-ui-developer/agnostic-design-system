import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Group } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Group',
  component: Group,
  args: { attached: false, grow: false, orientation: 'horizontal' },
  argTypes: {
    attached: { control: 'boolean', table: { category: 'Props' } },
    grow: { control: 'boolean', table: { category: 'Props' } },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Group>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Group {...args} w="sm">
      <Button variant="outline" colorPalette="primary">
        Day
      </Button>
      <Button variant="outline" colorPalette="primary">
        Week
      </Button>
      <Button variant="outline" colorPalette="primary">
        Month
      </Button>
    </Group>
  ),
};

export const Attached: Story = {
  render: () => (
    <Group attached>
      <Button variant="outline" colorPalette="primary">
        Day
      </Button>
      <Button variant="outline" colorPalette="primary">
        Week
      </Button>
      <Button variant="outline" colorPalette="primary">
        Month
      </Button>
    </Group>
  ),
};

export const Spaced: Story = {
  render: () => (
    <Group>
      <Button colorPalette="primary">One</Button>
      <Button colorPalette="primary">Two</Button>
    </Group>
  ),
};
