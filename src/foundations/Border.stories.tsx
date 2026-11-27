import type { Meta, StoryObj } from '@storybook/react-vite';
import { borderRadius, borderWidth } from './tokens';
import { Mono, Page, Section, Table } from './ui';

const meta = { title: 'Foundations/Border', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const WidthAndRadius: Story = {
  name: 'Width and radius',
  render: () => (
    <Page title="Border" intro="Square corners are the default. Use a rounded radius only where the usage column allows it.">
      <Section title="Border width">
        <Table
          head={['Token', 'Value', 'CSS variable', 'Preview']}
          rows={borderWidth.map((t) => [
            t.path[2],
            String(t.value),
            <Mono>{t.cssVar}</Mono>,
            <div style={{ width: 64, height: 40, border: `${t.value} solid #000`, boxSizing: 'border-box' }} />,
          ])}
        />
      </Section>
      <Section title="Border radius">
        <Table
          head={['Token', 'Value', 'CSS variable', 'Usage', 'Preview']}
          rows={borderRadius.map((t) => [
            t.path[2],
            String(t.value),
            <Mono>{t.cssVar}</Mono>,
            t.path[2] === 'none' ? 'Default. Buttons, fields, cards.' : (t.description ?? 'Operational or external use.'),
            <div style={{ width: 56, height: 56, border: '2px solid #000', borderRadius: String(t.value), boxSizing: 'border-box' }} />,
          ])}
        />
      </Section>
    </Page>
  ),
};
