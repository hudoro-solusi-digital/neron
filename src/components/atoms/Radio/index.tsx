import { IRadioProps } from "interfaces";
import React from "react";
import { Wrapper, HiddenRadio, CustomRadio, Label } from "./styles";

function Radio({ label, ...rest }: IRadioProps) {
  return (
    <Wrapper>
      <HiddenRadio {...rest} type="radio" />
      <CustomRadio />
      {label && <Label>{label}</Label>}
    </Wrapper>
  );
}

export default Radio;
