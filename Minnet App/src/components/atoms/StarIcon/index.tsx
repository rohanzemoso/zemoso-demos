import React from "react";
import { IconButton } from "@mui/material";
import { StarIcon as MUIStarIcon } from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface StarIcon_Props {
  isWatched: boolean;
  onClick: () => void;
}

const StarIcon: React.FC<StarIcon_Props> = ({ isWatched, onClick }) => (
  <IconButton onClick={onClick}>
    {isWatched ? <MUIStarIcon color="primary" /> : <StarBorderIcon />}
  </IconButton>
);

export default StarIcon;
