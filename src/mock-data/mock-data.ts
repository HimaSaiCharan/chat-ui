import type { UserData } from "../types/dataStructures.types";

const data: UserData = {
  username: "Unknown",
  chats: [
    {
      name: "User 1",
      lastMessage: "Hey what's up ?",
      chatId: "1",
    },
    {
      name: "Person 1",
      lastMessage: "Hey there !",
      chatId: "2",
    },
    {
      name: "Guy 1",
      lastMessage: "Hi",
      chatId: "3",
    },
  ],
};

export default data;
