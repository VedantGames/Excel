import React from 'react'

function Number() {
  return (
    <div className='h-full flex flex-col justify-center gap-2'>
      <div>
        <select name="NumberType" id="NumberType" className='size-full bg-sg border border-lg'>
          <option value="General">General</option>
          <option value="Number">Number</option>
          <option value="Currency">Currency</option>
          <option value="Accounting">Accounting</option>
          <option value="Short">Short Date</option>
          <option value="Long">Long Date</option>
          <option value="Time">Time</option>
          <option value="Percentage">Percentage</option>
          <option value="Fraction">Fraction</option>
          <option value="Scientific">Scientific</option>
          <option value="Text">Text</option>
        </select>
      </div>
      <div className='flex'>
        <div className='flex'>
          <div className='px-2 hover:bg-sg hover:outline outline-1 outline-lg'>$</div>
          <div className='px-2 hover:bg-sg hover:outline outline-1 outline-lg'>%</div>
          <div className='px-2 hover:bg-sg hover:outline outline-1 outline-lg'>'</div>
        </div>
        <div className='h-5 mt-0.5'>
            <div className='border-l border-white opacity-50 h-full mx-1'></div>
        </div>
        <div className='flex gap-1.5 mx-1.5'>
          <img src="/Images/Menus/Home/Number/IncreaseDecimalIcon.png" className='hover:outline outline-1 outline-lg' alt="" srcset="" />
          <img src="/Images/Menus/Home/Number/DecreaseDecimalIcon.png" className='hover:outline outline-1 outline-lg' alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Number
