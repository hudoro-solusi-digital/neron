export type LozengeColorType =
  | "black"
  | "primary"
  | "danger"
  | "success"
  | "warning";
export type LozengeVariantType = "light" | "strong";
export type ButtonVariantType = "primary" | "secondary" | "ghost";
export type TextVariantType = "h1" | "h2" | "h3" | "h4" | "p" | "mute";
export type LozengeColorAndVariantType = `${LozengeColorType}-${LozengeVariantType}`;
export type SizeType = "xs" | "s" | "m" | "l" | "xl";
export type GridSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type FlexDirectionType = "column" | "row";
export type JustifyContentType =
  | "space-around"
  | "space-between"
  | "space-evenly"
  | "flex-end"
  | "flex-start"
  | "center";
export type AlignItemsType = "center" | "flex-end" | "flex-start";
export type InputType = "basic" | "labeled" | "password";
