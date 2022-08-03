import { ComponentStory, ComponentMeta } from '@storybook/react';
import { P } from './P';

export default {
  title: 'Design System/atoms/P',
  component: P,
} as ComponentMeta<typeof P>;

const Template: ComponentStory<typeof P> = (args) => <P {...args} />;

export const index = Template.bind({});

index.args = {
  children: 'todo',
  variant: 'todo',
};
