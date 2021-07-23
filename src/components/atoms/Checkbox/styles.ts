import styled from "styled-components";
import { colors, fontFamilies } from "../../../utils";

interface IProps {
  checked: boolean;
  disabled: boolean;
}

const calibrateCheckboxBackgroundColor = (props: IProps) => {
  if (props.checked && !props.disabled) {
    return colors.primary[100];
  } else if (props.checked && props.disabled) {
    return colors.black[40];
  }
  return;
};

const calibrateCheckboxLabelAndBorderColor = (props: IProps) => {
  if ((props.checked && props.disabled) || (!props.checked && props.disabled)) {
    return colors.black[40];
  } else if (props.checked && !props.disabled) {
    return colors.primary[100];
  }
  return colors.black[40];
};

export const Wrapper = styled.label<IProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-family: ${fontFamilies.openSans};
  p {
    color: ${calibrateCheckboxLabelAndBorderColor};
  }
  & > div {
    background-color: ${calibrateCheckboxBackgroundColor};
    border: 1px solid ${calibrateCheckboxLabelAndBorderColor};
  }
`;

export const CustomCheckbox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  position: relative;
  svg {
    position: absolute;
  }
`;

export const HiddenCheckbox = styled.input`
  background-color: red;
  display: none;
`;

export const Label = styled.p`
  padding: 0;
  margin: 0;
`;
