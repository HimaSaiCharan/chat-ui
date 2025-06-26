import { Button, Stack, TextField } from "@mui/material";
import "./../../styles/MessageInput.css";

const MessageInput = () => {
  return (
    <Stack spacing={2} sx={{ p: 2 }} direction={"row"}>
      <TextField
        placeholder="Enter a message ..."
        size="small"
        sx={{ flexGrow: "1", borderRadius: "16px" }}
        className="text-field"
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#8ec9f9", color: "black" }}
      >
        Send
      </Button>
    </Stack>
  );
};

export default MessageInput;
