import React, { createContext, useState } from "react";
import { SnackbarVariants } from "../types/SnackbarVariants";
import Snackbar from "../components/atoms/Snackbar";

/**
 * SnackbarContextType defines the provided values
 */
type SnackbarContextType = {
  open: boolean;
  message: string;
  variant: SnackbarVariants;
  close: () => void;
  displaySnackbarMessage: (message: string, variant?: SnackbarVariants) => void;
  setSuccessMessage: (message: string) => void;
  setErrorMessage: (message: string) => void;
};

/**
 * noContextProviderFound is a method that throws an error and is used
 * inside the defaultContextValue
 */
const noContextProviderFound = () => {
  throw new Error("No provider for the SnackBarContext found");
};

/**
 * defaultSnackbarContext constant holds the default values for the
 * SnackbarContext.
 */
const defaultSnackBarContext: SnackbarContextType = {
  open: false,
  message: "",
  variant: "info",
  close: noContextProviderFound,
  displaySnackbarMessage: noContextProviderFound,
  setSuccessMessage: noContextProviderFound,
  setErrorMessage: noContextProviderFound,
};

/**
 * SnackbarContext holds and provides values and modifiers for
 * the data which is used to display a snackbar.
 */
const SnackbarContext = createContext<SnackbarContextType>(
  defaultSnackBarContext
);
export default SnackbarContext;

/**
 * SnackbarContextProviderProps define the accepted props for
 * the SnackBarContextProvider.
 */
type SnackbarContextProviderProps = {
  children: React.ReactNode;
};

/**
 * SnackbarContextProvider provides values of the currently displayed snackbar, and a methods to set these values.
 * @param children consists of all the elements that are located inside the
 */
export const SnackbarContextProvider = ({
  children,
}: SnackbarContextProviderProps) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState<SnackbarVariants>("info");

  /**
   * Close the snackbar.
   */
  const close = () => {
    setOpen(false);
  };

  /**
   * Display a snackbar with the given message and snackbar-variant
   * @param messageToShow
   * @param variantToShow
   */
  const displaySnackbarMessage = (
    messageToShow: string,
    variantToShow: SnackbarVariants = "info"
  ) => {
    setMessage(messageToShow);
    setVariant(variantToShow);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider
      value={{
        variant,
        open,
        message,
        close,
        displaySnackbarMessage,
        setErrorMessage: (messageToShow) =>
          displaySnackbarMessage(messageToShow, "error"),
        setSuccessMessage: (messageToShow) =>
          displaySnackbarMessage(messageToShow, "success"),
      }}
    >
      <Snackbar message={message} variant={variant} open={open} close={close} />
      {children}
    </SnackbarContext.Provider>
  );
};
