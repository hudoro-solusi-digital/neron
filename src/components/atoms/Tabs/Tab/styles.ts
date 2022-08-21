import styled from "styled-components";
import { colors } from "../../../../utils";

interface IProps {
  active?: boolean;
}

export const Wrapper = styled.div<IProps>`
  cursor: pointer;
  border-bottom: ${({ active }) =>
    active && `2px solid ${colors.primary[100]}`};
  padding: 0 20px 20px 20px;
  p {
    color: ${({ active }) => (active ? colors.primary[100] : "grey")};
  }
`;
