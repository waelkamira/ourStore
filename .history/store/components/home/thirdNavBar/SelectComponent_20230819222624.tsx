import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
const IconComponent = KeyboardArrowDownIcon;
export default function SelectComponent({ children, label }) {
  return (
    <div>
      <FormControl
        fullWidth
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
          color: "white",
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

        <select style={{ background: "black", color: "white" }}>
          {children}
        </select>
      </FormControl>
    </div>
  );
}
