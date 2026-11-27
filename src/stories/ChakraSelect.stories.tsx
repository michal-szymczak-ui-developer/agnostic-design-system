import type { Meta, StoryObj } from '@storybook/react-vite';
import { Portal, Select, VStack, createListCollection } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

type Args = Omit<ComponentProps<typeof Select.Root>, 'collection' | 'children'>;

const { argTypes, args } = recipeControls('select');

const meta: Meta<Args> = {
  title: 'Chakra/Forms/Selection/Select',
  args,
  argTypes: {
    ...argTypes,
    multiple: { control: 'boolean', table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
  },
};
export default meta;
type Story = StoryObj<Args>;

const collection = createListCollection({
  items: [
    { label: 'Primary', value: 'primary' },
    { label: 'Secondary', value: 'secondary' },
    { label: 'Tertiary', value: 'tertiary' },
  ],
});

const Sel = ({ label, ...root }: { label: string } & Args) => (
  <Select.Root collection={collection} colorPalette="primary" {...root}>
    <Select.HiddenSelect />
    <Select.Label>{label}</Select.Label>
    <Select.Control>
      <Select.Trigger>
        <Select.ValueText placeholder="Select variant" />
      </Select.Trigger>
      <Select.IndicatorGroup>
        <Select.Indicator />
      </Select.IndicatorGroup>
    </Select.Control>
    <Portal>
      <Select.Positioner>
        <Select.Content>
          {collection.items.map((item) => (
            <Select.Item item={item} key={item.value}>
              {item.label}
              <Select.ItemIndicator />
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Portal>
  </Select.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Sel label="Variant" maxW="xs" {...args} /> };

export const Sizes: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="xs">
      <Sel size="sm" label="Small" />
      <Sel size="md" label="Medium" />
      <Sel size="lg" label="Large" />
    </VStack>
  ),
};

export const States: Story = {
  render: () => (
    <VStack align="stretch" gap="4" maxW="xs">
      <Sel invalid label="Invalid" />
      <Sel disabled label="Disabled" />
    </VStack>
  ),
};
