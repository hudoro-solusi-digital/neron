// import React from "react";
import styled, { css } from "styled-components";
import { GridSizeType, IGridProps } from "../../../utils";

const totalGrid = 12;
const multiplier = 100;

const breakpoints = {
  medium: 992,
  small: 576,
};

const calculateFlexBasis = (size: GridSizeType) => {
  return (size / totalGrid) * multiplier;
};

const Grid = styled.div<IGridProps>`
  ${(props) =>
    props.container &&
    css`
      display: flex;
      flex-wrap: wrap;
      align-items: ${props.alignItems || "initial"};
      justify-content: ${props.justifyContent || "initial"};
      flex-direction: ${props.flexDirection || "initial"};
      gap: ${props.gap + "px" || "initial"};
    `}
  ${(props) =>
    !props.container &&
    css`
      box-sizing: border-box;
      flex-basis: ${props.size ? calculateFlexBasis(props.size) : 0}%;
      flex-grow: ${props.size ? 0 : 1};
      @media (max-width: ${breakpoints.medium}px) {
        flex-basis: ${props.mdSize ? calculateFlexBasis(props.mdSize) : 0}%;
        flex-grow: ${props.mdSize ? 0 : 1};
      }
      @media (max-width: ${breakpoints.small}px) {
        flex-basis: ${props.smSize ? calculateFlexBasis(props.smSize) : 0}%;
        flex-grow: ${props.smSize ? 0 : 1};
      }
    `};
`;

export default Grid;
