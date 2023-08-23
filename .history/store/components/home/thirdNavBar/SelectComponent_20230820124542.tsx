import Select from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Styles from "./thirdNavBar.module.css";
export default function SelectComponent({ children, label }) {
  return (
    <div>
      <div className={Styles.dropdown}>
        <button className={Styles.dropBtn}>{label}</button>

        <div className={Styles.dropdownContent}>{children}</div>
      </div>
    </div>
  );
}
