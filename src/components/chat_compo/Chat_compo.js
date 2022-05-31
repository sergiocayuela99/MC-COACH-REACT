import React from 'react';
import { useChat } from "./useChat";
import { db } from "../../firebase";
import { 
  collection, 
  addDoc, 
  orderBy, 
  query, 
  onSnapshot
 } from 'firebase/firestore';

function Chat() {

  const [text, setText] = React.useState('');
  const { loading, messages, error } = useChat();

  const sendMessage = (e) => {
    e.preventDefault();

    addDoc(collection(db, 'chats2'), {
      //timestamp: Date.now(),
      text
    });
    setText('')
  }

  return (
    <div>
      <div>
        <p>Escribe tu mensaje...</p>
        <form>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button type='submit' onClick={sendMessage}>Enviar mensaje</button>
        </form>
        <ul>
          {messages.map(m => <li key={m.id}>{m.text}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default Chat;