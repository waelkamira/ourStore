import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Styles from "./thirdNavBar.module.css";
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
      <div className={Styles.navbar3}>
        <button>{label}</button>
        <div className={Styles.dropdownContent}>{children}</div>
      </div>
    </div>
  );
}