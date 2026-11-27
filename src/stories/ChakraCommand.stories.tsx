import type { Meta, StoryObj } from '@storybook/react-vite';
import { Command, useCommandCollection } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('command', { palette: false });
const props = { table: { category: 'Props' } } as const;

const initialItems = [
  { value: 'new-file', label: 'New file', keywords: ['create'] },
  { value: 'open-file', label: 'Open file' },
  { value: 'toggle-theme', label: 'Toggle theme', keywords: ['dark', 'light'] },
  { value: 'settings', label: 'Open settings' },
];

type DemoProps = { size?: 'sm' | 'md' | 'lg'; placeholder?: string };

function Demo({ placeholder = 'Type a command', ...rootProps }: DemoProps) {
  const command = useCommandCollection({ initialItems });
  return (
    <Command.Root command={command} maxW="sm" {...rootProps}>
      <Command.Control>
        <Command.Input placeholder={placeholder} />
      </Command.Control>
      <Command.List>
        <Command.Empty>No results.</Command.Empty>
        {command.collection.items.map((item) => (
          <Command.Item key={item.value} item={item}>
            <Command.ItemText>{item.label}</Command.ItemText>
          </Command.Item>
        ))}
      </Command.List>
    </Command.Root>
  );
}

const meta = {
  title: 'Chakra/Overlays/Command',
  component: Demo,
  args: { ...args, placeholder: 'Type a command' },
  argTypes: {
    ...argTypes,
    placeholder: { control: 'text', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
