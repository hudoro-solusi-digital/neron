import { Meta, Story } from "@storybook/react";
import { Pagination } from "../../components";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const Template: Story<any> = (args) => (
  <Pagination
    {...args}
    previousButtonEvent={() => console.log("Previous")}
    nextButtonEvent={() => console.log("Next")}
    pageButtonEvent={() => console.log("Page button")}
  />
);

export const PaginationComponent = Template.bind({});

PaginationComponent.args = {
  numberOfPages: 15,
};
