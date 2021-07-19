import styled from "styled-components";
import { colors } from "../../../utils";

export const Wrapper = styled.label`
  box-sizing: border-box;
`;

export const HiddenCheckbox = styled.input`
  display: none;
  &:checked + div {
    background-color: ${colors.primary[100]};
    & div {
      transform: translateX(180%);
    }
  }
`;

export const CircleContainer = styled.div`
  width: 40px;
  height: 16px;
  background-color: ${colors.black[60]};
  border-radius: 999px;
  position: relative;
  transition: 0.3s;
`;

export const Switch = styled.div`
  transition: 0.3s;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  position: absolute;
  top: 1px;
  transform: translateX(1px);
  background-color: ${colors.white[100]};
`;
