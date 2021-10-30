import React from "react";
import { ISelectItem } from "../../../../utils";
import Multiple from "./Multiple";
import NonMultiple from "./NonMultiple";
import { Wrapper } from "./styles";

interface IProps {
  onSelect: (item: ISelectItem) => void;
  items: ISelectItem[];
  value: string;
  selectedItem?: ISelectItem | ISelectItem[];
  multiple?: boolean;
}

export default function ItemList({
  items,
  value,
  onSelect,
  selectedItem,
  multiple,
}: IProps) {
  return (
    <Wrapper>
      {multiple ? (
        <Multiple
          items={items}
          onSelect={onSelect}
          selectedItem={selectedItem as ISelectItem[]}
          value={value}
        />
      ) : (
        <NonMultiple
          items={items}
          value={value}
          onSelect={onSelect}
          selectedItem={selectedItem as ISelectItem}
        />
      )}
    </Wrapper>
  );
}
