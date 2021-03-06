import styled from "styled-components";
import { fontFamilies, colors } from "../../../../../utils";

interface IProps {
  selected?: boolean;
}

export const Wrapper = styled.div<IProps>`
  padding: 10px;
  background-color: ${(props) => (props.selected ? colors.primary[20] : "")};
  transition: 0.3s;
  cursor: pointer;
  font-family: ${fontFamilies.openSans};
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: ${(props) => !props.selected && colors.black[20]};
  }
`;

export const EllipsisContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
