export interface Chat {
  from: string;
  to: string;
  message: string;
  sentAt?: Date;
}

export interface ChatItem {
  name: string;
  lastMessage: string;
  avatar?: URL;
  chatId: string;
}

export interface UserData {
  username: string;
  chats: ChatItem[];
}

export interface ChatDetails {
  chatName: string;
  chat: Chat[];
}
