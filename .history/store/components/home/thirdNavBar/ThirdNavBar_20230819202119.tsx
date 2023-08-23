import * as React from "react";
import Box from "@mui/material/Box";

import SelectComponent from "./SelectComponent";

export default function ThirdNavBar() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <SelectComponent>
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
    </Box>
  );
}
