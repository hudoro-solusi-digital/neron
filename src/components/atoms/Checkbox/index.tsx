import React from "react";
import { ICheckboxProps } from "../../../utils";
import { Wrapper, HiddenCheckbox, CustomCheckbox, Label } from "./styles";
import Check from "./Check";

function Checkbox({ checked, label, disabled, ...rest }: ICheckboxProps) {
  return (
    <Wrapper checked={checked!} disabled={disabled!}>
      <HiddenCheckbox
        {...rest}
        disabled={disabled}
        type="checkbox"
        checked={checked}
      />
      <CustomCheckbox checked={checked!}>{checked && <Check />}</CustomCheckbox>
      <Label>{label}</Label>
    </Wrapper>
  );
}

export default Checkbox;
