import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface Typography_Props extends TypographyProps {}
const TypographyAtom: React.FC<Typography_Props> = ({ ...props }) => {
  return <Typography {...props}></Typography>;
};

export default TypographyAtom;
