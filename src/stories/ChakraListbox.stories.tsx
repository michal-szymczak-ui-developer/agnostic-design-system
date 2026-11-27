import type { Meta, StoryObj } from '@storybook/react-vite';
import { Listbox, createListCollection } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

type Args = Omit<ComponentProps<typeof Listbox.Root>, 'collection' | 'children'>;

const { argTypes, args } = recipeControls('listbox');

const meta: Meta<Args> = {
  title: 'Chakra/Forms/Selection/Listbox',
  args,
  argTypes: {
    ...argTypes,
    selectionMode: { control: 'inline-radio', options: ['single', 'multiple', 'extended'], table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
  },
};
export default meta;
type Story = StoryObj<Args>;

const collection = createListCollection({
  items: [
    { label: 'Tokens', value: 'tokens' },
    { label: 'Components', value: 'components' },
    { label: 'Patterns', value: 'patterns' },
    { label: 'Guidelines', value: 'guidelines' },
  ],
});

const Content = () => (
  <Listbox.Content>
    {collection.items.map((item) => (
      <Listbox.Item item={item} key={item.value}>
        <Listbox.ItemText>{item.label}</Listbox.ItemText>
        <Listbox.ItemIndicator />
      </Listbox.Item>
    ))}
  </Listbox.Content>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => (
    <Listbox.Root collection={collection} maxW="xs" defaultValue={['tokens']} {...args}>
      <Listbox.Label>Section</Listbox.Label>
      <Content />
    </Listbox.Root>
  ),
};

export const Single: Story = {
  render: () => (
    <Listbox.Root collection={collection} colorPalette="primary" maxW="xs" defaultValue={['tokens']}>
      <Listbox.Label>Section</Listbox.Label>
      <Content />
    </Listbox.Root>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Listbox.Root collection={collection} selectionMode="multiple" colorPalette="primary" maxW="xs">
      <Listbox.Label>Sections</Listbox.Label>
      <Content />
    </Listbox.Root>
  ),
};
