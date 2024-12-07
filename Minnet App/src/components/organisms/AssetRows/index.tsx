import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { rows } from "../../../utils/constants";
import Header from "../../molecules/Header";
import { TypographyIcon } from "../../molecules/TypographyIcon";
import TabsAtom from "../../atoms/TabsAtom";
import { theme } from "../../../theme/theme";

const StyledBox = styled(Box)(() => ({
  height: "804px",
  width: "1200px",
  backgroundColor: theme.palette.background.default,
}));
const AssetRows = () => {
  const [watchedItems, setWatchedItems] = useState<Set<string>>(new Set());
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleWatch = (name: string) => {
    setWatchedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  const displayRows =
    tabValue === 1 ? rows.filter((item) => watchedItems.has(item.name)) : rows;

  return (
    <StyledBox>
      <TabsAtom value={tabValue} onChange={handleTabChange} />
      <Header />
      {displayRows.map((item, index) => (
        <TypographyIcon
          key={index}
          name={item.name}
          src={item.icon}
          subtitle={item.subtitle}
          Change={item["Change:"]}
          MarketCap={item.MarketCap}
          price={item.price}
          isWatched={watchedItems.has(item.name)}
          onWatchToggle={() => toggleWatch(item.name)}
        />
      ))}
    </StyledBox>
  );
};

export default AssetRows;
