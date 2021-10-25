import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  SVGProps,
} from "react";
import {
  AlignItemsType,
  ButtonVariantType,
  FlexDirectionType,
  GridSizeType,
  IconType,
  InputType,
  JustifyContentType,
  LozengeColorAndVariantType,
  SizeType,
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
  message?: string;
}

export interface ILabelValueProps {
  label: string;
  value: string;
  valueColor?: string;
}

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export interface IPaginationProps {
  numberOfPages: number;
  pagesLimit: number;
  currentPage?: number;
  nextButtonEvent: () => void;
  previousButtonEvent: () => void;
  pageButtonEvent: () => void;
}
