import { Stack, Typography } from "@mui/material";

const ChatWindowPlaceholder = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      spacing={2}
      height={"100%"}
    >
      <img
        src="/images/chatWindowPlaceholder.svg"
        alt="Placeholder"
        style={{ maxWidth: "400px", width: "80%" }}
      />
      <Typography variant="h6">
        Your messages will show up here. Just select a chat!
      </Typography>
    </Stack>
  );
};

export default ChatWindowPlaceholder;
