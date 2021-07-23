import { Meta, Story } from "@storybook/react";
import { Input } from "../../components";
import { IInputProps } from "../../utils";

export default {
  title: "Components/Inputs",
  component: Input,
  // argTypes: {
  //   type: {
  //     options: ["password", "text", "email"],
  //     control: { type: "radio" },
  //   },
  // },
} as Meta;

const Template: Story<IInputProps> = (args) => <Input {...args} />;

export const InputComponent = Template.bind({});

InputComponent.args = {
  placeholder: "Default",
  iconLeftEvent: () => console.log("Left Event"),
};
