import type { CSSProperties, ReactNode } from 'react';

// Plain HTML helpers. They do not depend on Chakra, so Foundations stay independent of the component layer.

const font = 'Graphik, Arial, sans-serif';
const muted = '#808080';
const line = '#CFCFCF';

export function Page({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return (
    <div style={{ fontFamily: font, maxWidth: 1100, color: 'var(--color-text-body-primary, #000)' }}>
      <h1 style={{ margin: 0, fontSize: 40 }}>{title}</h1>
      {intro && <p style={{ color: muted, marginTop: 8, maxWidth: 680 }}>{intro}</p>}
      {children}
    </div>
  );
}

export function Section({ title, note, children }: { title: string; note?: string; children: ReactNode }) {
  return (
    <section style={{ marginTop: 48 }}>
      <h2 style={{ margin: 0, paddingBottom: 8, fontSize: 22, borderBottom: `2px solid #A100FF` }}>{title}</h2>
      {note && <p style={{ color: muted, margin: '8px 0 0' }}>{note}</p>}
      <div style={{ marginTop: 16 }}>{children}</div>
    </section>
  );
}

export const Sub = ({ children }: { children: ReactNode }) => (
  <h3 style={{ margin: '24px 0 8px', fontSize: 14, textTransform: 'uppercase', letterSpacing: 0.5, color: muted }}>{children}</h3>
);

export const Mono = ({ children, style }: { children: ReactNode; style?: CSSProperties }) => (
  <code style={{ fontFamily: 'ui-monospace, Consolas, monospace', fontSize: 12, ...style }}>{children}</code>
);

export const Note = ({ children }: { children: ReactNode }) => (
  <p style={{ padding: 12, border: `1px dashed ${line}`, color: muted, margin: '16px 0' }}>{children}</p>
);

export function Swatch({ hex, name, cssVar, extra }: { hex: string; name: string; cssVar?: string; extra?: string }) {
  return (
    <div style={{ width: 150, border: `1px solid ${line}`, background: '#fff', color: '#000' }}>
      <div style={{ height: 64, background: hex, borderBottom: `1px solid ${line}` }} />
      <div style={{ padding: 8, fontSize: 12, lineHeight: 1.5 }}>
        <div style={{ fontWeight: 600 }}>{name}</div>
        <Mono>{hex.toUpperCase()}</Mono>
        {cssVar && <div><Mono style={{ color: muted }}>{cssVar}</Mono></div>}
        {extra && <div style={{ color: muted }}>{extra}</div>}
      </div>
    </div>
  );
}

export const Wrap = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>{children}</div>
);

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  const cell: CSSProperties = { padding: '8px 12px', borderBottom: `1px solid ${line}`, textAlign: 'left', verticalAlign: 'middle' };
  return (
    <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: 14 }}>
      <thead>
        <tr>{head.map((h) => <th key={h} style={{ ...cell, background: '#F1F1EF', fontSize: 12 }}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i}>{r.map((c, j) => <td key={j} style={cell}>{c}</td>)}</tr>
        ))}
      </tbody>
    </table>
  );
}
