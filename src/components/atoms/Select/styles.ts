import styled from "styled-components";
import { colors, fontFamilies } from "../../../utils";
import Grid from "../Grid";

interface IProps {
  isOpen?: boolean;
  disabled?: boolean;
}

export const Wrapper = styled.div`
  position: relative;
  flex: 1;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-family: ${fontFamilies.openSans};
  width: 100%;
  background-color: transparent;
`;

export const InputWrapper = styled(Grid)<Pick<IProps, "disabled" | "isOpen">>`
  background-color: ${({ disabled }) =>
    disabled ? colors.black[20] : "white"};
  border: 1px solid
    ${({ isOpen }) => (isOpen ? colors.primary[100] : colors.black[20])};
  border-radius: 5px;
  padding: 10px;
  flex-wrap: nowrap;
`;
