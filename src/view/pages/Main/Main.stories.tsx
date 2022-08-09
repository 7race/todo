import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Main } from './Main';

export default {
  title: 'Design System/Pages/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const index = Template.bind({});
