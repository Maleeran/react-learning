import { Divider, ListItem, ListItemText } from "@mui/material";

const MemoListItem = ({ memoItem }) => {
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={memoItem.title}
          secondary={<>{memoItem.content}</>}
        />
      </ListItem>
      <Divider component="li" />
    </>
  );
};
export default MemoListItem;
