import { Stack } from "@mui/material";
import ChatListItem from "../ChatListItem/ChatListItem";
import ListHeader from "../ListHeader/ListHeader";
import type { ChatItem } from "../../types/dataStructures.types";

const ChatList = ({
  selectedChat,
  onSelect,
  chatList,
}: {
  chatList: ChatItem[];
  selectedChat: string;
  onSelect: (value: string) => void;
}) => {
  return (
    <Stack
      sx={{
        width: "30%",
        backgroundColor: "white",
        padding: "14px",
        borderRadius: "14px",
      }}
      direction={"column"}
      spacing={2}
    >
      <ListHeader varitent="h4">Chat App</ListHeader>
      {chatList.map(({ lastMessage, name, chatId }) => (
        <ChatListItem
          key={chatId}
          lastMessage={lastMessage}
          name={name}
          chatId={chatId}
          onSelect={onSelect}
          selectedChat={selectedChat === chatId}
        />
      ))}
    </Stack>
  );
};

export default ChatList;
