import { Meta } from "@storybook/react";
import { Grid } from "../../components";
import { colors, fontFamilies } from "../../utils";

export default {
  title: "Components/Layout",
  component: Grid,
} as Meta;

export const GridLayout = () => {
  return (
    <Grid container={true} flexDirection="row">
      <Grid
        style={{
          padding: "10px",
          backgroundColor: colors.primary[40],
          border: "1px solid black",
          fontFamily: fontFamilies.poppins,
        }}
        size={6}
        mdSize={4}
        smSize={12}
      >
        Col 1
      </Grid>
      <Grid
        style={{
          padding: "10px",
          backgroundColor: colors.primary[40],
          border: "1px solid black",
          fontFamily: fontFamilies.poppins,
        }}
        size={6}
        mdSize={8}
        smSize={12}
      >
        Col 2
      </Grid>
    </Grid>
  );
};
