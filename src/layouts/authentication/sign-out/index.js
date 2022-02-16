// import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";

// NERDQ React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDInput from "components/MDInput";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import LoginButton from "LoginButton";
import LogoutButton from "../../../LogoutButton";

function Basic() {
  const { isAuthenticated } = useAuth0();

  return (
    <BasicLayout>
      {" "}
      image={bgImage}
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign out
          </MDTypography>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
