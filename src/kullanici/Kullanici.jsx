import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Kullanicipas from './Kullanicipas';
import Kullaniciresim from './Kullaniciresim';

const Kullanici = () => {
  const [selectedTab, setSelectedTab] = useState('kullanicipas');
  const [thumbnail, setThumbnail] = useState(null);

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleThumbnailChange = (newThumbnail) => {
    setThumbnail(newThumbnail);
  };

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    // localStorage'dan kaydedilmiş profil resmi URL'sini al
    const storedPhotoURL = localStorage.getItem('userPhotoURL');
    
    // Eğer localStorage'da kayıtlı bir URL varsa, bu URL'yi kullan
    if (storedPhotoURL) {
      setThumbnail(storedPhotoURL);
    }
  }, []);

  return (
    <div className='container-kullanici'>
      <div className='left-kullanici'>
        <div className="kullanici-image">
          {thumbnail && <div><p><img src={thumbnail} alt="" /></p></div>}
          <h2>{user.displayName}</h2>
        </div>
        <div className='kullanici-parola'>
          <span onClick={() => handleTabClick('kullanicipas')}>Parola Değiştir</span>
          <span onClick={() => handleTabClick('kullaniciresim')}>Resim Değiştir</span>
        </div>
      </div>
      <div className='right-kullanici'>
        {selectedTab === 'kullanicipas' && <Kullanicipas />}
        {selectedTab === 'kullaniciresim' && <Kullaniciresim onThumbnailChange={(thumbnail) => {
          handleThumbnailChange(thumbnail);
          localStorage.setItem('userPhotoURL', thumbnail);
        }} />}
      </div>
    </div>
  );
}

export default Kullanici;
