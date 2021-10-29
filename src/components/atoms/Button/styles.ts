import styled from "styled-components";
import { buttonThemes, colors, fontFamilies, spacing } from "../../../utils";

export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.background || colors.primary[100]};
  color: white;
  border-radius: 999px;
  font-family: ${fontFamilies.poppins};
  outline: none;
  border: none;
  cursor: pointer;
  padding: ${spacing(2)}px ${spacing(4)}px;
`;

export const SecondaryButton = styled(PrimaryButton)`
  border: 1px solid ${(props) => props.theme.background || colors.primary[100]};
  color: ${(props) => props.theme.foreground || colors.primary[100]};
  background-color: transparent;
`;

export const GhostButton = styled(SecondaryButton)`
  border: none;
  color: ${(props) => props.theme.foreground || colors.primary[100]};
`;

PrimaryButton.defaultProps = {
  theme: buttonThemes.primary,
};
