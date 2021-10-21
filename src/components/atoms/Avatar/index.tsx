import React, { SyntheticEvent } from "react";
import { IAvatarProps } from "../../../utils";
import { Image } from "./styles";
import User from "./user.png";

function Avatar({ size, src, ...rest }: IAvatarProps) {
  const onError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = User;
  };
  return <Image {...rest} onError={onError} src={src || User} size={size} />;
}

export default Avatar;
