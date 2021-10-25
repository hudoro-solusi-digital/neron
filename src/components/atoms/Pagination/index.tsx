import React, { useEffect, useState } from "react";
import { colors, IPaginationProps } from "../../../utils";
import Grid from "../Grid";
import Icon from "../Icon";
import PageButton from "./PageButton";
import { ButtonContainer } from "./styles";

function Pagination({
  numberOfPages,
  currentPage,
  nextButtonEvent,
  previousButtonEvent,
  pageButtonEvent,
}: IPaginationProps) {
  const [currentPageState, setCurrentPageState] = useState<any>(
    currentPage || 1,
  );
  const [arrayOfCurrentPages, setArrayOfCurrentPages] = useState<any[]>([]);

  const arrayOfPages: number[] = [];

  for (let i = 1; i <= numberOfPages; i++) {
    arrayOfPages.push(i);
  }

  const handlePreviousButtonEvent = () => {
    setCurrentPageState((prev: number) => (prev === 1 ? prev : prev - 1));
    if (currentPageState <= 1) return;
    previousButtonEvent();
  };

  const handleNextButtonEvent = () => {
    setCurrentPageState((prev: number) =>
      prev >= numberOfPages ? prev : prev + 1,
    );
    if (currentPageState >= numberOfPages) return;
    nextButtonEvent();
  };

  const handlePageButtonEvent = (page: number) => {
    setCurrentPageState(page);
    pageButtonEvent();
  };

  useEffect(() => {
    let tempArrayOfPages: any[] = [...arrayOfCurrentPages];
    const leftDots = "... ";
    const middleDots = "...";
    const rightDots = " ...";

    // TODO Refactor this
    if (arrayOfPages.length < 6) {
      tempArrayOfPages = arrayOfPages;
    } else if (currentPageState >= 1 && currentPageState <= 3) {
      tempArrayOfPages = [1, 2, 3, 4, middleDots, arrayOfPages.length];
    } else if (currentPageState === 4) {
      const sliced = arrayOfPages.slice(0, 5);
      tempArrayOfPages = [...sliced, middleDots, arrayOfPages.length];
    } else if (
      currentPageState > 4 &&
      currentPageState < arrayOfPages.length - 2
    ) {
      const sliced1 = arrayOfPages.slice(
        currentPageState - 2,
        currentPageState,
      );
      const sliced2 = arrayOfPages.slice(
        currentPageState,
        currentPageState + 1,
      );
      tempArrayOfPages = [
        1,
        leftDots,
        ...sliced1,
        ...sliced2,
        rightDots,
        arrayOfPages.length,
      ];
    } else if (currentPageState > arrayOfPages.length - 3) {
      const sliced = arrayOfPages.slice(arrayOfPages.length - 4); //
      tempArrayOfPages = [1, leftDots, ...sliced];
    } else if (currentPageState === middleDots) {
      setCurrentPageState(
        arrayOfCurrentPages[arrayOfCurrentPages.length - 3] + 1,
      );
    } else if (currentPageState === rightDots) {
      setCurrentPageState(arrayOfCurrentPages[3] + 2);
    } else if (currentPageState === leftDots) {
      setCurrentPageState(arrayOfCurrentPages[3] - 2);
    }
    setArrayOfCurrentPages(tempArrayOfPages);
  }, [currentPageState]);
  return (
    <Grid container gap={5}>
      <ButtonContainer
        className={currentPageState <= 1 ? "disabled" : ""}
        onClick={handlePreviousButtonEvent}
      >
        <Icon iconName="IcArrowLeft" color={colors.black[80]} />
      </ButtonContainer>
      {arrayOfCurrentPages.map((page: any, i: React.Key) => (
        <PageButton
          onClick={handlePageButtonEvent}
          isActive={currentPageState === page}
          page={page}
          key={i}
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
