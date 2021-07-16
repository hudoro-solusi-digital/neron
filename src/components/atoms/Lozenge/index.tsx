import React from "react";
import { ILozengeProps } from "../../../utils";
import { Wrapper, P } from "./styles";

function Lozenge({ variant, children }: ILozengeProps) {
  return (
    <Wrapper className={variant}>
      <P>{children}</P>
    </Wrapper>
  );
}

export default Lozenge;
