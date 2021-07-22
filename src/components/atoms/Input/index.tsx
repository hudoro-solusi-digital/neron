import React, { useState } from "react";
import { IInputProps } from "interfaces";

import { PasswordInput, PrimaryInput, StyledInput, Label } from "./styles";
// import IcEye from "./IcEye";
import IcEyeSlash from "./IcEyeSlash";
import IcEye from "./IcEye";

function Input({ theme, variant, error, children, ...rest }: IInputProps) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [ubahmata, setUbahmata] = useState({
    type: "text",
  });

  const handleEye = () => {
    // setUbahmata(type : "text")
  };
  // const handleEye = () => {
  //   if (setEye) {
  //     eye = "text"
  //   } else {
  //   }
  // };
  switch (variant) {
    case "basic":
      return (
        <>
          <StyledInput {...rest} error={error} type="input"></StyledInput>
        </>
      );
    case "labeled":
      return (
        <>
          <Label>Email</Label>
          <br />
          <PrimaryInput {...rest} error={error}></PrimaryInput>
        </>
      );
    case "password":
      return (
        <>
          <Label>Password</Label>
          <br />
          <div>
            <PasswordInput
              {...rest}
              type="password"
              error={error}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log("ini change klik");
              }}
            />
            {/* <IcEye width="20px"  /> */}
            <IcEyeSlash
              width="20px"
              onClick={handleEye}
              // onClick={() => {

              // if (show === false) {
              //   PasswordInput({ type = "text" });
              // } else {
              //   PasswordInput({ type = "password" });
              // }
              // }}
            />
            ;
          </div>
        </>
      );
  }
}

export default Input;
