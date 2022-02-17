import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import axios from "axios";

const handleVideoGamesAPI = async () => {
  const response = await axios.get(`https://nerd-q-s-backend.herokuapp.com`);
  const triviaVideoGames = response.data;
  this.setState({ triviaVideoGames });
};

const handleAutomotiveAPI = async () => {
  const response = await axios.get(`placeholder`);
  const triviaVideoGames = response.data;
  this.setState({ triviaVideoGames });
};

const handleSportsAPI = async () => {
  const response = await axios.get(`placeholder`);
  const triviaVideoGames = response.data;
  this.setState({ triviaVideoGames });
};

const buttons = [
  <Button key="one" onClick={handleVideoGamesAPI}>
    Video Games
  </Button>,
  <Button key="two" onClick={handleAutomotiveAPI}>
    Automotive
  </Button>,
  <Button key="three" onClick={handleSportsAPI}>
    Sports
  </Button>,
];

export default function VariantButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        color="success"
        size="small"
        aria-label="contained button group"
        variant="contained"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
