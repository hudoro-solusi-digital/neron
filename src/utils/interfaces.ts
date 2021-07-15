import { ButtonHTMLAttributes, InputHTMLAttributes, SVGProps } from "react";
import { ButtonType } from "./types";

export interface IButtonTheme {
  background?: string;
  foreground?: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  theme?: IButtonTheme;
}

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface ISVGProps extends SVGProps<SVGSVGElement> {}
