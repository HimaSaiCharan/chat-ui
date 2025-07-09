import { Stack } from "@mui/material";
import type { ChatProps } from "../../types/componentProp.types";
import Chat from "../Chat/Chat";
import ListHeader from "../ListHeader/ListHeader";
import MessageInput from "../MessageInput/MessageInput";
import ChatWindowPlaceholder from "./ChatWindowPlaceholder";

const ChatWindow = ({
  chatDetails,
  handleSend,
  width,
}: {
  handleSend: (frndName: string, message: string) => Promise<void>;
  chatDetails: ChatProps | null;
  width: string;
}) => {
  return (
    <Stack
      sx={{
        width,
        backgroundColor: "white",
        borderRadius: "14px",
        padding: "20px",
        height: "100%",
      }}
    >
      {chatDetails ? (
        <>
          <ListHeader variant={"h5"}>{chatDetails.chatName}</ListHeader>
          <Chat chat={chatDetails.chat} chatName={chatDetails.chatName} />
          <MessageInput
            handleClick={(message: string) =>
              handleSend(chatDetails.chatName, message)
            }
          />
        </>
      ) : (
        <ChatWindowPlaceholder />
      )}
    </Stack>
  );
};

export default ChatWindow;
