import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Card } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('card', { palette: false });

const meta = {
  title: 'Chakra/Data display/Card',
  component: Card.Root,
  args,
  argTypes,
} satisfies Meta<typeof Card.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => (
    <Card.Root {...args} maxW="sm">
      <Card.Body>
        <Card.Title>Project summary</Card.Title>
        <Card.Description>Tokens, components and docs in one place.</Card.Description>
      </Card.Body>
    </Card.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Card.Root maxW="sm" variant="outline">
      <Card.Body>
        <Card.Title>Project summary</Card.Title>
        <Card.Description>Tokens, components and docs in one place.</Card.Description>
      </Card.Body>
      <Card.Footer>
        <Button colorPalette="primary">Open</Button>
        <Button variant="outline" colorPalette="primary">
          Share
        </Button>
      </Card.Footer>
    </Card.Root>
  ),
};
