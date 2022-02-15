/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";

// @mui material components
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
// import Trivia from "../../../Trivia";

const player1 = "placeholder";

// const SERVER = process.env.REACT_APP_SERVER;

// Images
// import LogoAsana from "assets/images/small-logos/logo-asana.svg";
// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const [score, setScore] = useState(0);
  useEffect(() => {
    // CRUD: Get Scores //
    const getScore = async () => {
      // if (this.props.auth0.isAuthenticated) {
      //   const res = await this.props.auth0.getIdTokenClaims();
      //   const jwt = res.__raw;
      //   console.log("jwt: ", jwt);

      // let apiUrl = `${SERVER}/scores`;
      // console.log(apiUrl);
      // const config = {
      //   // headers: { "Authorization": `Bearer ${jwt}` },
      //   method: "get",
      //   baseURL: "http://localhost:3001",
      //   url: "/scores",
      // };
      // console.log(config);
      const response = await axios.get("http://localhost:3001/scores");
      setScore(response.data);
      console.log(response.data[0].score);
      // }
    };
    const somevariable = getScore();
    console.log(somevariable);
    console.log(getScore());
    console.log("Your Scores Have Been Received!");
  }, []);
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "project", accessor: "project", width: "30%", align: "left" },
      { Header: "HighScore", accessor: "HighScore", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: <Project image={player1} name="Player 1" />,
        HighScore: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {score[0].score}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Player 2" />,
        HighScore: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {score[1].score}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Player 3" />,
        HighScore: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {score[2].score}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Player 4" />,
        HighScore: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {score[3].score}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Player 5" />,
        HighScore: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {score[4].score}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        completion: <Progress color="error" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project name="Player 6" />,
        HighScore: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            {score[5].score}
          </MDTypography>
        ),
        status: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            done
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
