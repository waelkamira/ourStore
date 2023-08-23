import Select from "@mui/material/Select";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
export default function SelectComponent({ children }) {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>كل المنتجات</InputLabel>
        <Select>{children}</Select>
      </FormControl>
    </div>
  );
}
