import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ThirdNavBar() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select>
          <MenuItem>One</MenuItem>
          <MenuItem>Two</MenuItem>
          <MenuItem>Three</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}