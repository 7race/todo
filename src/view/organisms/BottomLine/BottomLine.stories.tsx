import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BottomLine } from './BottomLine';

export default {
  title: 'Design System/organisms/BottomLine',
  component: BottomLine,
} as ComponentMeta<typeof BottomLine>;

const Template: ComponentStory<typeof BottomLine> = (args) => <BottomLine {...args} />;

export const index = Template.bind({});

index.args = {
  active: 'all',
  todoCount: 0,
};
