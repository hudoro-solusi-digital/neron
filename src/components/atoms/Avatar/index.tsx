import React from "react";
import { IAvatarProps } from "../../../utils";
import { Image } from "./styles";

function Avatar({ size, ...rest }: IAvatarProps) {
  return <Image {...rest} size={size} />;
}

export default Avatar;
