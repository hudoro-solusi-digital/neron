import React, { ReactNode } from "react";
import Text from "../../../Text";
import { ISelectItem } from "../../../../../utils";
import { EllipsisContainer, Wrapper } from "./styles";
import Avatar from "../../../Avatar";

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
      {item.image && <Avatar size="xs" src={item.image} />}
      <EllipsisContainer>
        <Text variant="p">{children}</Text>
      </EllipsisContainer>
    </Wrapper>
  );
}
