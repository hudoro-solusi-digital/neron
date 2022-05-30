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
  currentPage?: number;
  nextButtonEvent?: (currentPage: number) => void;
  previousButtonEvent?: (currentPage: number) => void;
  pageButtonEvent?: (currentPage: number) => void;
}

export interface ISelectItem {
  id: number | string;
  label: string;
  image?: string;
  [x: string]: any;
}

export interface ISelectProps {
  multiple?: boolean;
  items: ISelectItem[];
  onChange?: (value: ISelectItem | ISelectItem[] | null) => void;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: ISelectItem;
}

export interface IFileInputProps {
  onChange: (file: FileList | File | null) => void;
  onClear: Function;
  name?: string;
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
}

export interface IIconProps extends HTMLAttributes<HTMLDivElement> {
  iconName: IconType;
  size?: 12 | 16 | 24 | 32;
  color?: string;
}
