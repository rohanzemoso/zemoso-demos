import { Box } from "@mui/material";
import React from "react";
import TypographyAtom from "../../atoms/Typography";
import { theme } from "../../../theme/theme";

interface TypographyPair_Props {
  name: string;
  subtitle: string;
}

const TypographyPair: React.FC<TypographyPair_Props> = ({ ...props }) => {
  return (
    <Box>
      <TypographyAtom>{props.name}</TypographyAtom>
      <TypographyAtom color={theme.palette.secondary.light}>
        {props.subtitle}
      </TypographyAtom>
    </Box>
  );
};

export default TypographyPair;
