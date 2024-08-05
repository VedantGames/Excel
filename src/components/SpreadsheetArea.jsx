import React, { useState } from 'react'

var maxRows = 100;
var maxCols = 50;

function RowBar({scrollTop}) {
  return (
    <div className={'text-lwhite bg-gray text-sm absolute'} style={{top: -scrollTop + 20 + 'px'}}>
      {maxRows > 0 && Array(maxRows).fill(0).map((row, i) => (
        <div className='flex items-center justify-center size-5 border-b border-lg'>
          {i+1}
        </div>
      ))}
    </div>
  )
}

function ColBar({scrollLeft}) {
  return (
    <div className='flex bg-gray text-sm text-lwhite h-min absolute' style={{left: -scrollLeft + 20 + 'px'}}>
      {maxCols > 0 && Array(maxCols).fill(0).map((col, i) => (
        <div className='h-min w-16'>
          <div className='flex items-center justify-center h-min border-r border-b border-lg'>
            {(i-(26*27)+1) > 0 && String.fromCharCode(65 + ((((i-26)/26)-26)%26)/26)}
            {(i-25) > 0 && String.fromCharCode(65 + ((i-26)/26)%26)}
            {String.fromCharCode(65 + i%26)}
          </div>
        </div>
      ))}
    </div>
  )
}

function Grid({setScrollTop, selectedCell, setSelectedCell}) {
  return (
    <div className='flex flex-col mt-5 h-full min-w-max overflow-scroll' onScroll={scroll => setScrollTop(scroll.target.scrollTop)}>
      {maxRows > 0 && Array(maxRows).fill(0).map((row, y) => (
        <div className='flex w-full h-5'>
          {maxCols > 0 && Array(maxCols).fill(0).map((col, x) => (
            <div 
              className={'w-16 h-5 overflow-hidden text-xs ' + (selectedCell[0] == x && selectedCell[1] == y ? 'outline outline-2 outline-green border-0 z-10' : 'border-r border-b border-dwhite')} 
              onClick={() => setSelectedCell([x, y])}
            ></div>
          ))}
        </div>
      ))}
    </div>
  )
}

function SpreadsheetArea() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [selectedCell, setSelectedCell] = useState([null, null]);

  return (
    <div className='h-full w-full overflow-hidden flex flex-col'>
      <div className='w-full bg-gray pl-2 px-5 pb-1 flex gap-3'>
        <div className='bg-sg border border-lg min-w-14 px-2 py-0.5 text-white text-sm'>
            {(selectedCell[0]-(26*27)+1) > 0 && String.fromCharCode(65 + ((((selectedCell[0]-26)/26)-26)%26)/26)}
            {(selectedCell[0]-25) > 0 && String.fromCharCode(65 + ((selectedCell[0]-26)/26)%26)}
            {String.fromCharCode(65 + selectedCell[0]%26)}
            {selectedCell[1]}
        </div>
        <div className='bg-sg border border-lg w-full'>

        </div>
      </div>
      <div className='h-full w-full overflow-hidden flex  relative'>
        <div className='flex flex-col'>
          <div className='bg-gray border-r border-b border-lg min-h-5 min-w-5 z-50'></div>
          <RowBar scrollTop={scrollTop} />
        </div>
        <div className='flex flex-col'>
          <ColBar scrollLeft={scrollLeft} />
          <div className='flex h-full w-svw overflow-x-scroll' onScroll={scroll => setScrollLeft(scroll.target.scrollLeft)}>
            <Grid setScrollTop={setScrollTop} selectedCell={selectedCell} setSelectedCell={setSelectedCell} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpreadsheetArea
