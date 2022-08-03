import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TypeTasks } from './TypeTasks';

export default {
  title: 'Design System/molecules/TypeTasks',
  component: TypeTasks,
  argTypes: {
    active: {
      options: ['all', 'todo', 'done'],
      defaultValue: 'all',
    },
  },
} as ComponentMeta<typeof TypeTasks>;

const Template: ComponentStory<typeof TypeTasks> = () => <TypeTasks />;

export const index = Template.bind({});
