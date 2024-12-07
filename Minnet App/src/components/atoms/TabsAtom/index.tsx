import { Tabs, Tab } from "@mui/material";
import React from "react";

interface TabsAtom_Props {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const TabsAtom: React.FC<TabsAtom_Props> = ({ value, onChange }) => (
  <Tabs value={value} onChange={onChange}>
    <Tab label="All Assets" />
    <Tab label="Watchlist" />
  </Tabs>
);

export default TabsAtom;
