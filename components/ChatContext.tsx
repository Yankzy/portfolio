import { DocumentData, DocumentReference, doc, setDoc } from 'firebase/firestore';
import React, { createContext, useReducer, Dispatch } from 'react';
import { db } from './firebase';
import { ulid } from 'ulid';

interface ChatState {
  chatsRef: DocumentReference<DocumentData> | null;
  user: { email: string, name: string };
  messages: Array<DocumentData>;
  chatList: Array<{ role: string, content: string }>

}

interface ChatAction {
  type: 'SET_USER' | 'MESSAGES' | 'CHAT_LIST';
  payload: any;
}

const INITIAL_STATE: ChatState = {
  chatsRef: null,
  user: {name: '', email: ''},
  messages: [],
  chatList: []
};

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'SET_USER':
      const { email, name } = action.payload;
      const chatsRef = doc(db, "porfolioChats", email, ulid(), "messages");
      setDoc(chatsRef, {});
      return { ...state, user: action.payload, chatsRef };

    case 'MESSAGES':
      return { ...state, messages: action.payload };

    case 'CHAT_LIST':
      return { ...state, chatList: action.payload };

    default:
      return state;
  }
};

export const ChatContext = createContext<{
  state: ChatState;
  dispatch: Dispatch<ChatAction>;
}>({
  state: INITIAL_STATE,
  dispatch: () => undefined,
});

interface ChatContextProviderProps {
  children: React.ReactNode;
}

export const ChatContextProvider: React.FC<ChatContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};