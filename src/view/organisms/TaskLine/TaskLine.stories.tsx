import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TaskLine } from './TaskLine';

export default {
  title: 'Design System/organisms/TaskLine',
  component: TaskLine,
} as ComponentMeta<typeof TaskLine>;

const Template: ComponentStory<typeof TaskLine> = (args) => <TaskLine {...args} />;

export const index = Template.bind({});

index.args = {
  children: 'great task',
  isDone: false,
};
