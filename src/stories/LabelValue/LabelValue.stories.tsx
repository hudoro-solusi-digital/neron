import { Meta, Story } from "@storybook/react";
import { LabelValue } from "../../components";
import { ILabelValueProps } from "../../utils";

export default {
  title: "Components/LabelValue",
  component: LabelValue,
} as Meta;

const Template: Story<ILabelValueProps> = (args) => <LabelValue {...args} />;

export const LabelValueComponent = Template.bind({});

LabelValueComponent.args = {
  label: "Name",
  value: "John Doe",
};
