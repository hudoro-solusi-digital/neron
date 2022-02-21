import React, { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { IFileInputProps } from "../../../utils";
import Button from "../Button";
import Grid from "../Grid";
import Icon from "../Icon";
import { Input } from "./styles";

function FileInput({
  onChange,
  onClear,
  name,
  accept,
  multiple,
  maxFiles,
}: IFileInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [checkFiles, setCheckFiles] = useState<FileList>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const files = e.target.files;
    if (files && files[0]) {
      if (maxFiles && files.length > maxFiles) {
        throw new Error("Selected files exceeds limit");
      }
      setCheckFiles(files);
      if (multiple) {
        return onChange(files);
      }
      return onChange(files[0]);
    }
  };

  const handleClearFiles = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (onClear) {
      onClear();
    }
    setCheckFiles(undefined);
    onChange(null);
    inputRef.current!.value = "";
  };

  return (
    <>
      <Input
        accept={accept}
        ref={inputRef}
        type="file"
        name={name}
        onChange={handleChange}
        multiple={multiple}
      />
      <Button
        type="button"
        variant="primary"
        onClick={() => inputRef.current?.click()}
      >
        <Grid container gap={10} alignItems="center">
          <Icon
            iconName={
              checkFiles && checkFiles.length > 0 ? "IcClose" : "IcUpload"
            }
            color="white"
            onClick={
              checkFiles && checkFiles?.length > 0
                ? handleClearFiles
                : undefined
            }
          />
          {checkFiles && checkFiles?.length > 0
            ? `${checkFiles.length} ${
                checkFiles.length > 1 ? "Files" : "File"
              } selected`
            : "Select file"}
        </Grid>
      </Button>
    </>
  );
}

export default FileInput;
