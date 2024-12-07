import { Box } from "@mui/material";
import React from "react";
import TypographyAtom from "../../atoms/Typography";
import { theme } from "../../../theme/theme";

interface TypographyMolecule_Props {
  name: string;
  subtitle: string;
}

const TypographyMolecule: React.FC<TypographyMolecule_Props> = ({
  ...props
}) => {
  return (
    <Box>
      <TypographyAtom>{props.name}</TypographyAtom>
      <TypographyAtom color={theme.palette.secondary.light}>
        {props.subtitle}
      </TypographyAtom>
    </Box>
  );
};

export default TypographyMolecule;
