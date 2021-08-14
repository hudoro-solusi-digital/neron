import React from "react";
import { ILabelValueProps } from "../../../utils";
import Grid from "../Grid";
import { Label, Value } from "./styles";

function LabelValue({ label, value, valueColor }: ILabelValueProps) {
  return (
    <Grid container flexDirection="column" gap={10}>
      <Label variant="mute">{label}</Label>
      <Value variant="p" valueColor={valueColor}>
        {value}
      </Value>
    </Grid>
  );
}

export default LabelValue;
