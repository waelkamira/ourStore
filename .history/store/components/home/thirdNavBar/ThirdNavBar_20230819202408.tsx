import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import SelectComponent from "./SelectComponent";

export default function ThirdNavBar() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <SelectComponent label={}>
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
    </Box>
  );
}
