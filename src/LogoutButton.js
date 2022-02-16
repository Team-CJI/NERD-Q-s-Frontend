import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import MDButton from "components/MDButton";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return <MDButton onClick={() => logout({ returnTo: window.location.origin })}>Log Out</MDButton>;
};
export default LogoutButton;
