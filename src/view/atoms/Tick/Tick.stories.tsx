import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tick } from './Tick';

export default {
  title: 'Design System/atoms/Tick',
  component: Tick,
} as ComponentMeta<typeof Tick>;

const Template: ComponentStory<typeof Tick> = () => <Tick />;

export const index = Template.bind({});
