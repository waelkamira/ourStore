import Select from "@mui/material/Select";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
export default function SelectComponent({ children, label }) {
  return (
    <div>
      <FormControl
        fullWidth
        style={{ margin: "0rem", marginLeft: "2rem", marginRight: "2rem" }}
      >
        <InputLabel>{label} </InputLabel>
        <Select>{children}</Select>
      </FormControl>
    </div>
  );
}