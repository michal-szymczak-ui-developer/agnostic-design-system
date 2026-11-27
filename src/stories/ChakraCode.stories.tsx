import type { Meta, StoryObj } from '@storybook/react-vite';
import { Code, HStack } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('code');

const meta = {
  title: 'Chakra/Typography/Code',
  component: Code,
  args: { ...args, children: 'npm run storybook' },
  argTypes: {
    ...argTypes,
    children: { control: 'text', table: { category: 'Props' } },
  },
} satisfies Meta<typeof Code>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Code {...args} />,
};

export const Variants: Story = {
  render: () => (
    <HStack gap="3">
      {(['solid', 'subtle', 'outline', 'surface', 'plain'] as const).map((v) => (
        <Code key={v} variant={v} colorPalette="primary">
          npm run storybook
        </Code>
      ))}
    </HStack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <HStack gap="3">
      {(['xs', 'sm', 'md', 'lg'] as const).map((s) => (
        <Code key={s} size={s}>
          {s}
        </Code>
      ))}
    </HStack>
  ),
};
