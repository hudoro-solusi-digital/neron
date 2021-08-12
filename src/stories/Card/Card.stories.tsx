import { Meta, Story } from "@storybook/react";
import { Card } from "../../components";
import { ICardProps } from "../../utils";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: Story<ICardProps> = (args) => <Card {...args} />;

export const CardBasic = Template.bind({});
