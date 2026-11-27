import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Carousel, IconButton } from '@chakra-ui/react';
import { recipeControls } from './controls';

// The carousel recipe has no variants, so this adds the palette and behavior controls.
const { argTypes, args } = recipeControls('carousel');
const props = { table: { category: 'Props' } } as const;

const slides = ['brand.core.200', 'brand.core.300', 'brand.core.400', 'brand.core.500'];

function Demo(rootProps: Omit<ComponentProps<typeof Carousel.Root>, 'slideCount'>) {
  return (
    <Carousel.Root slideCount={slides.length} maxW="lg" mx="auto" {...rootProps}>
      <Carousel.ItemGroup>
        {slides.map((color, index) => (
          <Carousel.Item key={color} index={index}>
            <Box height="200px" bg={color} color="white" display="flex" alignItems="center" justifyContent="center">
              Slide {index + 1}
            </Box>
          </Carousel.Item>
        ))}
      </Carousel.ItemGroup>
      <Carousel.Control justifyContent="center" gap="4">
        <Carousel.PrevTrigger asChild>
          <IconButton size="xs" variant="outline" colorPalette="primary" aria-label="Previous slide">
            &lt;
          </IconButton>
        </Carousel.PrevTrigger>
        <Carousel.Indicators />
        <Carousel.NextTrigger asChild>
          <IconButton size="xs" variant="outline" colorPalette="primary" aria-label="Next slide">
            &gt;
          </IconButton>
        </Carousel.NextTrigger>
      </Carousel.Control>
    </Carousel.Root>
  );
}

const meta = {
  title: 'Chakra/Navigation/Carousel',
  component: Demo,
  args: { ...args, orientation: 'horizontal', loop: false, slidesPerPage: 1 },
  argTypes: {
    ...argTypes,
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'], ...props },
    loop: { control: 'boolean', ...props },
    slidesPerPage: { control: 'number', ...props },
    allowMouseDrag: { control: 'boolean', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
