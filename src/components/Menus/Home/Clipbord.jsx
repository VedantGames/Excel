import React from 'react'

function Clipbord() {
  return (
    <div className='w-max flex justify-center items-center gap-2'>
      <div className='flex flex-col gap-0.5 py-2 px-1 hover:outline outline-1 outline-lg'>
        <img src="/Images/Menus/Home/Clipboard/PasteIcon.png" alt="" srcset="" />
        Paste
      </div>
      <div>
        <div className='flex gap-1 bg-transparent hover:bg-lg'>
          <img src="/Images/Menus/Home/Clipboard/CutIcon.png" alt="" srcset="" />
          Cut
        </div>
        <div className='flex gap-1 bg-transparent hover:bg-lg'>
          <img src="/Images/Menus/Home/Clipboard/CopyIcon.png" alt="" srcset="" />
          Copy
        </div>
        <div className='flex gap-1 bg-transparent hover:bg-lg'>
          <img src="/Images/Menus/Home/Clipboard/FormatPainterIcon.png" alt="" srcset="" />
          Format Painter
        </div>
      </div>
    </div>
  )
}

export default Clipbord
