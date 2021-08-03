import styled from "styled-components";
import { colors, fontFamilies, fontSizes } from "../../../utils";

export const H1 = styled.h1`
  font-family: ${fontFamilies.poppins};
  font-size: ${fontSizes.XL};
`;

export const H2 = styled.h2`
  font-family: ${fontFamilies.poppins};
  font-size: ${fontSizes.L};
`;

export const H3 = styled.h3`
  font-family: ${fontFamilies.poppins};
  font-size: ${fontSizes.M};
`;

export const H4 = styled.h4`
  font-family: ${fontFamilies.poppins};
  font-size: ${fontSizes.S};
`;

export const Paragraph = styled.p`
  font-family: ${fontFamilies.openSans};
  font-size: ${fontSizes.XS};
`;

export const Mute = styled(Paragraph)`
  font-size: ${fontSizes.XXS};
  color: ${colors.black[40]};
`;
