import React, { useEffect } from 'react'
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
const Toggle = () => {
const updategretin = () => {
  const current = new Date().getHours();

  if (current >= 0 && current <= 12) {
    return <Sun />;
  } else if (current >= 12 && current <= 18) {
    return <Sun />;
  } else {
    return <Moon />;
  }
};
useEffect(() => {
  updategretin();
}, []);

  return (
    <div className='toggle'>
      {updategretin()}
    </div>
  )
}

export default Toggle