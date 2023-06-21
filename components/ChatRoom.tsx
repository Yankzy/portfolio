import React, { useState, useEffect, useRef, useContext } from "react";
import { Message } from "./Message";
import Input from "./Input";
import { DocumentData, DocumentReference, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { getRandomGreeting, systemRole, updateFireStore, useChatContext } from "./utils/chatUtils";
import { ulid } from "ulid";
import { ChatContext } from "./ChatContext";



interface User {
  email: string;
  name: string;
}

export default function ChatRoom() {
  // const [messages, setMessages] = useState<Array<DocumentData> | undefined>([]);
  // const { chatList, setChatList } = useChatContext();
  const scrollRef = useRef<HTMLDivElement>(null);
  // const [roomRef, setRoomRef] = useState<DocumentReference<DocumentData>>();
  const { state, dispatch } = useContext(ChatContext);
  const { chatsRef, user, chatList, messages } = state;
  const {email, name } = user;
  const isMounted = useRef(false);
  
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    
    if (chatList.length < 1) {
      const greet = getRandomGreeting(name)
      dispatch({ type: 'CHAT_LIST', payload: [
        { role: 'system', content: systemRole(name) }, 
        { role: 'assistant', content: greet }
      ] })
      updateFireStore(chatsRef, greet, email, true);
    }
  }, [chatsRef]) //eslint-disable-line

  

  useEffect(() => { 
    if (!chatsRef) return;
    const unsub = onSnapshot(chatsRef, (doc) => {
      if (doc.exists() && Object.keys(doc.data().messages || {}).length > 0) {
        dispatch({ type: 'MESSAGES', payload: doc.data().messages });
      }

    });

    return () => {
      unsub();
    };

  },[chatsRef]); //eslint-disable-line

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);
  
  

  return (
    <div className="lg:col-span-2 lg:block">
      <div className="w-full">

        <div className="relative w-full p-6 overflow-y-auto h-[60rem] bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
          <ul className="space-y-2">
            {messages?.map((message: DocumentData) => (
              <div key={message.createdAt} ref={scrollRef}>
                <Message 
                  user={message.user} 
                  text={message.text} 
                  createdAt={message.createdAt} 
                />
              </div>
            ))}
          </ul>
        </div>

        <Input />
      </div>
    </div>
  );
}
