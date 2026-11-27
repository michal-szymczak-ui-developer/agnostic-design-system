import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('accordion');

const meta = {
  title: 'Chakra/Disclosure/Accordion',
  component: Accordion.Root,
  args: { ...args, collapsible: true, multiple: false, disabled: false },
  argTypes: {
    ...argTypes,
    collapsible: { control: 'boolean', table: { category: 'Props' } },
    multiple: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Accordion.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { value: 'tokens', title: 'Tokens', text: 'Primitive and semantic tokens are the source of truth.' },
  { value: 'components', title: 'Components', text: 'Components use semantic tokens only.' },
  { value: 'docs', title: 'Docs', text: 'Each rule has a reason.' },
];

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Accordion.Root defaultValue={['tokens']} maxW="lg" {...args}>
      {items.map((i) => (
        <Accordion.Item key={i.value} value={i.value}>
          <Accordion.ItemTrigger>
            {i.title}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{i.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Accordion.Root collapsible defaultValue={['tokens']} maxW="lg">
      {items.map((i) => (
        <Accordion.Item key={i.value} value={i.value}>
          <Accordion.ItemTrigger>
            {i.title}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{i.text}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  ),
};
