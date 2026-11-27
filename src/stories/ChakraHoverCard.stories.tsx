import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, HoverCard, Link, Portal, Text } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('hoverCard', { palette: false });
const props = { table: { category: 'Props' } } as const;
const placements = ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-start', 'top-end', 'left', 'right'];

type DemoProps = Omit<ComponentProps<typeof HoverCard.Root>, 'children'> & { placement?: string };

function Demo({ placement, ...rootProps }: DemoProps) {
  return (
    <HoverCard.Root positioning={placement ? { placement: placement as 'bottom' } : undefined} {...rootProps}>
      <HoverCard.Trigger asChild>
        <Link href="#" colorPalette="primary">
          @ada
        </Link>
      </HoverCard.Trigger>
      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content>
            <HoverCard.Arrow>
              <HoverCard.ArrowTip />
            </HoverCard.Arrow>
            <Avatar.Root size="sm" colorPalette="primary">
              <Avatar.Fallback name="Ada Lovelace" />
            </Avatar.Root>
            <Text mt="2">Ada Lovelace, design engineer.</Text>
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
}

const meta = {
  title: 'Chakra/Overlays/HoverCard',
  component: Demo,
  args: { ...args, placement: 'bottom', openDelay: 0, closeDelay: 100 },
  argTypes: {
    ...argTypes,
    placement: { control: 'select', options: placements, ...props },
    openDelay: { control: 'number', ...props },
    closeDelay: { control: 'number', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo openDelay={0} closeDelay={100} /> };
