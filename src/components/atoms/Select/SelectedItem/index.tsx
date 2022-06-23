import React, { MouseEvent, ReactNode } from "react";
import Text from "../../Text";
import Icon from "../../Icon";
import { colors, ISelectItem } from "../../../../utils";
import { Wrapper } from "./styles";
import Grid from "../../Grid";

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
    <Wrapper container gap={10} alignItems="center">
      <Text variant="mute" style={{ color: colors.black[80] }}>
        {children}
      </Text>
      <Grid
        container
        onClick={(e) => handleDelete(e)}
        style={{
          cursor: "pointer",
        }}
      >
        <Icon iconName="IcClose" size={12} color={colors.black[100]} />
      </Grid>
    </Wrapper>
  );
}
