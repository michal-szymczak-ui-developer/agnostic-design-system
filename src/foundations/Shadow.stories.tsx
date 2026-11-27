import type { Meta, StoryObj } from '@storybook/react-vite';
import { Note, Page, Section, Table } from './ui';

const meta = { title: 'Foundations/Shadow', parameters: { layout: 'padded' } } satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

export const Elevation: Story = {
  render: () => (
    <Page title="Shadow" intro="Use shadows only for interactive elements. For other elements, use borders or color.">
      <Note>
        The reference defines two levels (MD and LG) but not their values (blur, offset, color). No shadow tokens exist yet. Add them to
        tokens/primitive/ when the values are known.
      </Note>
      <Section title="Levels">
        <Table
          head={['Level', 'Use', 'Token']}
          rows={[
            ['MD', 'Moderate attention. Tooltips, dropdowns.', 'Not defined'],
            ['LG', 'Highest elevation, used sparingly. Snackbar, modals.', 'Not defined'],
          ]}
        />
      </Section>
    </Page>
  ),
};
