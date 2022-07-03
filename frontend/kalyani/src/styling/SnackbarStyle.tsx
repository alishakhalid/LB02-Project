import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  success: {
    backgroundColor: theme.palette.success.main,
    borderRadius: 0,
  },
  error: {
    backgroundColor: theme.palette.error.main,
    borderRadius: 0,
  },
  info: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
  },
  warning: {
    backgroundColor: theme.palette.warning.main,
    borderRadius: 0,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
  closeButton: {
    top: 3,
  },
  iconError: {
    transform: "translateY(21%)",
  },
  container: {
    paddingBottom: 10,
  },
}));
