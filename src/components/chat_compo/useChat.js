import { useEffect, useState  } from "react";
import { db } from "../../firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

export const useChat = () => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [messages, setMessages] = useState([])

  useEffect(() => {
      const unsubscribe = onSnapshot(
        collection(db, 'chats2'),
        snapshot => {
          setLoading(false)
          setMessages(snapshot.docs.map(d => ({
            id: d.id, ...d.data() })));
        },
        err => {
          setError(err)
        }
      );
      return () => unsubscribe()
    },
    [setMessages]
  )

  return { error, loading, messages, }
}