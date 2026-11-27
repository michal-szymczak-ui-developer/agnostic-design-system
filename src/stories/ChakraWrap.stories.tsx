import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, Wrap } from '@chakra-ui/react';

const meta = {
  title: 'Chakra/Layout/Wrap',
  component: Wrap,
  args: { gap: '2', justify: 'flex-start', align: 'flex-start' },
  argTypes: {
    gap: { control: 'select', options: ['0', '1', '2', '4', '8'], table: { category: 'Props' } },
    justify: { control: 'select', options: ['flex-start', 'center', 'flex-end', 'space-between'], table: { category: 'Props' } },
    align: { control: 'select', options: ['flex-start', 'center', 'flex-end', 'stretch'], table: { category: 'Props' } },
    maxW: { control: 'select', options: ['2xs', 'xs', 'sm', 'md'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Wrap>;
export default meta;
type Story = StoryObj<typeof meta>;

const tags = ['Tokens', 'Components', 'Storybook', 'Chakra', 'Figma', 'Docs', 'Accessibility'];

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  args: { maxW: 'xs' },
  render: (args) => (
    <Wrap {...args}>
      {tags.map((t) => (
        <Badge key={t} colorPalette="primary">
          {t}
        </Badge>
      ))}
    </Wrap>
  ),
};

export const Default: Story = {
  render: () => (
    <Wrap gap="2" maxW="xs">
      {tags.map((t) => (
        <Badge key={t} colorPalette="primary">
          {t}
        </Badge>
      ))}
    </Wrap>
  ),
};
