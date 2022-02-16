// @mui material components
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";

// NERD Q's React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import Stars from "./Stars";

function Ratings() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Ratings
        </MDTypography>
        <MDTypography variant="h6" fontWeight="medium">
          How do you feel about our project?
        </MDTypography>
        <MDBox p={2} />
        <Stars />
        <Divider />
      </MDBox>
    </Card>
  );
}

export default Ratings;
