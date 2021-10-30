import { Meta, Story } from "@storybook/react";
import { FileInput as Input } from "../../components";
import { IFileInputProps } from "../../utils";

export default {
  title: "Components/FileInput",
} as Meta;

const Template: Story<IFileInputProps> = (args) => <Input {...args} />;

export const FileInput = Template.bind({});

FileInput.args = {
  accept: "image/jpeg, image/png",
  multiple: false,
  onChange: (file: File | FileList) => console.log(file),
  name: "images",
  maxFiles: 10,
};
