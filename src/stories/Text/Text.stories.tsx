import { Meta, Story } from "@storybook/react";
import { Text } from "../../components";
import { ITextProps } from "../../utils";

export default {
  title: "Components/Text",
} as Meta;

const Template: Story<ITextProps> = (args) => <Text {...args} />;

const H1 = Template.bind({});
const H2 = Template.bind({});
const H3 = Template.bind({});
const H4 = Template.bind({});
const Paragraph = Template.bind({});
const Mute = Template.bind({});

export const TextComponent = (args: ITextProps) => {
  return (
    <>
      <H1 {...args} variant="h1">
        The quick brown fox jumps over the lazy dog
      </H1>
      <H2 {...args} variant="h2">
        The quick brown fox jumps over the lazy dog
      </H2>
      <H3 {...args} variant="h3">
        The quick brown fox jumps over the lazy dog
      </H3>
      <H4 {...args} variant="h4">
        The quick brown fox jumps over the lazy dog
      </H4>
      <Paragraph {...args} variant="p">
        The quick brown fox jumps over the lazy dog
      </Paragraph>
      <Mute {...args} variant="mute">
        The quick brown fox jumps over the lazy dog
      </Mute>
    </>
  );
};
