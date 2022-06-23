import { makeStyles, createStyles } from "@material-ui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      textAlign: "center",
      margin: theme.spacing(1, 0, 4),
    },
  })
);
