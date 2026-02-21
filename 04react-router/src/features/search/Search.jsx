import { TextField } from "@mui/material";
import { useState } from "react";
import MemoList from "../../components/MemoList";
import { useSearchParams } from "react-router";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchItem, setSearchItem] = useState(searchParams.get("q") || "");

  function onChange(event) {
    const { value } = event.target;

    setSearchItem(value);
    setSearchParams({ q: value });
  }

  return (
    <div
      style={{
        paddingTop: "70px",
        textAlign: "center",
      }}
    >
      <TextField
        id="standard-basic"
        label="Search Memo Title"
        variant="standard"
        value={searchItem}
        onChange={onChange}
      />
      <MemoList searchItem={searchItem} />
    </div>
  );
};
export default Search;
