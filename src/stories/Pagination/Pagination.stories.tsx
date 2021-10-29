import { Meta, Story } from "@storybook/react";
import { Pagination } from "../../components";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const Template: Story<any> = (args) => (
  <Pagination
    {...args}
    previousButtonEvent={(page) => console.log("On page: ", page)}
    nextButtonEvent={(page) => console.log("On page: ", page)}
    pageButtonEvent={(page) => console.log("On page: ", page)}
  />
);

export const PaginationComponent = Template.bind({});

PaginationComponent.args = {
  numberOfPages: 15,
};
