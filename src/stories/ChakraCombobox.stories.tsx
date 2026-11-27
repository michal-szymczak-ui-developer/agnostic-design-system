import type { Meta, StoryObj } from '@storybook/react-vite';
import { Combobox, Portal, useFilter, useListCollection } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

type Args = Omit<ComponentProps<typeof Combobox.Root>, 'collection' | 'children'>;

const { argTypes, args } = recipeControls('combobox');

const meta: Meta<Args> = {
  title: 'Chakra/Forms/Selection/Combobox',
  args,
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
    openOnClick: { control: 'boolean', table: { category: 'Props' } },
    allowCustomValue: { control: 'boolean', table: { category: 'Props' } },
  },
};
export default meta;
type Story = StoryObj<Args>;

const items = ['Button', 'Checkbox', 'Dialog', 'Input', 'Select', 'Switch', 'Tabs', 'Tooltip'];

function Demo(props: Args) {
  const { contains } = useFilter({ sensitivity: 'base' });
  const { collection, filter } = useListCollection({ initialItems: items, filter: contains });
  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      colorPalette="primary"
      maxW="xs"
      {...props}
    >
      <Combobox.Label>Component</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Type to search" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.Empty>No items found</Combobox.Empty>
            {collection.items.map((item) => (
              <Combobox.Item item={item} key={item}>
                {item}
                <Combobox.ItemIndicator />
              </Combobox.Item>
            ))}
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
}

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Demo {...args} /> };
export const Default: Story = { render: () => <Demo /> };
export const Invalid: Story = { render: () => <Demo invalid /> };
export const Disabled: Story = { render: () => <Demo disabled /> };
