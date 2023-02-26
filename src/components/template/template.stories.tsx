import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Template } from './template';

export default {
    title: 'Design-System/Template',
    component: Template,
    argTypes: { },
} as ComponentMeta<typeof Template>;

const story: ComponentStory<typeof Template> = (args) => <Template {...args} />;

export const Default = story.bind({});
Default.args = {

};