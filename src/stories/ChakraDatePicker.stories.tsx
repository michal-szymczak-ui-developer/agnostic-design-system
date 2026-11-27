import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker, Portal } from '@chakra-ui/react';
import type { ComponentProps } from 'react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('datePicker');

const meta = {
  title: 'Chakra/Forms/Date and color/DatePicker',
  component: DatePicker.Root,
  args,
  argTypes: {
    ...argTypes,
    selectionMode: { control: 'inline-radio', options: ['single', 'range'], table: { category: 'Props' } },
    disabled: { control: 'boolean', table: { category: 'Props' } },
    invalid: { control: 'boolean', table: { category: 'Props' } },
    readOnly: { control: 'boolean', table: { category: 'Props' } },
  },
} satisfies Meta<typeof DatePicker.Root>;
export default meta;
type Story = StoryObj<typeof meta>;

const Picker = ({ label, ...root }: { label: string } & ComponentProps<typeof DatePicker.Root>) => (
  <DatePicker.Root colorPalette="primary" maxW="xs" {...root}>
    <DatePicker.Label>{label}</DatePicker.Label>
    <DatePicker.Control>
      <DatePicker.Input index={0} />
      {root.selectionMode === 'range' && <DatePicker.Input index={1} />}
      <DatePicker.IndicatorGroup>
        <DatePicker.Trigger>▾</DatePicker.Trigger>
      </DatePicker.IndicatorGroup>
    </DatePicker.Control>
    <Portal>
      <DatePicker.Positioner>
        <DatePicker.Content>
          <DatePicker.View view="day">
            <DatePicker.Header />
            <DatePicker.DayTable />
          </DatePicker.View>
          <DatePicker.View view="month">
            <DatePicker.Header />
            <DatePicker.MonthTable />
          </DatePicker.View>
          <DatePicker.View view="year">
            <DatePicker.Header />
            <DatePicker.YearTable />
          </DatePicker.View>
        </DatePicker.Content>
      </DatePicker.Positioner>
    </Portal>
  </DatePicker.Root>
);

// Controls apply to this story. The other stories show fixed combinations.
export const Playground: Story = { render: (args) => <Picker label="Date" {...args} /> };
export const Single: Story = { render: () => <Picker label="Date" /> };
export const Range: Story = { render: () => <Picker label="Date range" selectionMode="range" /> };
export const Invalid: Story = { render: () => <Picker label="Invalid" invalid /> };
export const Disabled: Story = { render: () => <Picker label="Disabled" disabled /> };
