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
