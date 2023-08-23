import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
export default function SelectComponent({ children, label }) {
  return (
    <div>
      <FormControl
        fullWidth
        style={{
          margin: "2rem",
        }}
      >
        <InputLabel
          style={{
            marginRight: "2rem",
            color: "white",
          }}
        >
          {label}{" "}
        </InputLabel>
        <Select autoWidth={true} KeyboardArrowDownIcon>
          {children}
        </Select>
      </FormControl>
    </div>
  );
}
