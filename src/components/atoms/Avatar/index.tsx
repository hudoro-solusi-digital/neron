import React, { SyntheticEvent } from "react";
import { IAvatarProps } from "../../../utils";
import { Image } from "./styles";

function Avatar({ size, src, ...rest }: IAvatarProps) {
  const defaultImage =
    "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=";
  const onError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = defaultImage;
  };
  return (
    <Image {...rest} onError={onError} src={src || defaultImage} size={size} />
  );
}

export default Avatar;
