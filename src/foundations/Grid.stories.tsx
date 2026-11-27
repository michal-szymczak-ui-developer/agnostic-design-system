import type { Meta, StoryObj } from '@storybook/react-vite';
import { grid, groupBy } from './tokens';
import { Mono, Page, Section, Table } from './ui';

const meta = { title: 'Foundations/Grid', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const layouts = groupBy(grid, (t) => t.path[1]).map(([name, items]) => {
  const get = (k: string) => items.find((i) => i.path[2] === k)?.value;
  return {
    name,
    columns: Number(get('columns')),
    min: get('minWidth') as string | undefined,
    max: get('maxWidth') as string | undefined,
    margin: String(get('margin')),
    gutter: String(get('gutter')),
  };
});

// Scaled preview of the column layout. Margins and gutters keep their ratio to a 1280 px canvas.
function Preview({ columns, margin, gutter }: { columns: number; margin: string; gutter: string }) {
  const scale = 0.25;
  return (
    <div style={{ width: 320, height: 40, background: '#F1F1EF', display: 'flex', padding: `0 ${parseInt(margin) * scale}px`, gap: parseInt(gutter) * scale, boxSizing: 'border-box' }}>
      {Array.from({ length: columns }, (_, i) => (
        <div key={i} style={{ flex: 1, background: 'rgba(161,0,255,0.2)' }} />
      ))}
    </div>
  );
}

export const Layouts: Story = {
  render: () => (
    <Page title="Grid" intro="Small, medium and large breakpoints. Large has two densities: cozy (default) and compact (data-heavy screens).">
      <Section title="Layouts">
        <Table
          head={['Layout', 'Columns', 'Min width', 'Max width', 'Margin', 'Gutter', 'Preview']}
          rows={layouts.map((l) => [
            <Mono>{l.name}</Mono>,
            l.columns,
            l.min ?? '–',
            l.max ?? '–',
            l.margin,
            l.gutter,
            <Preview key={l.name} columns={l.columns} margin={l.margin} gutter={l.gutter} />,
          ])}
        />
      </Section>
    </Page>
  ),
};
