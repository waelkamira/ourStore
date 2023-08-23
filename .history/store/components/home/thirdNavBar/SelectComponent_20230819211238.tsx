import Select from "@mui/material/Select";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
export default function SelectComponent({ children, label }) {
  return (
    <div>
      <FormControl
        fullWidth
        style={{
          unicodeBidi: "bidi-override !important",
          direction: "unset !important",
          textAlign: "right",
          margin: "2rem",
        }}
      >
        <InputLabel
          style={{
            marginRight: "2rem",
            direction: "rtl",
            unicodeBidi: "bidi-override",
          }}
        >
          {label}{" "}
        </InputLabel>
        <Select style={{ direction: "rtl", unicodeBidi: "bidi-override" }}>
          {children}
        </Select>
      </FormControl>
    </div>
  );
}
