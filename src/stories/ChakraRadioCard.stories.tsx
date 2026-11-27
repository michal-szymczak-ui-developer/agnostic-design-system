import type { Meta, StoryObj } from '@storybook/react-vite';
import { HStack, RadioCard } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('radioCard');

const meta = {
  title: 'Chakra/Forms/Selection/RadioCard',
  component: RadioCard.Root,
  args: { ...args, defaultValue: 'team' },
  argTypes: {
    ...argTypes,
    disabled: { control: 'boolean', table: { category: 'Props' } },
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], table: { category: 'Props' } },
  },
} satisfies Meta<typeof RadioCard.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'starter', title: 'Starter', description: 'For small teams' },
  { value: 'team', title: 'Team', description: 'For growing teams' },
  { value: 'scale', title: 'Scale', description: 'For large teams' },
];

const Group = (p: ComponentProps<typeof RadioCard.Root>) => (
  <RadioCard.Root defaultValue="team" colorPalette="primary" {...p}>
    <RadioCard.Label>Plan</RadioCard.Label>
    <HStack align="stretch">
      {options.map((o) => (
        <RadioCard.Item key={o.value} value={o.value}>
          <RadioCard.ItemHiddenInput />
          <RadioCard.ItemControl>
            <RadioCard.ItemContent>
              <RadioCard.ItemText>{o.title}</RadioCard.ItemText>
              <RadioCard.ItemDescription>{o.description}</RadioCard.ItemDescription>
            </RadioCard.ItemContent>
            <RadioCard.ItemIndicator />
          </RadioCard.ItemControl>
        </RadioCard.Item>
      ))}
    </HStack>
  </RadioCard.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Group {...args} /> };

export const Variants: Story = {
  render: () => (
    <HStack align="start" gap="8" wrap="wrap">
      <Group variant="outline" />
      <Group variant="subtle" />
    </HStack>
  ),
};

export const Disabled: Story = { render: () => <Group variant="outline" disabled /> };
