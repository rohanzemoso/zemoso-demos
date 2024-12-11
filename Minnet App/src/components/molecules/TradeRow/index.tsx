import { Box, styled } from "@mui/material";
import React from "react";
import { theme } from "../../../theme/theme";
import StarIconAtom from "../../atoms/StarIcon";
import TypographyAtom from "../../atoms/Typography";
import IconTypographyPair from "../../molecules/IconTypographyPair";

interface TradeRow_Props {
  src: string;
  name: string;
  subtitle: string;
  price: string;
  Change: string;
  MarketCap: string;
  isWatched: boolean;
  onWatchToggle: () => void;
}

const StyledBox = styled(Box)(({ theme }) => ({
  width: theme.spacing(137.5),
  height: theme.spacing(18.5),
  display: "grid",
  gridTemplateColumns: `${theme.spacing(37.5)} ${theme.spacing(
    31.25
  )} ${theme.spacing(25)} ${theme.spacing(25)} ${theme.spacing(12.5)}`,
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  border: "1px solid rgba(232, 232, 247, 1)",
  marginBottom: theme.spacing(1),
  padding: `0 ${theme.spacing(2)}`,
}));

const StarBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
}));

export const TradeRow: React.FC<TradeRow_Props> = ({ ...props }) => (
  <StyledBox>
    <IconTypographyPair
      src={props.src}
      name={props.name}
      subtitle={props.subtitle}
    />
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
