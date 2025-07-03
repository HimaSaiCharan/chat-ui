import { Button, Stack, TextField } from "@mui/material";
import "./../../styles/MessageInput.css";
import { useState, type ChangeEvent, type KeyboardEvent } from "react";

const MessageInput = ({
  handleClick,
}: {
  handleClick: (message: string) => Promise<void>;
}) => {
  const [text, setText] = useState("");
  const handleEnterClick = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && text !== "") {
      handleClick(text);
      setText("");
    }
  };

  const handleButtonClick = () => {
    if (text !== "") {
      handleClick(text);
      setText("");
    }
  };

  return (
    <Stack spacing={2} sx={{ p: 2 }} direction={"row"}>
      <TextField
        required
        placeholder="Enter a message ..."
        size="small"
        sx={{ flexGrow: "1", borderRadius: "16px" }}
        className="text-field"
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        onKeyDown={handleEnterClick}
      />
      <Button
        disabled={text === ""}
        variant="contained"
        sx={{ backgroundColor: "#8ec9f9", color: "black" }}
        onClick={handleButtonClick}
      >
        Send
      </Button>
    </Stack>
  );
};

export default MessageInput;
