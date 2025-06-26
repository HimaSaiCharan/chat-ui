import { Stack } from "@mui/material";
import ChatList from "./components/ChatList/ChatList";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import { useEffect, useState } from "react";
import type { ChatDetails } from "./types/dataStructures.types";
import chatListMockData from "./mock-data/mock-data";
import chat1 from "./mock-data/chat-list";
import toast from "react-hot-toast";

const App = () => {
  const [selectedChat, setSelectedChat] = useState("");
  const [chatList, setChatList] = useState();
  const [chat, setChat] = useState<null | ChatDetails>(null);

  useEffect(() => {
    const getChatList = async () => {
      const response = await fetch("http://localhost:8000/chat-list", {
        method: "GET",
        credentials: "include",
      });

      console.log(response);
      const { data, success } = await response.json();
      console.log("hello world");

      success
        ? toast.success("Chat list fetched Successfully")
        : toast.error("Failed to fetch Chat list");

      console.log("this is the data from the useEffect", data);
      setChatList(data);
    };

    getChatList();
  }, []);

  const handleClick = (value: string) => {
    setSelectedChat(value);
  };

  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{ width: "100%", height: "100vh", p: "14px" }}
    >
      <ChatList
        chatList={chatListMockData.chats}
        selectedChat={selectedChat}
        onSelect={handleClick}
      />
      <ChatWindow chat={chat1} />
    </Stack>
  );
};

export default App;
