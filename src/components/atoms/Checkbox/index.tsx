import React from "react";
import { ICheckboxProps } from "../../../utils";
import Check from "./Check";
import { CustomCheckbox, HiddenCheckbox, Label, Wrapper } from "./styles";

function Checkbox({
  checked = false,
  label,
  disabled = false,
  ...rest
}: ICheckboxProps) {
  return (
    <Wrapper checked={checked} disabled={disabled}>
      <HiddenCheckbox
        {...rest}
        disabled={disabled}
        type="checkbox"
        checked={checked}
      />
      <CustomCheckbox>{checked && <Check />}</CustomCheckbox>
      {label && <Label>{label}</Label>}
    </Wrapper>
  );
}

export default Checkbox;
