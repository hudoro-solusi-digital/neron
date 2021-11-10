import styled from "styled-components";
import { colors } from "../../../utils";

export const ButtonContainer = styled.div`
  padding: 5px;
  border: 1px solid ${colors.black[20]};
  border-radius: 5px;
  min-width: 18px;
  min-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  &.disabled {
    color: ${colors.black[40]};
    svg {
      fill: ${colors.black[40]};
    }
  }
  &.active {
    border-color: ${colors.primary[100]};
  }
`;
