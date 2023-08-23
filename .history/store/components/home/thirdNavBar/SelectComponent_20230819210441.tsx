import Select from "@mui/material/Select";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
export default function SelectComponent({ children, label }) {
  return (
    <div>
      <FormControl fullWidth style={{ margin: "2rem", direction: "rtl" }}>
        <InputLabel style={{ marginRight: "2rem" }}>{label} </InputLabel>
        <Select style={{ direction: "rtl" }}>{children}</Select>
      </FormControl>
    </div>
  );
}