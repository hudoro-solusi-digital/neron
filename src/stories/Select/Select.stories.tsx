import { Meta, Story } from "@storybook/react";
import { Select } from "../../components";
import { ISelectProps, ISelectItem } from "../../utils";

export default {
  title: "Components/Select",
} as Meta;

const items: ISelectItem[] = [
  {
    id: 1,
    value: "Bentley",
    label: "Bentley",
  },
  {
    id: 2,
    value: "Mercedes Benz",
    label: "Mercedes Benz",
  },
  {
    id: 3,
    value: "Mini Cooper",
    label: "Mini Cooper",
  },
  {
    id: 4,
    value: "Subaru",
    label: "Subaru",
  },
  {
    id: 5,
    value: "Nissan",
    label: "Nissan",
  },
  {
    id: 6,
    value: "Porsche",
    label: "Porsche",
  },
  {
    id: 7,
    value: "BMW",
    label: "BMW",
  },
  {
    id: 8,
    value: "Volkswagen",
    label: "Volkswagen",
  },
  {
    id: 9,
    value: "Bugatti",
    label: "Bugatti",
  },
  {
    id: 10,
    value: "Toyota",
    label: "Toyota",
  },
  {
    id: 11,
    value: "Honda",
    label: "Honda",
  },
  {
    id: 12,
    value: "Ferrari",
    label: "Ferrari",
  },
  {
    id: 13,
    value: "Mitsubishi",
    label: "Mitsubishi",
  },
  {
    id: 14,
    value: "Lotus",
    label: "Lotus",
  },
  {
    id: 15,
    value: "Lycan",
    label: "Lycan",
  },
  {
    id: 16,
    value: "Lamborghini",
    label: "Lamborghini",
  },
  {
    id: 17,
    value: "Rolls Royce",
    label: "Rolls Royce",
  },
  {
    id: 18,
    value: "McLaren",
    label: "McLaren",
  },
  {
    id: 19,
    value: "Ford",
    label: "Ford",
  },
  {
    id: 20,
    value: "Alpine",
    label: "Alpine",
  },
  {
    id: 21,
    value: "Mazda",
    label: "Mazda",
  },
  {
    id: 22,
    value: "Audi",
    label: "Audi",
  },
  {
    id: 23,
    value: "Jaguar",
    label: "Jaguar",
  },
  {
    id: 24,
    value: "Volvo",
    label: "Volvo",
  },
  {
    id: 25,
    value: "Maserati",
    label: "Maserati",
  },
];

const Template: Story<ISelectProps> = (args) => (
  <Select items={items} onChange={(item) => console.log(item)} {...args} />
);

export const SearchableSelect = Template.bind({});

SearchableSelect.args = {
  multiple: false,
  disabled: false,
  placeholder: "",
  items,
};
