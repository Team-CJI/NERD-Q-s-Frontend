import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MDButton from "components/MDButton";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <MDButton onClick={loginWithRedirect} variant="gradient" color="info" fullWidth>
        Login
      </MDButton>
    )
  );
}

export default LoginButton;
