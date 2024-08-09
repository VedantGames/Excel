import React, { useState } from 'react'
import menus from '../data/Menus';

function Ribbon() {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  return (
    <div className='h-28 px-4 py-2 bg-gray text-white flex'>
      {menus.length > 0 && menus.filter(menu => menu.label == selectedMenu)[0].blocks.map(block => (
        <div key={block.label + Math.random()} className='flex'>
          <div className='flex flex-col items-center w-max h-full justify-between'>
            <div className='h-full'>
              {React.createElement(block.instance)}
            </div>
            {block.label}
          </div>
          <div className='h-full'>
            <div className='border-l border-white opacity-50 h-full mx-2'></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ribbon
