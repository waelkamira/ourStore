import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
export default function ReusableButton({
  children = "عرض الكل",
  color = "primary",
  variant = "outlined",
}) {
  return (
    <Button
      color={color}
      variant={variant}
      className="flex items-center border border-[#62D0B6] text-[#62D0B6] rounded pb-3 pt-2 px-4"
    >
      {children}
      <NavigateBeforeIcon />
    </Button>
  );
}
