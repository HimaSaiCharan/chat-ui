import { Button, Stack, TextField, Typography } from "@mui/material";
import ModalBox from "../ModalBox/ModalBox";
import { useRef, useState, type ChangeEvent } from "react";
import type { FoundPeople } from "../../types/dataStructures.types";
import toast from "react-hot-toast";

const SearchPeopleModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [text, setText] = useState("");
  const [foundPeople, setFoundPeople] = useState<null | FoundPeople[]>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const fetchPeople = async (searchText: string) => {
    const response = await fetch(`/search?name=${searchText}`);
    const people: FoundPeople[] = await response.json();

    setFoundPeople(people);
  };

  const handleAddFriend = async (frndName: string) => {
    const response = await fetch(`/request?name=${frndName}`);
    const { success, message } = await response.json();

    success ? toast.success(message) : toast.error(message);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => fetchPeople(e.target.value), 800);
  };

  return (
    <ModalBox isOpen={isOpen} onClose={onClose}>
      <Typography variant="h6" mb={2}>
        Search People
      </Typography>
      <Stack spacing={1} direction={"row"} sx={{ alignItems: "center" }}>
        <TextField
          fullWidth
          placeholder="Search by name..."
          variant="outlined"
          size="small"
          value={text}
          onChange={handleOnChange}
        />
        <Button
          disabled={text === ""}
          variant="contained"
          onClick={() => setText("")}
        >
          Clear
        </Button>
      </Stack>
      {foundPeople && (
        <Stack direction={"column"} spacing={2} mt={2}>
          {foundPeople.length === 0 ? (
            <div>No one Found !</div>
          ) : (
            foundPeople.map(({ isFriend, username }) => (
              <Stack
                px="14px"
                py="6px"
                key={username}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography variant="body1">{username}</Typography>
                <Button
                  onClick={() => handleAddFriend(username)}
                  disabled={isFriend}
                  sx={{
                    color: "black",
                    ...(isFriend
                      ? { backgroundColor: "aliceblue" }
                      : { backgroundColor: "#8ec9f9" }),
                  }}
                >
                  Add Friend
                </Button>
              </Stack>
            ))
          )}
        </Stack>
      )}
    </ModalBox>
  );
};

export default SearchPeopleModal;
