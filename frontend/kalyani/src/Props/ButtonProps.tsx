export type buttonProps = {
  onClick?: () => void;
  text: string;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  className?: string;
  disabled?: boolean;
  children?: string;
};
