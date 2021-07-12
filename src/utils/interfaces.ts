import { ButtonHTMLAttributes } from "react";
import { ButtonType } from "./types";

export interface IButtonTheme {
  background?: string;
  foreground?: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  theme?: IButtonTheme;
}
