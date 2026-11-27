import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ButtonGroup, IconButton, Pagination } from '@chakra-ui/react';
import { PALETTES } from './controls';

const props = { table: { category: 'Props' } } as const;

// Pagination has no Chakra recipe. Size, variant and palette go to the ButtonGroup.
type DemoProps = ComponentProps<typeof Pagination.Root> & {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'ghost' | 'subtle';
  colorPalette?: string;
};

function Demo({ size = 'sm', variant = 'ghost', colorPalette = 'primary', ...rootProps }: DemoProps) {
  return (
    <Pagination.Root count={100} pageSize={10} defaultPage={1} {...rootProps}>
      <ButtonGroup variant={variant} size={size} colorPalette={colorPalette}>
        <Pagination.PrevTrigger asChild>
          <IconButton aria-label="Previous page">&lt;</IconButton>
        </Pagination.PrevTrigger>
        <Pagination.Items
          render={(page) => (
            <IconButton aria-label={`Page ${page.value}`} variant={{ base: 'ghost', _selected: 'outline' }}>
              {page.value}
            </IconButton>
          )}
        />
        <Pagination.NextTrigger asChild>
          <IconButton aria-label="Next page">&gt;</IconButton>
        </Pagination.NextTrigger>
      </ButtonGroup>
    </Pagination.Root>
  );
}

const meta = {
  title: 'Chakra/Navigation/Pagination',
  component: Demo,
  args: { count: 100, pageSize: 10, siblingCount: 1, defaultPage: 1, size: 'sm', variant: 'ghost', colorPalette: 'primary' },
  argTypes: {
    count: { control: 'number', ...props },
    pageSize: { control: 'number', ...props },
    siblingCount: { control: 'number', ...props },
    defaultPage: { control: 'number', ...props },
    size: { control: 'inline-radio', options: ['xs', 'sm', 'md', 'lg'], table: { category: 'Buttons' } },
    variant: { control: 'inline-radio', options: ['solid', 'outline', 'ghost', 'subtle'], table: { category: 'Buttons' } },
    colorPalette: { control: 'select', options: [...PALETTES], table: { category: 'Buttons' } },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
