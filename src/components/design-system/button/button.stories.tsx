import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    schema: "primary",
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    schema: "secondary",
    label: 'Button',
};

export const Custom = Template.bind({});
Custom.args = {
    schema: "custom",
    label: 'Button',
};