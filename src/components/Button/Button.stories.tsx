import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Continue' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'tertiary'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Tertiary: Story = { args: { variant: 'tertiary' } };
export const Disabled: Story = { args: { disabled: true } };

export const Matrix: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-16)', justifyItems: 'start' }}>
      {(['primary', 'secondary', 'tertiary'] as const).map((v) => (
        <div key={v} style={{ display: 'flex', gap: 'var(--space-16)', alignItems: 'center' }}>
          {(['sm', 'md', 'lg'] as const).map((s) => (
            <Button key={s} variant={v} size={s}>{v} {s}</Button>
          ))}
          <Button variant={v} disabled>{v} disabled</Button>
        </div>
      ))}
    </div>
  ),
};
