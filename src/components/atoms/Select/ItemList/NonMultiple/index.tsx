import React from "react";
import Text from "../../../Text";
import { ISelectItem } from "../../../../../utils";
import SelectItem from "../SelectItem";

interface IProps {
  onSelect: (item: ISelectItem) => void;
  items: ISelectItem[];
  value: string;
  selectedItem: ISelectItem;
}

export default function NonMultiple({
  items,
  value,
  onSelect,
  selectedItem,
}: IProps) {
  const filteredList = items.filter((item) =>
    item.label.toString().toLowerCase().startsWith(value.toLowerCase()),
  );
  return (
    <>
      {value && filteredList.length <= 0 ? (
        <Text variant="p" style={{ padding: 10 }}>
          No options
        </Text>
      ) : filteredList.length > 0 ? (
        filteredList.map((item) => (
          <SelectItem
            selected={
              selectedItem?.id === item.id && selectedItem.value === item.value
            }
            item={item}
            onSelect={onSelect}
            key={item.id}
          >
            {item.label}
          </SelectItem>
        ))
      ) : (
        items.map((item) => (
          <SelectItem
            item={item}
            selected={
              selectedItem?.id === item.id && selectedItem.value === item.value
            }
            onSelect={onSelect}
            key={item.id}
          >
            {item.label}
          </SelectItem>
        ))
      )}
    </>
  );
}
