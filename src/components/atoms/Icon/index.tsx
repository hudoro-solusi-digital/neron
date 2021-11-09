import React from "react";
import styled from "styled-components";
import { IIconProps } from "../../../utils";
import Icons from "./Icons";

const Wrapper = styled.div<Pick<IIconProps, "size" | "color">>`
  border: none;
  outline: none;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  svg {
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    fill: ${(props) => props.color};
  }
`;

function Icon({ iconName, size = 16, color = "black", ...rest }: IIconProps) {
  return (
    <Wrapper {...rest} size={size} color={color}>
      {Icons[iconName]}
    </Wrapper>
  );
}

export default Icon;
