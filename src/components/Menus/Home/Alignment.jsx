import React, { useContext } from 'react'
import cell from '../../../data/Cell';
import { Sheet } from '../../../contexts/SheetContext';

function Alignment() {
  const {sheet, setSheet, selectedCell} = useContext(Sheet);

  return (
    <div className='h-full flex'>
      <div className='flex justify-center items-center flex-col h-full'>
        <div className='flex'>
          <div 
            className={'size-7 flex items-center justify-center cursor-pointer hover:bg-sg hover:outline outline-1 outline-lg ' + (sheet[selectedCell]?.style.alignment.anchor == 'top' ? 'bg-sg hover:bg-swhite' : '')}
            onClick={() => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.alignment.anchor = 'top';
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div 
            className={'size-7 flex items-center justify-center cursor-pointer hover:bg-sg hover:outline outline-1 outline-lg ' + (sheet[selectedCell]?.style.alignment.anchor == 'middle' ? 'bg-sg hover:bg-swhite' : '')}
            onClick={() => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.alignment.anchor = 'middle';
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div 
            className={'size-7 flex items-center justify-center cursor-pointer hover:bg-sg hover:outline outline-1 outline-lg ' + (sheet[selectedCell]?.style.alignment.anchor == 'bottom' ? 'bg-sg hover:bg-swhite' : '')}
            onClick={() => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.alignment.anchor = 'bottom';
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </div>
        <div className='flex'>
          <div 
            className={'size-7 flex items-start justify-center cursor-pointer hover:bg-sg hover:outline outline-1 outline-lg ' + (sheet[selectedCell]?.style.alignment.align == 'left' ? 'bg-sg hover:bg-swhite' : '')}
            onClick={() => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.alignment.align = 'left';
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </div>
          <div 
            className={'size-7 flex items-center justify-center cursor-pointer hover:bg-sg hover:outline outline-1 outline-lg ' + (sheet[selectedCell]?.style.alignment.align == 'center' ? 'bg-sg hover:bg-swhite' : '')}
            onClick={() => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.alignment.align = 'center';
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          <div 
            className={'size-7 flex items-end justify-center cursor-pointer hover:bg-sg hover:outline outline-1 outline-lg ' + (sheet[selectedCell]?.style.alignment.align == 'right' ? 'bg-sg hover:bg-swhite' : '')}
            onClick={() => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.alignment.align = 'right';
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          >
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
          <img src="/Images/Menus/Home/Alignment/OrientationIcon.png" className='ml-0.5' />
        </div>
        <div className='flex gap-1'>
          <img src="/Images/Menus/Home/Alignment/DecreaseIndentIcon.png" className='hover:outline outline-1 outline-lg p-0.5' />
          <img src="/Images/Menus/Home/Alignment/IncreaseIndentIcon.png" className='hover:outline outline-1 outline-lg p-0.5' />
        </div>
      </div>
      <div className='h-full mt-0.5'>
            <div className='border-l border-white opacity-50 h-5/6 my-1.5 mx-1'></div>
      </div>
      <div className='text-sm flex flex-col justify-center gap-3'>
        <div className='flex gap-1 hover:bg-sg hover:outline outline-1 outline-lg'>
          <img src="/Images/Menus/Home/Alignment/WarpIcon.png" />
          Warp Text
        </div>
        <div className='flex gap-1 hover:bg-sg hover:outline outline-1 outline-lg pr-2'>
          <img src="/Images/Menus/Home/Alignment/MergeIcon.png" />
          Merge & Center
        </div>
      </div>
    </div>
  )
}

export default Alignment
