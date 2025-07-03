import { Stack } from "@mui/material";
import ChatListItem from "../ChatListItem/ChatListItem";
import ListHeader from "../ListHeader/ListHeader";
import type { ChatItem } from "../../types/dataStructures.types";

const ChatList = ({
  selectedChat,
  onSelect,
  chatList,
  width,
}: {
  chatList: ChatItem[];
  selectedChat: string;
  onSelect: (value: string) => void;
  width: string;
}) => {
  return (
    <Stack
      sx={{
        width,
        backgroundColor: "white",
        padding: "14px",
        borderRadius: "14px",
        height: "100%",
      }}
      direction={"column"}
      spacing={2}
    >
      <ListHeader varitent="h4">Chat App</ListHeader>
      {chatList.map(({ lastMessage, name }, index) => (
        <ChatListItem
          key={index}
          lastMessage={lastMessage}
          name={name}
          onSelect={onSelect}
          selectedChat={selectedChat === name}
        />
      ))}
    </Stack>
  );
};

export default ChatList;
