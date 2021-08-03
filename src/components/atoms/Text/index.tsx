import React from "react";
import { ITextProps } from "../../../utils";
import { H1, H2, H3, H4, Paragraph, Mute } from "./styles";

function Text({ children, variant, ...rest }: ITextProps) {
  const renderText = () => {
    switch (variant) {
      case "h1":
        return <H1 {...rest}>{children}</H1>;
      case "h2":
        return <H2 {...rest}>{children}</H2>;
      case "h3":
        return <H3 {...rest}>{children}</H3>;
      case "h4":
        return <H4 {...rest}>{children}</H4>;
      case "p":
        return <Paragraph {...rest}>{children}</Paragraph>;
      case "mute":
        return <Mute {...rest}>{children}</Mute>;
      default:
        throw Error("Variant cannot be undefined");
    }
  };
  return renderText();
}

export default Text;
