import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  SVGProps,
} from "react";
import {
  ButtonVariantType,
  SizeType,
  TextVariantType,
  LozengeColorAndVariantType,
  GridSizeType,
  JustifyContentType,
  AlignItemsType,
  FlexDirectionType,
  InputType,
  IconType,
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

export interface ITogglerProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: SizeType;
}

export interface IGridProps {
  gap?: number;
  container?: boolean;
  size?: GridSizeType;
  mdSize?: GridSizeType;
  smSize?: GridSizeType;
  flexDirection?: FlexDirectionType;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: InputType;
  label?: string;
  error?: boolean;
  iconRight?: IconType;
  iconLeft?: IconType;
  iconLeftEvent?: () => void;
  iconRightEvent?: () => void;
}

export interface ILabelValueProps {
  label: string;
  value: string;
  valueColor?: string;
}
