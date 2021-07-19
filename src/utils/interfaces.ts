import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  SVGProps,
} from "react";
import {
  ButtonVariantType,
  LozengeColorAndVariantType,
  TextVariantType,
} from "./types";

export interface IButtonTheme {
  background?: string;
  foreground?: string;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariantType;
  theme?: IButtonTheme;
}

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export interface ISVGProps extends SVGProps<SVGSVGElement> {}

export interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant: TextVariantType;
}

export interface ILozengeProps {
  variant: LozengeColorAndVariantType;
  label: string;
}
