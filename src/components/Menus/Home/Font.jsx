import React from 'react'

function Font() {
  return (
    <div className='flex flex-col gap-1 justify-center h-full'>
      <div className='flex gap-0.5'>
        <select name="Fonts" id="FontsSelector" className='w-full h-full bg-sg border border-lg'>
          <option value="Calibri">Calibri</option>
          <option value="Arial">Arial</option>
          <option value="Sans">Sans sarif</option>
          <option value="Roboto">Roboto</option>
          <option value="Yellowtail">Yellowtail</option>
        </select>
        <input type="number" placeholder={11} className='w-10 h-full pb-0.5 bg-sg border border-lg'/>
        <div className='bg-transparent hover:bg-lg px-1.5'>A</div>
        <div className='text-sm flex items-end justify-center bg-transparent hover:bg-lg px-1.5'>A</div>
      </div>
      <div className='flex gap-0.5 mt-0.5'>
        <div className='flex gap-0.5'>
          <div className='px-2 bg-transparent hover:bg-lg'><b>B</b></div>
          <div className='px-2 bg-transparent hover:bg-lg'><i>I</i></div>
          <div className='px-2 bg-transparent hover:bg-lg'><u>U</u></div>
        </div>
        <div className='h-5 mt-0.5'>
            <div className='border-l border-white opacity-50 h-full mx-1'></div>
        </div>
        <div className='flex gap-0.5 px-0.5 hover:outline outline-1 outline-lg'>
          <img src="/Images/Menus/Home/Font/BorderIcon.png" className='size-5 mt-1 object-contain' alt="" srcset="" />
          <img src="/Images/Menus/Home/Font/DropdownIcon.png" className='mt-1' alt="" />
        </div>
        <div className='h-5 mt-0.5'>
            <div className='border-l border-white opacity-50 h-full mx-1'></div>
        </div>
        <div className='flex px-0.5 hover:outline outline-1 outline-lg'>
          <div className='flex items-center justify-center flex-col'>
            <img src="/Images/Menus/Home/Font/PaintBucketIcon.png" className='size-5 object-contain' alt="" srcset="" />
            <div className='w-full h-1.5 bg-yellow-400'></div>
          </div>
          <img src="/Images/Menus/Home/Font/DropdownIcon.png" className='mt-1' alt="" />
        </div>
        <div className='flex px-0.5 hover:outline outline-1 outline-lg'>
          <div className='flex items-center justify-center flex-col w-4'>
            <div className='text-slate-200'>A</div>
            <div className='w-full h-1.5 -mt-1 bg-red-500'></div>
          </div>
          <img src="/Images/Menus/Home/Font/DropdownIcon.png" className='mt-1' alt="" />
        </div>
      </div>
    </div>
  )
}

export default Font
