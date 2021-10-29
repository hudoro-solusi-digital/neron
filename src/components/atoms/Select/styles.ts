import { CSSProperties } from "react";
import styled from "styled-components";
import { fontFamilies } from "../../../utils";

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-family: ${fontFamilies.openSans};
  width: 100%;
  background-color: transparent;
`;

export const inputContainer: CSSProperties = {
  borderRadius: 5,
  padding: 10,
  flexWrap: "nowrap",
};
