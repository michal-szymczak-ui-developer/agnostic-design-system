import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { motionDuration, motionEasing } from './tokens';
import { Mono, Note, Page, Section, Table } from './ui';

const meta = { title: 'Foundations/Motion', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const bezier = (v: unknown) => `cubic-bezier(${(v as number[]).join(', ')})`;

function Demo({ duration, easing }: { duration: string; easing: string }) {
  const [on, setOn] = useState(false);
  return (
    <div>
      <div style={{ width: 240, height: 24, background: '#F1F1EF', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', top: 0, left: 0, width: 24, height: 24, background: '#A100FF',
            transform: `translateX(${on ? 216 : 0}px)`, transition: `transform ${duration} ${easing}`,
          }}
        />
      </div>
      <button type="button" onClick={() => setOn(!on)} style={{ marginTop: 8 }}>Play</button>
    </div>
  );
}

export const DurationAndEasing: Story = {
  name: 'Duration and easing',
  render: () => (
    <Page title="Motion" intro="Move or slide elements. Never use linear easing. Never fade, except for background dimming.">
      <Section title="Duration">
        <Table
          head={['Token', 'Value', 'CSS variable']}
          rows={motionDuration.map((t) => [t.path[2], String(t.value), <Mono>{t.cssVar}</Mono>])}
        />
      </Section>
      <Section title="Easing">
        <Table
          head={['Token', 'Curve', 'CSS variable']}
          rows={motionEasing.map((t) => [t.path[2], <Mono>{bezier(t.value)}</Mono>, <Mono>{t.cssVar}</Mono>])}
        />
      </Section>
      <Section title="Preview" note="Each row combines one easing with one duration.">
        <Table
          head={['Combination', 'Preview']}
          rows={[
            ['standard + fast', <Demo key="a" duration="150ms" easing={bezier(motionEasing[0].value)} />],
            ['standard + moderate', <Demo key="b" duration="300ms" easing={bezier(motionEasing[0].value)} />],
            ['slow + slow', <Demo key="c" duration="700ms" easing={bezier(motionEasing[1].value)} />],
          ]}
        />
        <Note>Reduced-motion handling is not defined in the reference.</Note>
      </Section>
    </Page>
  ),
};
