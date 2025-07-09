import { Box, Stack, Typography } from "@mui/material";
import type { ChatProps } from "../../types/componentProp.types";
import "./../../styles/chat.css";
import { useEffect, useRef } from "react";

const Chat = ({ chat, chatName }: ChatProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [chat]);

  return (
    <Stack spacing={1} sx={{ height: "100%", p: 2, overflowY: "auto" }}>
      {chat.map((message, index) => {
        const isOwn = message.to === chatName;

        return (
          <Box
            key={index}
            display="flex"
            justifyContent={isOwn ? "flex-end" : "flex-start"}
          >
            <Box
              sx={{
                py: 1,
                px: 2,
                maxWidth: "60%",
                backgroundColor: isOwn ? "aliceBlue" : "#f1f1f1",
                borderRadius: "14px",
                borderTopLeftRadius: isOwn ? "14px" : "0px",
                borderTopRightRadius: isOwn ? "0px" : "14px",
              }}
            >
              <Typography variant="body1">{message.message}</Typography>
            </Box>
          </Box>
        );
      })}

      <div ref={bottomRef}></div>
    </Stack>
  );
};

export default Chat;
