import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('timeline');

const meta = {
  title: 'Chakra/Data display/Timeline',
  component: Timeline.Root,
  args,
  argTypes,
} satisfies Meta<typeof Timeline.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => (
    <Timeline.Root {...args} maxW="md">
      {events.map((e) => (
        <Timeline.Item key={e.title}>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>{e.title}</Timeline.Title>
            <Timeline.Description>{e.text}</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline.Root>
  ),
};

const events = [
  { title: 'Tokens defined', text: 'Primitive and semantic tokens added.' },
  { title: 'Theme generated', text: 'Chakra theme built from tokens.' },
  { title: 'Stories written', text: 'Storybook previews each component.' },
];

export const Default: Story = {
  render: () => (
    <Timeline.Root colorPalette="primary" maxW="md">
      {events.map((e) => (
        <Timeline.Item key={e.title}>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>{e.title}</Timeline.Title>
            <Timeline.Description>{e.text}</Timeline.Description>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline.Root>
  ),
};
