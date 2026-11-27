import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Link } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('link');

const meta = {
  title: 'Chakra/Typography/Link',
  component: Link,
  args: { ...args, children: 'Read the guidelines', href: '#' },
  argTypes: {
    ...argTypes,
    children: { control: 'text', table: { category: 'Props' } },
    href: { control: 'text', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Link>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Link {...args} />,
};

export const Variants: Story = {
  render: () => (
    <HStack gap="6">
      <Link href="#" variant="underline" colorPalette="primary">
        Underline
      </Link>
      <Link href="#" variant="plain" colorPalette="primary">
        Plain
      </Link>
    </HStack>
  ),
};
