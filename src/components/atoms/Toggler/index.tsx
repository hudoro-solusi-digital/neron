import React from "react";
import { ITogglerProps } from "../../../utils";
import { Wrapper, HiddenCheckbox, CircleContainer, Switch } from "./styles";

function Toggler({ checked, ...rest }: ITogglerProps) {
  return (
    <Wrapper>
      <HiddenCheckbox {...rest} checked={checked} type="checkbox" />
      <CircleContainer>
        <Switch />
      </CircleContainer>
    </Wrapper>
  );
}

export default Toggler;
