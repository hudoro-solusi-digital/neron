import React from "react";
import styled from "styled-components";
import { ICardProps, shadows } from "../../../utils";

export const Wrapper = styled.div`
  background-color: white;
  box-shadow: ${shadows.containerShadow};
  padding: 20px;
  border-radius: 10px;
`;

function Card({ children }: ICardProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default Card;
