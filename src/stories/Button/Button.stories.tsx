import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "../../components";
import { IButtonProps } from "../../utils";

export default {
  title: "Components/Buttons",
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Ghost = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Button",
};

Secondary.args = {
  variant: "secondary",
  children: "Button",
};

Ghost.args = {
  variant: "ghost",
  children: "Button",
};
