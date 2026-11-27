import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorSwatch, HStack, VStack } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

type Args = ComponentProps<typeof ColorSwatch>;

const { argTypes, args } = recipeControls('colorSwatch', { palette: false });

const meta: Meta<Args> = {
  title: 'Chakra/Forms/Date and color/ColorSwatch',
  args: { ...args, value: '#A100FF' },
  argTypes: {
    ...argTypes,
    value: { control: 'text', table: { category: 'Props' } },
  },
};
export default meta;
type Story = StoryObj<Args>;

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = {
  args: { value: '#A100FF' },
  render: (args) => <ColorSwatch {...args} />,
};

export const Sizes: Story = {
  render: () => (
    <HStack gap="3">
      {(['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const).map((s) => (
        <ColorSwatch key={s} value="#A100FF" size={s} />
      ))}
    </HStack>
  ),
};

export const Shapes: Story = {
  render: () => (
    <VStack align="start" gap="3">
      <HStack gap="3">
        {['#E6DCFF', '#C2A3FF', '#A100FF', '#7500C0', '#460073'].map((c) => (
          <ColorSwatch key={c} value={c} shape="square" />
        ))}
      </HStack>
      <HStack gap="3">
        {['#224BFF', '#05F2DB', '#FF50A0'].map((c) => (
          <ColorSwatch key={c} value={c} shape="circle" />
        ))}
        <ColorSwatch value="rgba(161, 0, 255, 0.4)" shape="circle" />
      </HStack>
    </VStack>
  ),
};
