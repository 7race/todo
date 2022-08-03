import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToDo } from './ToDo';

export default {
  title: 'Design System/organisms/ToDo',
  component: ToDo,
} as ComponentMeta<typeof ToDo>;

const Template: ComponentStory<typeof ToDo> = () => <ToDo />;

export const index = Template.bind({});
