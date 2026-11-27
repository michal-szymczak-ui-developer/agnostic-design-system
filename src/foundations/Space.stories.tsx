import type { Meta, StoryObj } from '@storybook/react-vite';
import { space } from './tokens';
import { Mono, Page, Section, Table } from './ui';

const meta = { title: 'Foundations/Space', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => (
    <Page title="Space" intro="A 4 px grid. Use these values for padding, margin and gap. Pick a token. Never write a raw pixel value.">
      <Section title="Spacing scale">
        <Table
          head={['Token', 'Value', 'CSS variable', 'Preview']}
          rows={space.map((t) => [
            t.path[1],
            String(t.value),
            <Mono>{t.cssVar}</Mono>,
            <div style={{ width: String(t.value), height: 16, background: '#A100FF', minWidth: 1 }} />,
          ])}
        />
      </Section>
    </Page>
  ),
};
