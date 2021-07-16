import { Meta, Story } from "@storybook/react";
import { Toggler } from "../../components";
import { ITogglerProps } from "../../utils";

export default {
  title: "Components/Toggler",
  component: Toggler,
} as Meta;

const Template: Story<ITogglerProps> = (args) => <Toggler {...args} />;

export const TogglerComponent = Template.bind({});
