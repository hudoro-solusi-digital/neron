import { Meta, Story } from "@storybook/react";
import { useCallback, useEffect, useState } from "react";
import { Checkbox } from "../../components";
import { ICheckboxProps } from "../../utils";

export default {
  title: "Components/Checkboxes",
} as Meta;

const Template: Story<ICheckboxProps> = (args) => {
  const [checked, setChecked] = useState<boolean>(false);

  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);
  return <Checkbox {...args} checked={checked} onChange={onChange} />;
};

export const Normal = Template.bind({});
export const Labeled = Template.bind({});

Normal.args = {
  checked: true,
  disabled: true,
};

Labeled.args = {
  checked: false,
  disabled: false,
  label: "Label",
};
