import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux"
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import moment from "moment"
import "moment/locale/tr"
const Footer = () => {
  const [textarea, setTextarea] = useState("");
  const [messages, setMessages] = useState([]);
    const {user}=useSelector((state)=>state.auth)
    
    const sendMessage = async (user, message) => {
        try {
          const messageData = {
            user: user.displayName, // veya user.uid veya başka bir kimlik bilgisi
            message: message,
            timestamp: serverTimestamp(),
          };
      
          await addDoc(collection(db, "messages"), messageData);
        } catch (error) {
          console.error("Error sending message: ", error);
        }
      };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (textarea.trim() === "") {
      return;
    }

      if (user) {
        sendMessage(user, textarea);
        setTextarea("");
      }

}
useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messageList = [];
      snapshot.forEach((doc) => {
        messageList.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messageList);
    });

    return () => unsubscribe();
  }, []);
    return (
        <div className='container-footer'>
            <div className='baslik-footer'>
                <h3>
                    Sayfa Hakkındaki Düşüncelerini Yaz...<span>(üye olmadan yorum yapamazsın)</span>
                </h3>
            </div>
            <div className='messagealani'>
          {messages.map(message=>(
            <div>
            <div className='footer-tarih'>
                      <span>{message.user}</span>
                        {message.timestamp ? (
        <span>{moment(message.timestamp.toDate()).locale('tr').format('L')}</span>
      ) : null}
                    <div className='footer-message'>
                        <span>{message.message}</span>
                    </div>
                      </div>
          </div>
          ))}
            </div>
            <div className='messageformu'>
                <form onSubmit={handleSubmit}>
                    {!user ? (
                        <textarea
                        value={textarea}
                            disabled
                            onChange={(e) => setTextarea(e.target.value)}
                            placeholder='Mesajınızı Giriniz.'
                        ></textarea>
                    ) : (
                        <textarea
                        value={textarea}
                            onChange={(e) => setTextarea(e.target.value)}
                            placeholder='Mesajınızı Giriniz.'
                        ></textarea>
                    )}
                    {!user ? (
                        <button disabled>Gönder</button>
                    ) : (
                        <button className="btn" type='submit'>Gönder</button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Footer;
