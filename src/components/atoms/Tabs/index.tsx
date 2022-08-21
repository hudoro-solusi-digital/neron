import React, { Dispatch, SetStateAction } from "react";
import { ITabProps } from "../../../utils";
import { Wrapper } from "./styles";
import Tab from "./Tab";

interface IProps {
  tabs: ITabProps[];
  setTab: Dispatch<SetStateAction<ITabProps>>;
  tab: ITabProps;
  onClick?: (tab: ITabProps) => void;
}

export default function Tabs({ tabs, setTab, tab, onClick }: IProps) {
  const onTabClick = (value: ITabProps) => {
    if (setTab) {
      setTab(value);
    }
    if (onClick) {
      onClick(value);
    }
  };
  return (
    <Wrapper>
      {tabs.map((item) => (
        <Tab
          key={item.id}
          onClick={onTabClick}
          active={tab.id === item.id}
          tab={item}
        />
      ))}
    </Wrapper>
  );
}
