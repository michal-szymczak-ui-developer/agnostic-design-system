import type { Meta, StoryObj } from '@storybook/react-vite';
import { groupBy, typography } from './tokens';
import { Mono, Note, Page, Section, Table } from './ui';

const meta = { title: 'Foundations/Typography', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const px = (v: unknown) => parseInt(String(v), 10);
const sizes = typography.filter((t) => t.path[1] === 'size');
const families = typography.filter((t) => t.path[1] === 'family');
const weights = typography.filter((t) => t.path[1] === 'weight');
const rules = typography.filter((t) => t.path[1] === 'rule');

// Pair desktop and mobile values of one size token.
const pairs = (kind: string) =>
  groupBy(
    sizes.filter((t) => t.path[2] === kind),
    (t) => t.path[3],
  ).map(([name, items]) => ({
    name,
    desktop: items.find((i) => i.path[4] === 'desktop' || i.path.length === 4)?.value,
    mobile: items.find((i) => i.path[4] === 'mobile')?.value,
    cssVar: items[0].cssVar.replace(/-(desktop|mobile)$/, ''),
  }));

const SizeTable = ({ kind, weight, sample }: { kind: string; weight: number; sample: string }) => (
  <Table
    head={['Token', 'Desktop', 'Mobile', 'Sample (desktop)']}
    rows={pairs(kind).map((p) => [
      <Mono>{p.cssVar}</Mono>,
      p.desktop ? String(p.desktop) : '–',
      p.mobile ? String(p.mobile) : '–',
      <div style={{ fontSize: Math.min(px(p.desktop), 136), fontWeight: weight, lineHeight: 1.1, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {sample}
      </div>,
    ])}
  />
);

export const Overview: Story = {
  render: () => (
    <Page title="Typography" intro="Graphik is the primary typeface. GT Sectra Fine is for pull quotes only. Line heights follow a 4 px grid.">
      <Note>Fonts are not loaded in Storybook. Samples fall back to Arial. Font sizes are read from a low-resolution reference. Verify them.</Note>
      <Section title="Font family">
        <Table
          head={['Token', 'Stack', 'Note']}
          rows={families.map((t) => [
            <Mono>{t.cssVar}</Mono>,
            <span style={{ fontFamily: (t.value as string[]).join(', ') }}>{(t.value as string[]).join(', ')}</span>,
            t.description ?? '',
          ])}
        />
      </Section>
      <Section title="Font weight">
        <Table
          head={['Token', 'Value', 'Sample']}
          rows={weights.map((t) => [<Mono>{t.cssVar}</Mono>, String(t.value), <span style={{ fontWeight: Number(t.value), fontSize: 20 }}>Aa Bb Cc</span>])}
        />
      </Section>
      <Section title="Heading sizes">
        <SizeTable kind="heading" weight={600} sample="Heading" />
      </Section>
      <Section title="Body sizes">
        <SizeTable kind="body" weight={400} sample="Companies will have a greater technology landscape." />
      </Section>
      <Section title="UI text sizes" note="Compact line height for labels, buttons and menus.">
        <SizeTable kind="ui" weight={600} sample="Button label" />
      </Section>
      <Section title="Rules">
        <Table head={['Rule', 'Formula']} rows={rules.map((t) => [t.path[2], <Mono>{String(t.value)}</Mono>])} />
      </Section>
    </Page>
  ),
};
