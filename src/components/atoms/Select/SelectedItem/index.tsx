import React, { MouseEvent, ReactNode } from "react";
import { Icon, Text } from "../..";
import { colors, ISelectItem } from "../../../..";
import { Wrapper } from "./styles";

interface IProps {
  children: ReactNode;
  onDelete: (item: ISelectItem) => void;
  item: ISelectItem;
}

export default function SelectedItem({ children, item, onDelete }: IProps) {
  const handleDelete = (e: MouseEvent) => {
    e.stopPropagation();
    onDelete(item);
  };
  return (
    <Wrapper>
      <Text variant="mute" style={{ color: colors.black[80] }}>
        {children}
      </Text>
      <Icon
        onClick={(e) => handleDelete(e)}
        iconName="IcClose"
        size={12}
        color={colors.black[100]}
      />
    </Wrapper>
  );
}
