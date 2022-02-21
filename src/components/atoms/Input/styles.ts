import styled from "styled-components";
import {
  colors,
  spacing,
  fontFamilies,
  fontSizes,
  IInputProps,
} from "../../../utils";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: inline-block;
  flex: 1;
`;

export const InputWrapper = styled.div<
  Pick<IInputProps, "iconLeftEvent" | "iconRightEvent">
>`
  position: relative;
  .icon-right {
    position: absolute;
    fill: ${colors.black[20]};
    right: 8px;
    top: 8px;
    cursor: ${(props) => (props.iconRightEvent ? "pointer" : "initial")};
  }
  .icon-left {
    position: absolute;
    left: 8px;
    top: 8px;
    cursor: ${(props) => (props.iconLeftEvent ? "pointer" : "initial")};
  }
`;

export const StyledInput = styled.input<
  Pick<IInputProps, "error" | "iconRight" | "iconLeft">
>`
  width: 100%;
  font-size: ${fontSizes.XXS};
  border: 1px solid
    ${(props) => (props.error ? colors.danger[80] : colors.black[20])};
  border-radius: 999px;
  outline: none;
  padding: ${spacing(2)}px 0px;
  padding-left: ${(props) => {
    if (props.iconLeft) {
      return spacing(8);
    }
    return spacing(4);
  }}px;
  padding-right: ${(props) => {
    if (props.iconRight) {
      return spacing(8);
    }
    return spacing(4);
  }}px;
  box-sizing: border-box;
  &::placeholder {
    color: ${colors.black[40]};
  }
  &:focus {
    border-color: ${(props) =>
      props.error ? colors.danger[80] : colors.primary[80]};
  }
`;

export const Label = styled.label`
  font-family: ${fontFamilies.openSans};
  font-size: ${fontSizes.XXS};
  color: ${colors.black[100]};
  display: block;
  margin-bottom: 5px;
`;

export const Message = styled.label`
  font-family: ${fontFamilies.openSans};
  font-size: ${fontSizes.XXS};
  color: ${colors.black[100]};
  display: block;
  margin-top: 5px;
`;
