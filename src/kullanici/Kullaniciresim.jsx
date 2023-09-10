import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth, storage } from "../firebase/config";
import { toast } from "react-toastify";

const Kullaniciresim = ({ onThumbnailChange }) => {
  const [thumbnail, setThumbnail] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const [photo, setPhoto] = useState(user.photoURL || "");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (user && user.photoURL) {
      setPhoto(user.photoURL);
    }
  }, [user]);

  async function handleChange(e) {
    if (e.target.files[0]) {
      setThumbnail(e.target.files[0]);
      onThumbnailChange(e.target.files[0]);
    }
  }

  async function handleUpload() {
    if (thumbnail) {
      const filepath = `thumbnails/${user.uid}/${thumbnail.name}`;
      const storageRef = ref(storage, filepath);
      
      try {
        await uploadBytes(storageRef, thumbnail);
        const imgUrl = await getDownloadURL(storageRef);

        await updateProfile(auth.currentUser, {
          photoURL: imgUrl,
        });

        // Resmi güncelledikten sonra, state'i ve localStorage'i güncelle
        setPhoto(imgUrl);
        
        localStorage.setItem("userPhotoURL", imgUrl); // Resmi localStorage'a kaydet
        if(imgUrl){
          toast.success("resim başarıyla güncellendi")
        }
      } catch (error) {
        console.error("Resim yükleme hatası:", error);
      }
    }
  }

  return (
    <div className="kullaniciresim">
    <input type="file" onChange={handleChange} />
      <button className="btn" onClick={handleUpload}>Resmi Yükle</button>
  </div>
  );
};

export default Kullaniciresim;
