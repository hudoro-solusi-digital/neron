import React, { ChangeEvent, useEffect, useState } from "react";
import Grid from "../Grid";
import Icon from "../Icon";
import { colors, ISelectItem, ISelectProps } from "../../../utils";
import ItemList from "./ItemList";
import SelectedItem from "./SelectedItem";
import { Input, inputContainer, Wrapper } from "./styles";

export default function Select({
  items,
  onChange,
  multiple,
  disabled,
  placeholder,
  defaultValue,
}: ISelectProps) {
  const [selectedItem, setSelectedItem] = useState<ISelectItem>();
  const [selectedMultipleItems, setSelectedMultipleItems] = useState<
    ISelectItem[]
  >([]);
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickOutside = (e: MouseEvent) => {
    const selectWrapper = document.querySelector("#select-wrapper");
    if (!selectWrapper?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!defaultValue?.length && !multiple) {
      setValue((defaultValue as ISelectItem)?.label);
      setSelectedItem(defaultValue as ISelectItem);
    } else {
      setSelectedMultipleItems(defaultValue as ISelectItem[]);
    }
  }, []);

  const handleFocus = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isOpen) {
      setIsOpen(true);
    }
    setValue(e.target.value);
  };

  const handleSelect = (item: ISelectItem) => {
    if (onChange) {
      onChange(item);
    }
    setSelectedItem(item);
    setValue((item as ISelectItem).label);
    setIsOpen(false);
  };

  const handleSelectMultiple = (item: ISelectItem) => {
    const nextState = selectedMultipleItems
      ? [...selectedMultipleItems, item]
      : [item];
    setSelectedMultipleItems(nextState);
    if (onChange) {
      onChange(nextState);
    }
    setValue("");
  };

  const clearMultipleSelectItems = () => {
    setSelectedMultipleItems([]);
    if (onChange) {
      onChange(null);
    }
  };

  const onDelete = (item: ISelectItem) => {
    const filtered = selectedMultipleItems?.filter(
      (selected) => selected.id !== item.id && selected.value !== item.value,
    );
    setSelectedMultipleItems(filtered);
    if (onChange) {
      onChange(filtered);
    }
  };

  return (
    <Wrapper id="select-wrapper">
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        gap={10}
        style={{
          backgroundColor: disabled ? colors.black[20] : "white",
          border: `1px solid ${
            isOpen ? colors.primary[100] : colors.black[20]
          }`,
          ...inputContainer,
        }}
      >
        <Grid container gap={10} style={{ width: "100%" }}>
          {multiple &&
            selectedMultipleItems?.map((item) => (
              <SelectedItem item={item} onDelete={onDelete} key={item.id}>
                {item.label}
              </SelectedItem>
            ))}
          <Grid>
            <Input
              onClick={handleFocus}
              value={value}
              placeholder={
                !value && selectedMultipleItems?.length <= 0
                  ? placeholder || "Type something to search..."
                  : ""
              }
              disabled={disabled}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container gap={10} style={{ flexWrap: "nowrap" }}>
          {multiple &&
            selectedMultipleItems &&
            selectedMultipleItems?.length > 0 && (
              <Grid
                container
                onClick={clearMultipleSelectItems}
                style={{
                  cursor: "pointer",
                }}
              >
                <Icon iconName="IcClose" color={colors.primary[100]} />
              </Grid>
            )}
          <Icon
            color={isOpen ? colors.primary[100] : colors.black[40]}
            iconName="IcArrowDown"
          />
        </Grid>
      </Grid>
      {isOpen && !disabled && (
        <ItemList
          onSelect={multiple ? handleSelectMultiple : handleSelect}
          selectedItem={
            multiple
              ? (selectedMultipleItems as ISelectItem[])
              : (selectedItem as ISelectItem)
          }
          items={items}
          value={value}
          multiple={multiple}
        />
      )}
    </Wrapper>
  );
}
