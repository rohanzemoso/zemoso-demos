import React from "react";
import IconAtom from "../../atoms/Icon";
import TypographyPair from "../TypographyPair";
import { Box, styled } from "@mui/material";

const StyledIconTypographyBox = styled(Box)(() => ({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
}));

interface IconTypographyPairProps {
  src: string;
  name: string;
  subtitle: string;
}

const IconTypographyPair: React.FC<IconTypographyPairProps> = ({
  src,
  name,
  subtitle,
}) => (
  <StyledIconTypographyBox>
    <IconAtom src={src} />
    <TypographyPair name={name} subtitle={subtitle} />
  </StyledIconTypographyBox>
);

export default IconTypographyPair;
