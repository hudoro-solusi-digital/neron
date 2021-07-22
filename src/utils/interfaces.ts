import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { ButtonType, InputType } from "./types";

export interface IButtonTheme {
  background?: string;
  foreground?: string;
}
export interface IInputTheme {
  background?: string;
  foreground?: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  theme?: IButtonTheme;
}
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: InputType;
  theme?: IInputTheme;
  error?: boolean;
}
