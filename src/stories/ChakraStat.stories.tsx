import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge, FormatNumber, Stat, StatGroup } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('stat', { palette: false });

const meta = {
  title: 'Chakra/Data display/Stat',
  component: Stat.Root,
  args,
  argTypes,
} satisfies Meta<typeof Stat.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to this story.
export const Playground: Story = {
  render: (args) => (
    <Stat.Root {...args} maxW="xs">
      <Stat.Label>Components shipped</Stat.Label>
      <Stat.ValueText>
        <FormatNumber value={1234} />
      </Stat.ValueText>
      <Stat.HelpText>since last release</Stat.HelpText>
    </Stat.Root>
  ),
};

export const Default: Story = {
  render: () => (
    <Stat.Root maxW="xs">
      <Stat.Label>Components shipped</Stat.Label>
      <Stat.ValueText>
        <FormatNumber value={1234} />
      </Stat.ValueText>
      <Stat.HelpText>since last release</Stat.HelpText>
    </Stat.Root>
  ),
};

export const WithTrend: Story = {
  render: () => (
    <StatGroup>
      <Stat.Root>
        <Stat.Label>Coverage</Stat.Label>
        <Stat.ValueText>
          92<Stat.ValueUnit>%</Stat.ValueUnit>
        </Stat.ValueText>
        <Badge colorPalette="success" gap="0">
          <Stat.UpIndicator />
          2.4%
        </Badge>
      </Stat.Root>
      <Stat.Root>
        <Stat.Label>Open issues</Stat.Label>
        <Stat.ValueText>18</Stat.ValueText>
        <Badge colorPalette="critical" gap="0">
          <Stat.DownIndicator />
          5%
        </Badge>
      </Stat.Root>
    </StatGroup>
  ),
};
