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
  const leftDots = "... ";
  const middleDots = "...";
  const rightDots = " ...";

  const arrayOfPages: number[] = [];

  for (let i = 1; i <= numberOfPages; i++) {
    arrayOfPages.push(i);
  }

  const handlePreviousButtonEvent = () => {
    const page =
      currentPageState === 1 ? currentPageState : currentPageState - 1;
    setCurrentPageState(page);
    if (currentPageState <= 1) return;
    if (previousButtonEvent) {
      previousButtonEvent(page);
    }
  };

  const handleNextButtonEvent = () => {
    const page =
      currentPageState >= numberOfPages
        ? currentPageState
        : currentPageState + 1;
    setCurrentPageState(page);
    if (currentPageState >= numberOfPages) return;
    if (nextButtonEvent) {
      nextButtonEvent(page);
    }
  };

  const handlePageButtonEvent = (page: any) => {
    setCurrentPageState(page);
    if (page === middleDots || page === leftDots || page === rightDots) {
      return;
    }
    if (pageButtonEvent) {
      pageButtonEvent(page);
    }
  };

  useEffect(() => {
    let tempArrayOfPages: any[] = [...arrayOfCurrentPages];

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
      let curr = arrayOfCurrentPages[arrayOfCurrentPages.length - 3] + 1;
      setCurrentPageState(curr);
      handlePageButtonEvent(curr);
    } else if (currentPageState === rightDots) {
      let curr = arrayOfCurrentPages[3] + 2;
      setCurrentPageState(curr);
      handlePageButtonEvent(curr);
    } else if (currentPageState === leftDots) {
      let curr = arrayOfCurrentPages[3] - 2;
      setCurrentPageState(curr);
      handlePageButtonEvent(curr);
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
