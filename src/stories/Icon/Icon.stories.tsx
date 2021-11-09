import { Meta, Story } from "@storybook/react";
import { IIconProps } from "../..";
import { Icon } from "../../components";

export default {
  title: "Components/Icon",
  component: Icon,
} as Meta;

const Template: Story<IIconProps> = (args) => <Icon {...args} />;

export const Icons = Template.bind({});

Icons.args = {
  iconName: "IcStar",
};
