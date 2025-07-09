import type { Chat, ChatItem } from "./dataStructures.types";

export interface ChatWindowProps {
  chat: ChatProps;
}

export interface ChatProps {
  chat: Chat[];
  chatName: string;
}

export interface ChatListProps {
  chatList: ChatItem[];
  selectedChat: string;
  onSelect: (value: string) => void;
  width: string;
}
