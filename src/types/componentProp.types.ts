import type { Chat } from "./dataStructures.types";

export interface ChatWindowProps {
  chat: ChatProps;
}

export interface ChatProps {
  chat: Chat[];
  chatName: string;
}
