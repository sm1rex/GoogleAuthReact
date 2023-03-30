import React, {useState} from "react";
import {auth, db} from '../firebase';
import {addDoc, collection, serverTimestamp} from "firebase/firestore";

const SendMessage = () => {

    const [message, setMessage] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault(); // метод события
        if(message.trim() === "") {
            alert("Enter valid message");
            return;
        }
        const {uid, displayName, photoURL} = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message, 
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(), // записывает текщюю дату на сервере
            uid
        });
        setMessage("");
    }

    return (
        <form onSubmit={(event) => sendMessage(event)} className="send-message">
            <label htmlFor="messageInput" hidden>
                Enter Message
            </label>

            <input
                id="messageInput"
                name="messageInput"
                type="text"
                className="form-input__input"
                placeholder="type message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></input>

            <button type="submit">Send</button>
        </form>
    )
}

export default SendMessage;