import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import SelectComponent from "./SelectComponent";

export default function ThirdNavBar() {
  return (
    <Box sx={{ minWidth: 120 }}>
      
        <SelectComponent></SelectComponent>
      </FormControl>
    </Box>
  );
}
