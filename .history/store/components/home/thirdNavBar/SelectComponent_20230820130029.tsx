import Styles from "./thirdNavBar.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function SelectComponent({ children, label }) {
  return (
    <div>
      <div className={Styles.dropdown}>
        <button className={Styles.dropBtn}>
          <KeyboardArrowDownIcon />
          {label}
        </button>
        <div className={Styles.dropdownContent}>{children}</div>
      </div>
    </div>
  );
}
