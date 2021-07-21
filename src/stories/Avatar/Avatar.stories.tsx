import { Meta, Story } from "@storybook/react";
import { Avatar } from "../../components";
import { IAvatarProps } from "../../utils";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as Meta;

const Template: Story<IAvatarProps> = (args) => <Avatar {...args} />;

export const Avatars = Template.bind({});

Avatars.args = {
  src:
    "https://i.pinimg.com/originals/56/4a/2b/564a2b415569179ae577e79e4f9cb666.jpg",
};
