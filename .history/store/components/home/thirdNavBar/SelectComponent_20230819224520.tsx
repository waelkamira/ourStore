import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
const IconComponent = KeyboardArrowDownIcon;
export default function SelectComponent({ children, label }) {
  return (
    <div>
      {/* <FormControl
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

        <Select
          autoWidth={true}
          sx={{ background: "black", color: "#1D1F1F" }}
          IconComponent={KeyboardArrowDownIcon}
        >
          {children}
        </Select>
      </FormControl> */}

      <button></button>
    </div>
  );
}
