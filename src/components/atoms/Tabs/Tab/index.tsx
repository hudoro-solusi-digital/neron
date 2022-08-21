import React from "react";
import { ITabProps } from "../../../../utils";
import Text from "../../Text";
import { Wrapper } from "./styles";

interface IProps {
  tab: ITabProps;
  onClick?: (value: ITabProps) => void;
  active?: boolean;
}

export default function Tab({ tab, active, onClick }: IProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(tab);
    }
  };
  return (
    <Wrapper active={active} onClick={handleClick}>
      <Text variant="p">{tab.title}</Text>
    </Wrapper>
  );
}
