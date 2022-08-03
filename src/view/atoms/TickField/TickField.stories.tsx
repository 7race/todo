import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TickField } from './TickField';

export default {
  title: 'Design System/atoms/TickField',
  component: TickField,
} as ComponentMeta<typeof TickField>;

const Template: ComponentStory<typeof TickField> = (args) => <TickField {...args} />;

export const index = Template.bind({});

index.args = {
  done: false,
};
