import Select from "@mui/material/Select";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
export default function SelectComponent() {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>كل المنتجات</InputLabel>
        <Select></Select>
      </FormControl>
    </div>
  );
}
