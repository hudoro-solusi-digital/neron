import styled from "styled-components";
import { Meta, Story } from "@storybook/react";
import { Radio } from "../../components";
import { IRadioProps } from "../../utils";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export default {
  title: "Components/Radio",
} as Meta;

const Normal: Story<IRadioProps> = (args) => {
  return (
    <Container>
      <Radio {...args} name="gender" />
      <Radio {...args} name="gender" />
    </Container>
  );
};

const Labeled: Story<IRadioProps> = (args) => {
  return (
    <Container>
      <Radio {...args} name="gender" label="Male" />
      <Radio {...args} name="gender" label="Female" />
    </Container>
  );
};

export const NormalRadio = Normal.bind({});
export const LabeledRadio = Labeled.bind({});

NormalRadio.args = {
  disabled: false,
};

LabeledRadio.args = {
  disabled: false,
};
