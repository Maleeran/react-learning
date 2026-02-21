import { Button, TextField } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocalStorage } from "react-use";

const Add = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [memoList, setMemoList] = useLocalStorage("memo-list");

  function appendMemo() {
    if (title === "" || content === "") {
      toast.error("You need to fill in both title and content");
      return;
    }

    const newMemoList = [...memoList, { id: Date.now(), title, content }];

    setMemoList(newMemoList);
    toast.success("Successfully added!");

    setTitle("");
    setContent("");
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
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextField
        id="standard-multiline-static"
        label="Content"
        multiline
        rows={4}
        variant="standard"
        style={{ width: "75%" }}
        value={content}
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
