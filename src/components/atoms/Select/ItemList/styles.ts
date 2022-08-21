import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0 5px 25px rgba(83, 89, 238, 0.1);
  margin-top: 10px;
  max-height: 132px;
  overflow-y: scroll;
  width: 100%;
  scrollbar-width: 0;
  max-width: 100%;
  position: absolute;
  background-color: white;
  z-index: 999;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
