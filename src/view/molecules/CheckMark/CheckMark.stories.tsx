import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckMark } from './CheckMark';

export default {
  title: 'Design System/molecules/CheckMark',
  component: CheckMark,
} as ComponentMeta<typeof CheckMark>;

const Template: ComponentStory<typeof CheckMark> = (args) => <CheckMark {...args} />;

export const index = Template.bind({});

index.args = {
  done: false,
};
