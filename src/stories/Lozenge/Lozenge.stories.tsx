import { Meta, Story } from "@storybook/react";
import { Lozenge } from "../../components";
import { ILozengeProps } from "../../utils";

export default {
  title: "Components/Lozenges",
  component: Lozenge,
} as Meta;

const Template: Story<ILozengeProps> = (args) => <Lozenge {...args} />;

export const LozengeComponent = Template.bind({});

LozengeComponent.args = {
  variant: "black-light",
  children: "Lozenge",
};
