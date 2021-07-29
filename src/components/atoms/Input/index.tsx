import React from "react";
import { IInputProps } from "../../../utils";
import { Wrapper, Label, StyledInput, InputWrapper } from "./styles";
import Icon from "../Icon";
import { colors } from "../../../utils";

function Input({
  label,
  error,
  iconLeft,
  iconRight,
  type = "text",
  iconLeftEvent,
  iconRightEvent,
  ...rest
}: IInputProps) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputWrapper
        iconLeftEvent={iconLeftEvent}
        iconRightEvent={iconRightEvent}
      >
        {iconLeft && (
          <Icon
            className="icon-left"
            iconName={iconLeft}
            onClick={iconLeftEvent}
            color={colors.black[60]}
          />
        )}
        <StyledInput
          {...rest}
          type={type}
          error={error}
          iconLeft={iconLeft}
          iconRight={iconRight}
        />
        {iconRight && (
          <Icon
            className="icon-right"
            iconName={iconRight}
            onClick={iconRightEvent}
            color={colors.black[60]}
          />
        )}
      </InputWrapper>
    </Wrapper>
  );
}

export default Input;
