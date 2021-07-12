import React from "react";
import { Story, Meta } from "@storybook/react";
import { Button } from "../components/atoms";
import { IButtonProps } from "../utils/interfaces";

export default {
  component: Button,
  title: "Components/Buttons",
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Ghost = Template.bind({});

Primary.args = {
  children: "Hello",
  buttonStyle: "primary",
};

Secondary.args = {
  children: "Hello",
  buttonStyle: "secondary",
};

Ghost.args = {
  children: "Hello",
  buttonStyle: "ghost",
};
