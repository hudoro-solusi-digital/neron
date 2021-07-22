import styled from "styled-components";
import { colors, fontFamilies, fontSizes, spacing } from "../../../utils";

export const Wrapper = styled.div`
  padding: ${spacing(1)}px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  font-family: ${fontFamilies.openSans};
  font-weight: 700;
  &.danger-light {
    color: ${colors.danger[100]};
    background-color: ${colors.danger[20]};
  }
  &.danger-strong {
    color: ${colors.white[100]};
    background-color: ${colors.danger[100]};
  }
  &.success-light {
    color: ${colors.success[100]};
    background-color: ${colors.success[20]};
  }
  &.success-strong {
    color: ${colors.white[100]};
    background-color: ${colors.success[100]};
  }
  &.warning-light {
    color: ${colors.warning[100]};
    background-color: ${colors.warning[20]};
  }
  &.warning-strong {
    color: ${colors.white[100]};
    background-color: ${colors.warning[100]};
  }
  &.primary-light {
    color: ${colors.primary[100]};
    background-color: ${colors.primary[20]};
  }
  &.primary-strong {
    color: ${colors.white[100]};
    background-color: ${colors.primary[100]};
  }
  &.black-light {
    color: ${colors.black[100]};
    background-color: ${colors.black[20]};
  }
  &.black-strong {
    color: ${colors.white[100]};
    background-color: ${colors.black[100]};
  }
`;

export const P = styled.p`
  font-size: ${fontSizes.XXS};
  text-align: center;
  margin: 0;
  padding: 0;
`;
