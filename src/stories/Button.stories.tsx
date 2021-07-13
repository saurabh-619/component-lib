import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => (
  <Button {...args}>My button component</Button>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
};
