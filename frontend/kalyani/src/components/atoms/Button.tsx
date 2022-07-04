import Button from "@mui/material/Button";
import { buttonProps } from "../../Props/ButtonProps";

const TextButton = (props: buttonProps) => {
  return (
    <Button
      {...props}
      variant="contained"
      color={props.color}
      className={props.className}
      type="submit"
    >
      {props.text}
    </Button>
  );
};

export default TextButton;
