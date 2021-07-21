import React from "react";
import { ILozengeProps } from "../../../utils";
import { Wrapper, P } from "./styles";

function Lozenge({ variant, label }: ILozengeProps) {
  return (
    <Wrapper className={variant}>
      <P>{label}</P>
    </Wrapper>
  );
}

export default Lozenge;
