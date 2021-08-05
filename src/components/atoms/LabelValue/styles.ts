import styled from "styled-components";
import { colors, fontFamilies } from "../../../utils";
import Text from "../Text";

export const Label = styled(Text)`
  font-family: ${fontFamilies.poppins};
  font-weight: 500;
  color: ${colors.black[60]};
`;

export const Value = styled(Text)``;
