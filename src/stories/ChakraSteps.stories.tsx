import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, ButtonGroup, Steps } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('steps');
const props = { table: { category: 'Props' } } as const;

const steps = [
  { title: 'Account', description: 'Create your account.' },
  { title: 'Profile', description: 'Add your details.' },
  { title: 'Review', description: 'Check and submit.' },
];

function Demo(rootProps: Omit<ComponentProps<typeof Steps.Root>, 'count'>) {
  return (
    <Steps.Root defaultStep={1} count={steps.length} colorPalette="primary" maxW="lg" {...rootProps}>
      <Steps.List>
        {steps.map((s, index) => (
          <Steps.Item key={s.title} index={index} title={s.title}>
            <Steps.Indicator />
            <Steps.Title>{s.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>
      {steps.map((s, index) => (
        <Steps.Content key={s.title} index={index}>
          {s.description}
        </Steps.Content>
      ))}
      <Steps.CompletedContent>All steps are complete.</Steps.CompletedContent>
      <ButtonGroup size="sm" variant="outline" colorPalette="primary" mt="4">
        <Steps.PrevTrigger asChild>
          <Button>Back</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  );
}

const meta = {
  title: 'Chakra/Navigation/Steps',
  component: Demo,
  args: { ...args, defaultStep: 1, linear: false },
  argTypes: {
    ...argTypes,
    defaultStep: { control: 'number', ...props },
    linear: { control: 'boolean', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
