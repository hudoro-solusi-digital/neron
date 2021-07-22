import React, { SyntheticEvent } from "react";
import { IAvatarProps } from "../../../utils";
import { Image } from "./styles";

function Avatar({ size, src, ...rest }: IAvatarProps) {
  const defaultImage =
    "https://www.insoft.co.id/wp-content/uploads/2014/05/default-user-image.png";
  const onError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = defaultImage;
  };
  return (
    <Image {...rest} onError={onError} src={src ?? defaultImage} size={size} />
  );
}

export default Avatar;
