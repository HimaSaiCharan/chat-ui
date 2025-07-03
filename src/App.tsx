import { Stack } from "@mui/material";
import ChatList from "./components/ChatList/ChatList";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import { useEffect, useState } from "react";
import type { ChatDetails } from "./types/dataStructures.types";
import toast, { Toaster } from "react-hot-toast";
import type { UserData } from "./types/dataStructures.types";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [selectedChat, setSelectedChat] = useState("");
  const [chatList, setChatList] = useState<null | UserData>(null);
  const [chat, setChat] = useState<null | ChatDetails>(null);

  useEffect(() => {
    const getChatList = async () => {
      const response = await fetch("http://localhost:8000/chat-list", {
        method: "GET",
      });

      const { data, success } = await response.json();

      success
        ? toast.success("Chat list fetched Successfully")
        : toast.error("Failed to fetch Chat list");

      setChatList(data);
    };

    getChatList();
  }, []);

  const getChat = async (value: string) => {
    const response = await fetch(`http://localhost:8000/chat/${value}`);

    const { chatName, success, chats } = await response.json();

    success
      ? toast.success("Chat fetched Successfully")
      : toast.error("Chat failed to fetch");

    setChat({ chatName, chat: chats });
  };

  const handleClick = (value: string) => {
    setSelectedChat(value);
    getChat(value);
  };

  const handleSend = async (frndName: string, msg: string = "Hi") => {
    const response = await fetch(`http://localhost:8000/chat/${frndName}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ message: msg }),
    });

    const { success, message } = await response.json();

    success
      ? toast.success(message ?? "Operation Successful")
      : toast.error(message ?? "Operation Failed");
  };

  return (
    <>
      <Stack
        direction={"row"}
        spacing={2}
        sx={{ width: "100%", height: "100vh", p: "14px", alignItems: "center" }}
      >
        <NavBar width="90px" />
        <ChatList
          chatList={chatList?.chats || []}
          selectedChat={selectedChat}
          onSelect={handleClick}
          width="35%"
        />
        <ChatWindow handleSend={handleSend} chatDetails={chat} width="65%" />
      </Stack>
      <Toaster
        containerStyle={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      />
    </>
  );
};

export default App;
