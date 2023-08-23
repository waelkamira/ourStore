import Styles from "./thirdNavBar.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function SelectComponent({ children, label }:any) {
  return (
    <div className={Styles.dropdown}>
      <button className={Styles.dropBtn}>
        {label}
        <KeyboardArrowDownIcon />
      </button>
      <div className={Styles.dropdownContent}>{children}</div>
    </div>
  );
}
