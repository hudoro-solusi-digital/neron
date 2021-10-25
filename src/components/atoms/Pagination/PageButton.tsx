import React from "react";
import Text from "../Text";
import { ButtonContainer } from "./styles";

interface IProps {
  page: number;
  isActive?: boolean;
  onClick: (page: number) => void;
}

function PageButton({ page, isActive, onClick }: IProps) {
  const handlePageButtonClick = () => {
    onClick(page);
  };
  return (
    <ButtonContainer
      onClick={handlePageButtonClick}
      className={isActive ? "active" : ""}
    >
      <Text variant="p">{page}</Text>
    </ButtonContainer>
  );
}

export default PageButton;
