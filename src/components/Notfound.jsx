import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='notfound'>
        <h1>Böyle bir sayfa yok</h1>
        <Link to="/">Anasayfaya Gitmek İçin Tıkla</Link>
    </div>
  )
}

export default Notfound