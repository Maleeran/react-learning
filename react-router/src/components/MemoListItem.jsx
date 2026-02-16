import { Divider, ListItem, ListItemText } from "@mui/material";

const MemoListItem = ({ memoItem }) => {
  const processedMemoContent =
    memoItem.content.length > 40
      ? memoItem.content.split(" ").slice(0, 9).join(" ") + "..."
      : memoItem.content;

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={memoItem.title}
          secondary={<>{processedMemoContent}</>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
};
export default MemoListItem;
