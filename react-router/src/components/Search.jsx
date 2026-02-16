import { TextField } from "@mui/material";
import { useState } from "react";
import MemoList from "./MemoList";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");

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
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      />
      <MemoList searchItem={searchItem} />
    </div>
  );
};
export default Search;
