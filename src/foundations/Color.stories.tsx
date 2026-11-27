import type { Meta, StoryObj } from '@storybook/react-vite';
import { colorPrimitive, colorSemantic, groupBy } from './tokens';
import { Mono, Note, Page, Section, Sub, Swatch, Table, Wrap } from './ui';

const meta = { title: 'Foundations/Color', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const Chip = ({ hex, label }: { hex: string; label: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ width: 28, height: 28, background: hex, border: '1px solid #CFCFCF', flex: 'none' }} />
    <span style={{ lineHeight: 1.3 }}>
      <Mono>{hex.toUpperCase()}</Mono>
      <br />
      <Mono style={{ color: '#808080' }}>{label}</Mono>
    </span>
  </div>
);

export const Primitive: Story = {
  render: () => (
    <Page title="Color: primitive" intro="Raw values from the reference. Use them only inside semantic tokens. Never use them in components.">
      {groupBy(colorPrimitive, (t) => t.path.slice(1, -1).join(' / ') || t.path[1]).map(([group, items]) => (
        <Section key={group} title={group}>
          <Wrap>
            {items.map((t) => (
              <Swatch key={t.name} hex={String(t.value)} name={t.path.slice(-1)[0]} cssVar={t.cssVar} />
            ))}
          </Wrap>
        </Section>
      ))}
    </Page>
  ),
};

export const Semantic: Story = {
  render: () => (
    <Page title="Color: semantic" intro="Named by purpose, not by appearance. Each token has a light and a dark value. Components use only these tokens.">
      <Note>Tokens marked INFERRED are not defined in the reference. Their values come from visual matching. Verify them.</Note>
      {groupBy(colorSemantic, (t) => t.path[1]).map(([group, items]) => (
        <Section key={group} title={group}>
          {groupBy(items, (t) => (t.path.length > 3 ? t.path[2] : '')).map(([sub, rows]) => (
            <div key={sub}>
              {sub && <Sub>{sub}</Sub>}
              <Table
                head={['Token', 'CSS variable', 'Light', 'Dark']}
                rows={rows.map((t) => [
                  <>
                    {t.path.slice(2).join('.')}
                    {t.description && <div style={{ color: '#C16B02', fontSize: 11 }}>{t.description}</div>}
                  </>,
                  <Mono>{t.cssVar}</Mono>,
                  <Chip hex={t.light.hex} label={t.light.ref} />,
                  <div style={{ background: '#000', padding: 6 }}>
                    <div style={{ color: '#fff' }}>
                      <Chip hex={t.dark.hex} label={t.dark.ref} />
                    </div>
                  </div>,
                ])}
              />
            </div>
          ))}
        </Section>
      ))}
    </Page>
  ),
};
