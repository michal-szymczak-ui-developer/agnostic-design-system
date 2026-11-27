import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('tabs');
const props = { table: { category: 'Props' } } as const;

function Demo(rootProps: ComponentProps<typeof Tabs.Root>) {
  return (
    <Tabs.Root colorPalette="primary" defaultValue="tokens" maxW="lg" {...rootProps}>
      <Tabs.List>
        <Tabs.Trigger value="tokens">Tokens</Tabs.Trigger>
        <Tabs.Trigger value="components">Components</Tabs.Trigger>
        <Tabs.Trigger value="docs">Docs</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tokens">Primitive and semantic tokens.</Tabs.Content>
      <Tabs.Content value="components">Chakra components themed by tokens.</Tabs.Content>
      <Tabs.Content value="docs">Rules for people and AI.</Tabs.Content>
    </Tabs.Root>
  );
}

const meta = {
  title: 'Chakra/Navigation/Tabs',
  component: Demo,
  args: { ...args, orientation: 'horizontal', activationMode: 'automatic' },
  argTypes: {
    ...argTypes,
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], ...props },
    activationMode: { control: 'inline-radio', options: ['automatic', 'manual'], ...props },
    loopFocus: { control: 'boolean', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
