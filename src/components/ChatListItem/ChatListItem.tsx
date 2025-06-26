import { Avatar, ListItemText, Typography, Stack } from "@mui/material";
import "../../styles/chatListItem.css";

type ChatItemProps = {
  name: string;
  lastMessage: string;
  avatarUrl?: string;
  onSelect: (value: string) => void;
  selectedChat?: boolean;
  chatId: string;
};

const ChatListItem: React.FC<ChatItemProps> = ({
  name,
  lastMessage,
  avatarUrl,
  onSelect,
  selectedChat,
  chatId,
}) => {
  console.log(selectedChat);
  return (
    <Stack
      onClick={() => onSelect(chatId)}
      direction={"row"}
      spacing={3}
      sx={{
        cursor: "pointer",
        borderRadius: "12px",
        p: "16px",
        display: "flex",
        alignItems: "center",
        backgroundColor: selectedChat ? "#b4ddff" : "aliceblue",
      }}
    >
      <Avatar
        sx={{ height: "50px", width: "50px", color: "black" }}
        src={avatarUrl}
      >
        {name[0]}
      </Avatar>
      <ListItemText
        primary={
          <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
            {name}
          </Typography>
        }
        secondary={
          <Typography color="text.secondary" noWrap fontSize={"14px"}>
            {lastMessage}
          </Typography>
        }
      />
    </Stack>
  );
};

export default ChatListItem;
