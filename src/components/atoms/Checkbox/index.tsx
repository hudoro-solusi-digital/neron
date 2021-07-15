import React from "react";
import { ICheckboxProps } from "../../../utils";
import { Wrapper, HiddenCheckbox, CustomCheckbox, Label } from "./styles";
import Check from "./Check";

/**
 *
 * Add label and name props to be a labeled checkbox
 *
 */
function Checkbox({ checked, label, disabled, name, ...rest }: ICheckboxProps) {
  return (
    <Wrapper checked={checked!} disabled={disabled!} htmlFor={name}>
      <HiddenCheckbox
        {...rest}
        disabled={disabled}
        type="checkbox"
        checked={checked}
      />
      <CustomCheckbox>{checked && <Check />}</CustomCheckbox>
      <Label>{label}</Label>
    </Wrapper>
  );
}

export default Checkbox;
