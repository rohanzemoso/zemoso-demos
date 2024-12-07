import React from "react";
import { IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface StarIcon_Props {
  isWatched: boolean;
  onClick: () => void;
}

const StarIconAtom: React.FC<StarIcon_Props> = ({ isWatched, onClick }) => (
  <IconButton onClick={onClick}>
    {isWatched ? <StarIcon color="primary" /> : <StarBorderIcon />}
  </IconButton>
);

export default StarIconAtom;
