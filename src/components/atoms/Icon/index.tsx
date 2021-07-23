import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import Icons from "./Icons";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  iconName: keyof typeof Icons;
  size?: 16 | 24 | 32;
  color?: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  outline: none;
`;

function Icon({ iconName, size = 16, color = "black", ...rest }: IProps) {
  return (
    <Wrapper
      {...rest}
      style={{
        width: size,
        height: size,
        fill: color,
      }}
    >
      {Icons[iconName]}
    </Wrapper>
  );
}

export default Icon;
