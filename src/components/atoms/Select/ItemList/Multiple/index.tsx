import React from "react";
import Text from "../../../Text";
import { ISelectItem } from "../../../../../utils";
import SelectItem from "../SelectItem";

interface IProps {
  onSelect: (item: ISelectItem) => void;
  items: ISelectItem[];
  selectedItem: ISelectItem[];
  value: string;
}

export default function Multiple({
  items,
  onSelect,
  value,
  selectedItem,
}: IProps) {
  let filteredList = items.filter(
    (item) =>
      !selectedItem?.find(
        (selected) => selected.id === item.id && selected.value === item.value,
      ),
  );

  if (value) {
    filteredList = filteredList.filter((item) =>
      item.value.toString().toLowerCase().startsWith(value.toLowerCase()),
    );
  }

  return (
    <>
      {filteredList.length > 0 ? (
        filteredList.map((item) => (
          <SelectItem item={item} onSelect={onSelect} key={item.id}>
            {item.label}
          </SelectItem>
        ))
      ) : (
        <Text variant="p" style={{ padding: 10 }}>
          No Options
        </Text>
      )}
    </>
  );
}
