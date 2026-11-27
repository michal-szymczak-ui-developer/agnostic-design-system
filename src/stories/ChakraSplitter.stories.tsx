import type { Meta, StoryObj } from '@storybook/react-vite';
import { Center, Splitter } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Splitter',
  component: Splitter.Root,
  args: { panels: [{ id: 'a' }, { id: 'b' }], defaultSize: [50, 50], orientation: 'horizontal' },
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], table: { category: 'Props' } },
    defaultSize: { control: 'object', description: 'Panel sizes in percent.', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Splitter.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Splitter.Root h="40" maxW="lg" borderWidth="1px" borderColor="ads.border.300" {...args}>
      <Splitter.Panel id="a">
        <Center h="full" bg="primary.muted">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">
        <Center h="full" bg="primary.subtle">
          B
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  ),
};

export const Horizontal: Story = {
  args: { panels: [{ id: 'a' }, { id: 'b' }], defaultSize: [50, 50] },
  render: () => (
    <Splitter.Root
      panels={[{ id: 'a' }, { id: 'b' }]}
      defaultSize={[50, 50]}
      h="40"
      maxW="lg"
      borderWidth="1px"
      borderColor="ads.border.300"
    >
      <Splitter.Panel id="a">
        <Center h="full" bg="primary.muted">
          A
        </Center>
      </Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">
        <Center h="full" bg="primary.subtle">
          B
        </Center>
      </Splitter.Panel>
    </Splitter.Root>
  ),
};
