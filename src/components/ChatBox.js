import React, {useEffect, useRef, useState} from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";
import {db} from "../firebase";
import SendMessage from "./SendMessage";
import Message from "./Message";

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(50)
        );

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            })
            setMessages(messages);
        });

        return () => unsubscribe;
    }, []);

    return (
        <main className="chat-box">
            <div className="messages-wrapper">
                {messages?.map((message) => (
                    <Message key={message.id} message={message}></Message>
                ))}
            </div>
            <span ref={scroll}></span>
            <SendMessage></SendMessage>
        </main>
    )
}

export default ChatBox;