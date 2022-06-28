import * as React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
type dropDownProps = {
  data: string[];
  handleSelectedItem: (value: string | null) => void;
  defaultValue: string;
  labelName: string;
};
const DropDown = ({
  data,
  handleSelectedItem,
  defaultValue,
  labelName,
}: dropDownProps) => {
  const [value, setValue] = React.useState<string | null>(defaultValue);
  const [inputValue, setInputValue] = React.useState(defaultValue);
  return (
    <Autocomplete
      value={value}
      onChange={(event: unknown, newValue: string | null) => {
        handleSelectedItem(newValue);
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={data}
      sx={{ minWidth: 300 }}
      renderInput={(params) => <TextField {...params} label={labelName} />}
    />
  );
};
export default DropDown;
