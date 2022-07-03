import React from "react";
import { Story } from "@storybook/react";
import Snackbar, { SnackbarProps } from "../components/atoms/Snackbar";

export default {
  title: "Snackbar",
  component: Snackbar,
  argTypes: {
    close: { action: "close snackbar callback" },
  },
};

const Template: Story<SnackbarProps> = (args: SnackbarProps) => (
  <Snackbar
    message={args.message}
    variant={args.variant}
    open={args.open}
    close={args.close}
  />
);

export const Info = Template.bind({});
Info.args = {
  message: "Info",
  variant: "info",
  open: true,
};

export const Success = Template.bind({});
Success.args = {
  message: "Success",
  variant: "success",
  open: true,
};

export const Warning = Template.bind({});
Warning.args = {
  message: "Warning",
  variant: "warning",
  open: true,
};

export const Err = Template.bind({});
Err.args = {
  message: "Error",
  variant: "error",
  open: true,
};
