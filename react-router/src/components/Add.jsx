import { Button, TextField } from "@mui/material";
import { useState } from "react";

import { useLocalStorage } from "react-use";

const Add = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [memoList, setMemoList] = useLocalStorage("memo-list");

  function appendMemo() {
    const newMemoList = [...memoList, { id: Date.now(), title, body: content }];

    setMemoList(newMemoList);
  }

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        paddingTop: "70px",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <TextField
        id="standard-basic"
        label="Title"
        variant="standard"
        style={{ width: "75%" }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        id="standard-multiline-static"
        label="Content"
        multiline
        rows={4}
        defaultValue=""
        variant="standard"
        style={{ width: "75%" }}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button variant="contained" style={{ width: "25%" }} onClick={appendMemo}>
        ADD
      </Button>
    </form>
  );
};
export default Add;
