import type { Meta, StoryObj } from '@storybook/react-vite';
import { Heading, Stack } from '@chakra-ui/react';
import { recipeControls } from './controls';

// The Heading recipe has no color palette.
const { argTypes, args } = recipeControls('heading', { palette: false });

const meta = {
  title: 'Chakra/Typography/Heading',
  component: Heading,
  args: { ...args, children: 'Design system heading' },
  argTypes: {
    ...argTypes,
    children: { control: 'text', table: { category: 'Props' } },
    color: {
      control: 'select',
      options: ['ads.text.headline.primary', 'ads.text.headline.100', 'ads.text.headline.200', 'ads.text.headline.300'],
      table: { category: 'Props' },
    },
    textAlign: { control: 'inline-radio', options: ['left', 'center', 'right'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof Heading>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Heading {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <Stack gap="3">
      {(['sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map((s) => (
        <Heading key={s} size={s}>
          Heading {s}
        </Heading>
      ))}
    </Stack>
  ),
};
