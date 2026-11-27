import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Menu, Portal } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('menu', { palette: false });
const props = { table: { category: 'Props' } } as const;
const placements = ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-start', 'top-end', 'left', 'right'];

type DemoProps = Omit<ComponentProps<typeof Menu.Root>, 'children'> & { placement?: string };

function Demo({ placement, ...rootProps }: DemoProps) {
  return (
    <Menu.Root positioning={placement ? { placement: placement as 'bottom' } : undefined} {...rootProps}>
      <Menu.Trigger asChild>
        <Button variant="outline" colorPalette="primary">
          Actions
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="edit">Edit</Menu.Item>
            <Menu.Item value="duplicate">Duplicate</Menu.Item>
            <Menu.Separator />
            <Menu.Item value="delete" color="fg.error" _hover={{ bg: 'bg.error', color: 'fg.error' }}>
              Delete
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

const meta = {
  title: 'Chakra/Overlays/Menu',
  component: Demo,
  args: { ...args, placement: 'bottom-start', closeOnSelect: true, loopFocus: false },
  argTypes: {
    ...argTypes,
    placement: { control: 'select', options: placements, ...props },
    closeOnSelect: { control: 'boolean', ...props },
    loopFocus: { control: 'boolean', ...props },
    typeahead: { control: 'boolean', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
