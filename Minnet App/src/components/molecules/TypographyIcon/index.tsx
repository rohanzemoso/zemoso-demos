import { Box } from "@mui/material";
import React from "react";
import IconAtom from "../../atoms/Icon";
import TypographyMolecule from "../TypograpyMolecule";
import { styled } from "@mui/system";
import TypographyAtom from "../../atoms/Typography";
import { theme } from "../../../theme/theme";
import StarIconAtom from "../../atoms/StarIcon";

interface TypographyIcon_Props {
  src: string;
  name: string;
  subtitle: string;
  price: string;
  Change: string;
  MarketCap: string;
  isWatched: boolean;
  onWatchToggle: () => void;
}

const StyledBox = styled(Box)(() => ({
  width: "1100px",
  height: "74px",
  display: "grid",
  gridTemplateColumns: "300px 250px 200px 200px 100px",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  border: "1px solid rgba(232, 232, 247, 1)",
  marginBottom: "5px",
  padding: "0 20px",
}));

const StarBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));

const StyledIconTypographyBox = styled(Box)(() => ({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
}));

export const TypographyIcon: React.FC<TypographyIcon_Props> = ({
  ...props
}) => (
  <StyledBox>
    <StyledIconTypographyBox>
      <IconAtom src={props.src} />
      <TypographyMolecule name={props.name} subtitle={props.subtitle} />
    </StyledIconTypographyBox>
    <TypographyAtom>{props.price}</TypographyAtom>
    <TypographyAtom
      color={
        props.Change.includes("-")
          ? theme.palette.primary[200]
          : theme.palette.primary[100]
      }
    >
      {props.Change}
    </TypographyAtom>
    <TypographyAtom>{props.MarketCap}</TypographyAtom>
    <StarBox>
      <StarIconAtom isWatched={props.isWatched} onClick={props.onWatchToggle} />
    </StarBox>
  </StyledBox>
);
