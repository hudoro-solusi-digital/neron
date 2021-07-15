import { Meta, Story } from "@storybook/react";
import { Radio } from "../../components";
import { IRadioProps } from "../../utils";

export default {
  title: "Components/Radio",
} as Meta;

export const Normal: Story<IRadioProps> = (args) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Radio {...args} name="gender" />
      <Radio {...args} name="gender" />
    </div>
  );
};

export const Labeled: Story<IRadioProps> = (args) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Radio {...args} name="gender" label="Male" />
      <Radio {...args} name="gender" label="Female" />
    </div>
  );
};
