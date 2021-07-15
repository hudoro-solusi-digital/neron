import { IRadioProps } from "interfaces";
import React from "react";
import { Wrapper, HiddenRadio, CustomRadio, Label } from "./styles";

function Radio({ id, label, ...rest }: IRadioProps) {
  return (
    <Wrapper htmlFor={id}>
      <HiddenRadio {...rest} type="radio" id={id} />
      <CustomRadio />
      <Label>{label}</Label>
    </Wrapper>
  );
}

export default Radio;
