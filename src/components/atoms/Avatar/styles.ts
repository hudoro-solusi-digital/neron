import styled from "styled-components";
import { SizeType } from "../../../utils";

interface IProps {
  size?: SizeType;
}

const sizeChart = {
  xs: "24px",
  s: "32px",
  m: "40px",
  l: "48px",
  xl: "56px",
};

export const Image = styled.img<IProps>`
  width: ${(props) => (props.size ? sizeChart[props.size] : sizeChart.m)};
  height: ${(props) => (props.size ? sizeChart[props.size] : sizeChart.m)};
  border-radius: 50%;
  object-fit: cover;
`;
