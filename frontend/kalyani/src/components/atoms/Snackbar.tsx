import React from "react";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import MuiSnackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon/SvgIcon";
import useStyles from "../../styling/SnackbarStyle";
import { SnackbarVariants } from "../../types/SnackbarVariants";

type VariantIconType = {
  success: OverridableComponent<SvgIconTypeMap>;
  warning: OverridableComponent<SvgIconTypeMap>;
  error: OverridableComponent<SvgIconTypeMap>;
  info: OverridableComponent<SvgIconTypeMap>;
};

/**
 * variantIcon defines what icon will be shown depending on the snackbar-variant.
 */
const variantIcon: VariantIconType = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

/**
 * SnackBarProps defines all properties that are accepted by
 * the Snackbar component.
 */
export interface SnackbarProps {
  message: string;
  variant: SnackbarVariants;
  open: boolean;
  close: () => void;
}

/**
 * Snackbar displays a Material-UI Snackbar.
 * @param message that is displayed inside the snackbar
 * @param variant (one of SnackbarVariant type)
 * @param open state of the snackbar
 * @param close function to hide the snackbar
 */
const Snackbar = ({ message, variant, open, close }: SnackbarProps) => {
  const classes = useStyles();
  const Icon = variantIcon[variant];

  /**
   * renderSnackbarMessage renders the actions of the
   */
  const renderSnackbarMessage = () => {
    return (
      <span id="snackbar">
        <Icon
          className={clsx(classes.icon, classes.iconVariant, classes.iconError)}
        />
        {message}
      </span>
    );
  };

  /**
   * renderSnackbarAction renders the actions of the snackbar
   */
  const renderSnackbarAction = () => {
    return (
      <IconButton
        className={classes.closeButton}
        key="close"
        aria-label="close"
        color="inherit"
        onClick={close}
      >
        <CloseIcon className={classes.icon} />
      </IconButton>
    );
  };

  /**
   * renderSnackbarContent renders the content of the snackbar
   */
  const renderSnackbarContent = () => {
    return (
      <SnackbarContent
        className={clsx(classes[variant], classes.container)}
        message={renderSnackbarMessage()}
        action={[renderSnackbarAction()]}
      />
    );
  };

  return (
    <div>
      <MuiSnackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={close}
        autoHideDuration={6000}
      >
        {renderSnackbarContent()}
      </MuiSnackbar>
    </div>
  );
};

export default Snackbar;
