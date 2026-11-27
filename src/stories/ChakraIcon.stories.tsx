import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, Icon } from '@chakra-ui/react';
import { recipeControls } from './controls';

const Check = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const { argTypes, args } = recipeControls('icon', { palette: false });

const meta = {
  title: 'Chakra/Media/Icon',
  component: Icon,
  args: { ...args, size: 'lg', color: 'primary.fg' },
  argTypes: {
    ...argTypes,
    color: {
      control: 'select',
      options: ['primary.fg', 'success.fg', 'warning.fg', 'critical.fg', 'info.fg'],
      table: { category: 'Props' },
    },
  },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  render: (args) => <Icon {...args}>{Check}</Icon>,
};

export const Sizes: Story = {
  render: () => (
    <HStack gap="4">
      {(['sm', 'md', 'lg', 'xl'] as const).map((s) => (
        <Icon key={s} size={s} color="primary.fg">
          {Check}
        </Icon>
      ))}
    </HStack>
  ),
};

export const Colors: Story = {
  render: () => (
    <HStack gap="4">
      {(['primary', 'success', 'warning', 'critical', 'info'] as const).map((p) => (
        <Icon key={p} size="lg" color={`${p}.fg`}>
          {Check}
        </Icon>
      ))}
    </HStack>
  ),
};
