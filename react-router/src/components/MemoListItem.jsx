import { Divider, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";

const MemoListItem = ({ memoItem, deleteMemo }) => {
  const navigate = useNavigate();

  const processedMemoContent =
    memoItem.content.length > 40
      ? memoItem.content.split(" ").slice(0, 9).join(" ") + "..."
      : memoItem.content;

  return (
    <>
      <ListItem
        alignItems="flex-start"
        onClick={() => navigate(`/memo/${memoItem.id}`)}
        style={{ cursor: "pointer" }}
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={(event) => {
              event.stopPropagation();
              deleteMemo(memoItem.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
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
