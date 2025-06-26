import { Stack } from "@mui/material";
import type { ChatProps } from "../../types/componentProp.types";
import Chat from "../Chat/Chat";
import ListHeader from "../ListHeader/ListHeader";
import MessageInput from "../MessageInput/MessageInput";

const ChatWindow = ({ chat: chatDetails }: { chat: ChatProps | null }) => {
  console.log(chatDetails);
  return (
    <Stack
      sx={{
        width: "70%",
        backgroundColor: "white",
        borderRadius: "14px",
        padding: "20px",
        height: "100%",
      }}
    >
      {chatDetails ? (
        <>
          <ListHeader varitent={"h5"}>{chatDetails.chatName}</ListHeader>
          <Chat chat={chatDetails.chat} chatName={chatDetails.chatName} />
          <MessageInput />
        </>
      ) : (
        <Stack direction={"column"} spacing={2}>
          Click on any Chat to load the content here.
        </Stack>
      )}
    </Stack>
  );
};

export default ChatWindow;
