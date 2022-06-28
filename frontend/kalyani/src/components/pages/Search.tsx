import React, { useContext } from "react";
import { Form, FormControl } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";

export default function Search() {
  const { addSearch } = useContext(SearchContext);
  return (
    <Form className="d-flex">
      <FormControl
        onChange={(searchProduct) => {
          addSearch(searchProduct.target.value);
        }}
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
    </Form>
  );
}
