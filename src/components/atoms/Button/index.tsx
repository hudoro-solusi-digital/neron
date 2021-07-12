import React from "react";
import { IButtonProps } from "../../../utils/interfaces";
import { PrimaryButton, SecondaryButton, GhostButton } from "./styles";

function Button({ theme, variant, children, ...rest }: IButtonProps) {
  const renderButton = () => {
    switch (variant) {
      case "primary":
        return (
          <PrimaryButton theme={theme} {...rest}>
            {children}
          </PrimaryButton>
        );
      case "secondary":
        return (
          <SecondaryButton theme={theme} {...rest}>
            {children}
          </SecondaryButton>
        );
      case "ghost":
        return (
          <GhostButton theme={theme} {...rest}>
            {children}
          </GhostButton>
        );
      default:
        throw Error("Button variant is undefined");
    }
  };
  return renderButton();
}

export default Button;
