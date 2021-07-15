import React from "react";
import { ICheckboxProps } from "../../../utils";
import { Wrapper, HiddenCheckbox, CustomCheckbox, Label } from "./styles";
import Check from "./Check";

/**
 * Add label props to be a labeled checkbox
 */
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
