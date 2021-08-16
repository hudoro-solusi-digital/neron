import React, { useState } from "react";
import { colors, IPaginationProps } from "../../../utils";
import Grid from "../Grid";
import Icon from "../Icon";
import PageButton from "./PageButton";
import { ButtonContainer } from "./styles";

function Pagination({
  numberOfPages,
  currentPage,
  pagesLimit,
  nextButtonEvent,
  previousButtonEvent,
  pageButtonEvent,
}: IPaginationProps) {
  const [currentPageState, setCurrentPageState] = useState<number>(
    currentPage || 1
  );

  const handlePreviousButtonEvent = () => {
    if (currentPageState <= 1) return;
    setCurrentPageState((prev) => prev - 1);
    previousButtonEvent();
    console.log(currentPageState);
  };

  const handleNextButtonEvent = () => {
    if (currentPageState >= numberOfPages) return;
    setCurrentPageState((prev) => prev + 1);
    nextButtonEvent();
    console.log(currentPageState);
  };

  const handlePageButtonEvent = (page: number) => {
    setCurrentPageState(page);
    pageButtonEvent();
  };
  return (
    <Grid container gap={5}>
      <ButtonContainer
        className={currentPageState <= 1 ? "disabled" : ""}
        onClick={handlePreviousButtonEvent}
      >
        <Icon iconName="IcArrowLeft" color={colors.black[80]} />
      </ButtonContainer>
      {[...Array(numberOfPages)].map((_val, i) => (
        <PageButton
          onClick={handlePageButtonEvent}
          isActive={currentPageState === i + 1}
          page={i + 1}
        />
      ))}
      <ButtonContainer
        className={currentPageState >= numberOfPages ? "disabled" : ""}
        onClick={handleNextButtonEvent}
      >
        <Icon iconName="IcArrowRight" color={colors.black[80]} />
      </ButtonContainer>
    </Grid>
  );
}

export default Pagination;
