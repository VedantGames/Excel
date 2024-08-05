import React from 'react'

function Alignment() {
  return (
    <div className='h-full flex'>
      <div className='flex justify-center items-center flex-col h-full'>
        <div className='flex'>
          <div className='size-7 flex items-start justify-center hover:bg-sg hover:outline outline-1 outline-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className='size-7 flex items-center justify-center hover:bg-sg hover:outline outline-1 outline-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div className='size-7 flex items-end justify-center hover:bg-sg hover:outline outline-1 outline-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
        <div className='flex'>
          <div className='size-7 flex items-center justify-center hover:bg-sg hover:outline outline-1 outline-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </div>
          <div className='size-7 flex items-center justify-center hover:bg-sg hover:outline outline-1 outline-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          <div className='size-7 flex items-center justify-center hover:bg-sg hover:outline outline-1 outline-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
          </div>
        </div>
      </div>
      <div className='h-full mt-0.5'>
            <div className='border-l border-white opacity-50 h-5/6 my-1.5 mx-1'></div>
      </div>
      <div className='flex flex-col justify-evenly px-1'>
        <div className='hover:outline outline-1 outline-lg px-0.5'>
          <img src="/Images/Menus/Home/Alignment/OrientationIcon.png" className='ml-0.5' alt="" srcset="" />
        </div>
        <div className='flex gap-1'>
          <img src="/Images/Menus/Home/Alignment/DecreaseIndentIcon.png" className='hover:outline outline-1 outline-lg p-0.5' alt="" srcset="" />
          <img src="/Images/Menus/Home/Alignment/IncreaseIndentIcon.png" className='hover:outline outline-1 outline-lg p-0.5' alt="" srcset="" />
        </div>
      </div>
      <div className='h-full mt-0.5'>
            <div className='border-l border-white opacity-50 h-5/6 my-1.5 mx-1'></div>
      </div>
      <div className='text-sm flex flex-col justify-center gap-3'>
        <div className='flex gap-1 hover:bg-sg hover:outline outline-1 outline-lg'>
          <img src="/Images/Menus/Home/Alignment/WarpIcon.png" alt="" srcset="" />
          Warp Text
        </div>
        <div className='flex gap-1 hover:bg-sg hover:outline outline-1 outline-lg pr-2'>
          <img src="/Images/Menus/Home/Alignment/MergeIcon.png" alt="" srcset="" />
          Merge & Center
        </div>
      </div>
    </div>
  )
}

export default Alignment
