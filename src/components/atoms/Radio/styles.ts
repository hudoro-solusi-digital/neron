import styled from "styled-components";
import { colors, fontFamilies } from "../../../utils";

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: ${fontFamilies.openSans};
  gap: 10px;
`;

export const HiddenRadio = styled.input`
  display: none;
  &:checked + div::after {
    transform: scale(0.7);
  }
  &:disabled + div {
    border-color: ${colors.black[40]};
    & + p {
      color: ${colors.black[40]};
    }
    &::after {
      background-color: ${colors.black[40]};
    }
  }
`;

export const CustomRadio = styled.div`
  border: 1px solid ${colors.primary[100]};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    transition: 0.3s;
    width: 12px;
    height: 12px;
    display: flex;
    background-color: ${colors.primary[100]};
    border-radius: 50%;
    transform: scale(0);
  }
`;

export const Label = styled.p`
  margin: 0;
  padding: 0;
`;
