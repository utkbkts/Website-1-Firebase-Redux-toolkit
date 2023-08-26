import React, { useEffect, useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
import Transition from './Transition';

const Contact = () => {
  const [text, setText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      return toast.error("Boş mesaj gönderilemez");
    }

    const lastSubmission = localStorage.getItem("lastsubmission");
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;

    if (lastSubmission && lastSubmission > fiveMinutesAgo) {
      return toast.error("Sonraki mesaj için 5 dakika bekleyiniz.");
    }

    try {
      const docRef = await addDoc(collection(db, "formmesaj"), {
        text
      });

      localStorage.setItem("lastsubmission", Date.now());
      toast.success("Mesajınız başarıyla gönderildi");
      setIsSubmitted(true);
      setText("");
    } catch (error) {
      toast.error("Mesaj gönderilirken bir hata oluştu", error);
    }
  };




  return (
    <div className='contact-form'>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Mesajınızı giriniz'
        ></textarea>
        <button type='submit'>Gönder</button>
      </form>
    </div>
  );
};

export default Transition(Contact);
