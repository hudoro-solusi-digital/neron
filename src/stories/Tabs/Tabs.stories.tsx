import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { Tabs } from "../../components";
import { ITabProps, ITabsProps } from "../../utils";

const tabs: ITabProps[] = [
  {
    id: 1,
    title: "Products",
  },
  {
    id: 2,
    title: "Services",
  },
];

export default {
  title: "Components/Tabs",
  component: Tabs,
} as Meta;

const Template: Story<ITabsProps> = (args) => {
  const [tab, setTab] = useState<ITabProps>(tabs[0]);
  return <Tabs {...args} tabs={tabs} tab={tab} setTab={setTab} />;
};

export const TabsComponent = Template.bind({});

TabsComponent.args = {
  tabs,
};
