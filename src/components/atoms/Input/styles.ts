import styled from "styled-components";
import { colors, spacing } from "../../../utils";

interface IProps {
  error?: boolean;
}

export const StyledInput = styled.input<IProps>`
  border: 1px solid ${(props) => (props.error ? "red" : "black")};
  width: 200px;
  border-radius: 999px;
  height: 26px;
  outline: none;
  cursor: pointer;
  padding: ${spacing(0)}px ${spacing(4)}px;
  position: absolute;
  box-sizing: border-box;
  &:focus {
    border-color: ${colors.primary[80]};
  }
`;

export const PrimaryInput = styled(StyledInput)``;

export const PasswordInput = styled(StyledInput)`
  & + svg {
    position: absolute;
    margin-top: 4px;
    margin-left: 170px;
  }
`;

export const Label = styled.label``;
