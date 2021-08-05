import React from "react";
import { ILabelValueProps } from "../../../utils";
import Grid from "../Grid";
import { Label, Value } from "./styles";

function LabelValue({ label, value }: ILabelValueProps) {
  return (
    <Grid container flexDirection="column">
      <Label variant="mute">{label}</Label>
      <Value variant="p">{value}</Value>
    </Grid>
  );
}

export default LabelValue;
