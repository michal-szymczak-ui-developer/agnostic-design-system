import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScrollArea, Text } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('scrollArea', { palette: false });

const meta = {
  title: 'Chakra/Layout/ScrollArea',
  component: ScrollArea.Root,
  args: { ...args, height: '40', maxW: 'sm' },
  argTypes: {
    ...argTypes,
    height: { control: 'select', options: ['24', '40', '56'], table: { category: 'Props' } },
    maxW: { control: 'select', options: ['xs', 'sm', 'md'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof ScrollArea.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <ScrollArea.Root borderWidth="1px" borderColor="ads.border.300" {...args}>
      <ScrollArea.Viewport>
        <ScrollArea.Content p="3">
          {Array.from({ length: 20 }, (_, i) => (
            <Text key={i}>Row {i + 1}</Text>
          ))}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ScrollArea.Root height="40" maxW="sm" borderWidth="1px" borderColor="ads.border.300">
      <ScrollArea.Viewport>
        <ScrollArea.Content p="3">
          {Array.from({ length: 20 }, (_, i) => (
            <Text key={i}>Row {i + 1}</Text>
          ))}
        </ScrollArea.Content>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar>
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollArea.Root>
  ),
};
