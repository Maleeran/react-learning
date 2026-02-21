import { Button, Fab, TextField } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { useLocalStorage } from "react-use";

const MemoItem = () => {
  const navigate = useNavigate();

  const { memoId } = useParams();
  const [memoList, setMemoList] = useLocalStorage("memo-list");

  const currentMemoItem = memoList.find(
    (memoItem) => Number(memoItem.id) === Number(memoId),
  );

  const [title, setTitle] = useState(currentMemoItem.title);
  const [content, setContent] = useState(currentMemoItem.content);

  function updateMemo() {
    const newMemoList = memoList.map((memoItem) => {
      if (Number(memoItem.id) === Number(memoId)) {
        return {
          ...memoItem,
          title,
          content,
        };
      }
      return memoItem;
    });

    setMemoList(newMemoList);
    setTitle("");
    setContent("");

    toast.success("Successfully updated!");

    navigate("/");
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
      <Button variant="contained" style={{ width: "25%" }} onClick={updateMemo}>
        UPDATE
      </Button>

      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "absolute", bottom: 80, right: 40 }}
        onClick={() => navigate("/")}
      >
        <HomeIcon />
      </Fab>
    </form>
  );
};
export default MemoItem;
