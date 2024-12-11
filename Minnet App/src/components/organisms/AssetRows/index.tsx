import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import { assetRows } from "../../../utils/constants";
import Header from "../../molecules/Header";
import { TradeRow } from "../../molecules/TradeRow";
import TabsMolecule from "../../molecules/TabsMolecule";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "804px",
  width: "1200px",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
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
    tabValue === 1
      ? assetRows.filter((item) => watchedItems.has(item.name))
      : assetRows;

  return (
    <StyledBox>
      <TabsMolecule value={tabValue} onChange={handleTabChange} />
      <Header />
      {displayRows.map((item) => (
        <TradeRow
          key={item.id}
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
