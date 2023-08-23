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
          //   defaultOpen={true}
          className={Styles.dropdown}
          //   sx={{ background: "black" }}
          IconComponent={KeyboardArrowDownIcon}
        >
          {children}
        </Select>
      </FormControl> */}
      <div className={Styles.dropdown}>
        <button className={Styles.dropbtn}>{label}</button>

        <div className={Styles.dropdownContent}>{children}</div>
      </div>
    </div>
  );
}
