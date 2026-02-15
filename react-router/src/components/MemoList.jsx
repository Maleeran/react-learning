import List from "@mui/material/List";
import MemoListItem from "./MemoListItem";

const MemoList = () => {
  const dataList = [
    {
      id: 1,
      title: "Brunch this weekend?",
      content: " I'll be in your neighborhood doing errands this…",
    },
    {
      id: 2,
      title: "Summer BBQ",
      content: " Wish I could come, but I'm out of town this…",
    },
    {
      id: 3,
      title: "Oui Oui",
      content: " Do you have Paris recommendations? Have you ever…",
    },
    {
      id: 4,
      title: "Brunch this weekend?",
      content: " I'll be in your neighborhood doing errands this…",
    },
    {
      id: 5,
      title: "Summer BBQ",
      content: " Wish I could come, but I'm out of town this…",
    },
    {
      id: 6,
      title: "Oui Oui",
      content: " Do you have Paris recommendations? Have you ever…",
    },
    {
      id: 7,
      title: "Brunch this weekend?",
      content: " I'll be in your neighborhood doing errands this…",
    },
    {
      id: 8,
      title: "Summer BBQ",
      content: " Wish I could come, but I'm out of town this…",
    },
    {
      id: 9,
      title: "Oui Oui",
      content: " Do you have Paris recommendations? Have you ever…",
    },
    {
      id: 10,
      title: "Brunch this weekend?",
      content: " I'll be in your neighborhood doing errands this…",
    },
    {
      id: 11,
      title: "Summer BBQ",
      content: " Wish I could come, but I'm out of town this…",
    },
    {
      id: 12,
      title: "Oui Oui",
      content: " Do you have Paris recommendations? Have you ever…",
    },
    {
      id: 13,
      title: "Brunch this weekend?",
      content: " I'll be in your neighborhood doing errands this…",
    },
    {
      id: 14,
      title: "Summer BBQ",
      content: " Wish I could come, but I'm out of town this…",
    },
    {
      id: 15,
      title: "Oui Oui",
      content: " Do you have Paris recommendations? Have you ever…",
    },
  ];
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        paddingBottom: "56px",
        paddingTop: "56px",
      }}
    >
      {dataList.map((memoItem) => (
        <MemoListItem key={memoItem.id} memoItem={memoItem} />
      ))}
    </List>
  );
};
export default MemoList;
