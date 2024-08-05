import React, { useState } from 'react'
import menus from '../data/Menus'

function MenuBar() {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  return (
    <div className='bg-black text-white flex items-center px-2 h-8 text-sm'>
      {menus.length > 0 && menus.map(menu => (
        <div className={'px-3 flex items-center justify-center h-full ' + (selectedMenu === menu.label ? 'bg-gray' : 'bg-transparent')} key={menu.label}>
          {menu.label}
        </div>
      ))}
    </div>
  )
}

export default MenuBar
