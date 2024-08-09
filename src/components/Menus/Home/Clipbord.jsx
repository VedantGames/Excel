import React from 'react'

function Clipbord() {
  return (
    <div className='w-max flex justify-center items-center gap-2'>
      <div className='flex flex-col gap-0.5 py-2 px-1 hover:outline outline-1 outline-lg'>
        <img src="/Images/Menus/Home/Clipboard/PasteIcon.png"/>
        Paste
      </div>
      <div>
        <div className='flex gap-1 bg-transparent hover:bg-lg'>
          <img src="/Images/Menus/Home/Clipboard/CutIcon.png"/>
          Cut
        </div>
        <div className='flex gap-1 bg-transparent hover:bg-lg'>
          <img src="/Images/Menus/Home/Clipboard/CopyIcon.png"/>
          Copy
        </div>
        <div className='flex gap-1 bg-transparent hover:bg-lg'>
          <img src="/Images/Menus/Home/Clipboard/FormatPainterIcon.png"/>
          Format Painter
        </div>
      </div>
    </div>
  )
}

export default Clipbord
