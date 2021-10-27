import React, { ReactNode } from "react";
import { Text } from "../../..";
import { ISelectItem } from "../../../../..";
import { EllipsisContainer, Wrapper } from "./styles";

interface IProps {
  selected?: boolean;
  item: ISelectItem;
  onSelect: (item: ISelectItem) => void;
  children: ReactNode;
}

export default function SelectItem({
  selected,
  onSelect,
  item,
  children,
}: IProps) {
  const handleClick = () => {
    onSelect(item);
  };
  return (
    <Wrapper title={item.label} onClick={handleClick} selected={selected}>
      <EllipsisContainer>
        <Text variant="p">{children}</Text>
      </EllipsisContainer>
    </Wrapper>
  );
}
