import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { createTreeCollection, TreeView } from '@chakra-ui/react';
import { recipeControls } from './controls';

const { argTypes, args } = recipeControls('treeView');
const props = { table: { category: 'Props' } } as const;

interface Node {
  id: string;
  name: string;
  children?: Node[];
}

const collection = createTreeCollection<Node>({
  nodeToValue: (n) => n.id,
  nodeToString: (n) => n.name,
  rootNode: {
    id: 'ROOT',
    name: '',
    children: [
      {
        id: 'tokens',
        name: 'tokens',
        children: [
          { id: 'primitive', name: 'primitive', children: [{ id: 'color', name: 'color.json' }, { id: 'space', name: 'space.json' }] },
          { id: 'semantic', name: 'semantic', children: [{ id: 'light', name: 'color.light.json' }] },
        ],
      },
      { id: 'readme', name: 'README.md' },
    ],
  },
});

function Demo(rootProps: Omit<ComponentProps<typeof TreeView.Root>, 'collection'>) {
  return (
    <TreeView.Root collection={collection} colorPalette="primary" maxW="sm" defaultExpandedValue={['tokens']} {...rootProps}>
      <TreeView.Label>Files</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Node<Node>
          indentGuide={<TreeView.BranchIndentGuide />}
          render={({ node }) => (
            <TreeView.Item>
              <TreeView.ItemText>{node.name}</TreeView.ItemText>
            </TreeView.Item>
          )}
          renderBranch={({ node }) => (
            <TreeView.BranchControl>
              <TreeView.BranchText>{node.name}</TreeView.BranchText>
              <TreeView.BranchIndicator />
            </TreeView.BranchControl>
          )}
        />
      </TreeView.Tree>
    </TreeView.Root>
  );
}

const meta = {
  title: 'Chakra/Navigation/TreeView',
  component: Demo,
  args: { ...args, selectionMode: 'single', expandOnClick: true },
  argTypes: {
    ...argTypes,
    selectionMode: { control: 'inline-radio', options: ['single', 'multiple'], ...props },
    expandOnClick: { control: 'boolean', ...props },
    typeahead: { control: 'boolean', ...props },
  },
} satisfies Meta<typeof Demo>;
export default meta;
type Story = StoryObj<typeof meta>;

// Controls apply to Playground. Default shows the fixed example.
export const Playground: Story = {};
export const Default: Story = { render: () => <Demo /> };
