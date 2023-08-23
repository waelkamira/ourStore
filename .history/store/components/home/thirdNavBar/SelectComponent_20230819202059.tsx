import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
export default function SelectComponent() {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>كل المنتجات</InputLabel>
        <Select>
          <MenuItem>One</MenuItem>
          <MenuItem>Two</MenuItem>
          <MenuItem>Three</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
