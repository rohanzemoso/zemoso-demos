import { Box, styled } from "@mui/material";
import React from "react";
import { headerData } from "../../../utils/constants";
import TypographyAtom from "../../atoms/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const StyledBox = styled(Box)(() => ({
  width: "100%",
  height: "42px",
  display: "grid",
  gridTemplateColumns: "300px 250px 200px 200px 100px",
  alignItems: "center",
  padding: "0 20px",
  borderBottom: "1px solid rgba(232, 232, 247, 1)",
}));

const StyledTypography = styled(TypographyAtom)(({ theme }) => ({
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: "4px",
  "&.watch-margin": {
    marginLeft: "2rem",
  },
}));

const ArrowBox = styled(Box)(() => ({
  display: "inline-flex",
  flexDirection: "column",
  marginLeft: "4px",
  height: "24px",
}));

const StyledUpIcon = styled(KeyboardArrowUpIcon)(() => ({
  fontSize: 15,
}));

const StyledDownIcon = styled(KeyboardArrowDownIcon)(() => ({
  fontSize: 15,
  marginBottom: 2,
}));

const Header = () => {
  return (
    <StyledBox>
      {headerData.map((header, index) => (
        <StyledTypography
          key={index}
          className={header === "Watch" ? "watch-margin" : ""}
        >
          {header}
          {header === "MarketCap" && (
            <ArrowBox>
              <StyledUpIcon />
              <StyledDownIcon />
            </ArrowBox>
          )}
        </StyledTypography>
      ))}
    </StyledBox>
  );
};

export default Header;
