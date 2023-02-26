import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

export default {
    title: 'Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const story: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryFilled = story.bind({});
PrimaryFilled.args = {
    schema: "primary",
    text: "Button-Text"
};

export const SecondaryFilled = story.bind({});
SecondaryFilled.args = {
    schema: "secondary",
    text: "Button-Text"
};
