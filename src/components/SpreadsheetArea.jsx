import React, { useContext, useState } from 'react'
import { Sheet } from '../contexts/SheetContext';
import cell from '../data/Cell';

var maxRows = 100;
var maxCols = 50;

function RowBar({scrollTop}) {
  return (
    <div className={'text-lwhite bg-gray text-sm absolute'} style={{top: -scrollTop + 20 + 'px'}}>
      {maxRows > 0 && Array(maxRows).fill(0).map((row, i) => (
        <div key={i} className='flex items-center justify-center size-5 border-b border-lg'>
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
        <div key={i} className='h-min w-16'>
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

function Grid({setScrollTop, selectedCell, setSelectedCell, selectionChanged, setSelectionChanged, typingStarted, setTypingStarted, sheet, setSheet}) {
  onkeyup = ev => {
    ev.preventDefault();
    if (ev.key == 'Enter' || ev.key == 'ArrowDown') {
      setSelectedCell([selectedCell[0], selectedCell[1] + (selectedCell[1] < maxCols ? 1 : 0)]);
      setSelectionChanged(true);
      setTypingStarted(false);
    }
    else if (ev.key == 'ArrowUp') {
      setSelectedCell([selectedCell[0], selectedCell[1] - (selectedCell[1] > 0 ? 1 : 0)]);
      setSelectionChanged(true);
      setTypingStarted(false);
    }
    else if (ev.key == 'Tab' || ev.key == 'ArrowRight') {
      setSelectedCell([selectedCell[0]+1, selectedCell[1]]);
      setSelectionChanged(true);
      setTypingStarted(false);
    }
    else if (ev.key == 'ArrowLeft') {
      setSelectedCell([selectedCell[0]-1, selectedCell[1]]);
      setSelectionChanged(true);
      setTypingStarted(false);
    }
    else if (selectionChanged) {
      setTypingStarted(true);
      setSelectionChanged(false);
    }
  }

  return (
    <div 
      className='flex flex-col mt-5 h-full min-w-max overflow-scroll' 
      onScroll={scroll => setScrollTop(scroll.target.scrollTop)}
    
    >
      {maxRows > 0 && Array(maxRows).fill(0).map((row, y) => (
        <div key={y} className='flex w-full h-5'>
          {maxCols > 0 && Array(maxCols).fill(0).map((col, x) => (
            <div 
            key={x+y}
            className={'w-16 h-5 overflow-visible text-xs ' + (selectedCell[0] == x && selectedCell[1] == y ? 'outline outline-2 outline-green border-0 z-10' : (sheet[[x, y]]?.style.font.bgColor != null ? '' : 'outline outline-1 outline-dwhite')) + (sheet[[x, y]]?.style.font.textColor == null ? ' text-transparent' : '')}
            style={{
              backgroundColor: sheet[[x, y]]?.style.font.bgColor,
              color: sheet[[x, y]]?.style.font.textColor,
              fontSize: sheet[[x, y]]?.style.font.textSize + 'px',
              fontFamily: sheet[[x, y]]?.style.font.fontFamily,
              fontWeight: sheet[[x, y]]?.style.font.fontWeight,
              fontStyle: sheet[[x, y]]?.style.font.fontStyle,
              textDecoration: sheet[[x, y]]?.style.font.textDecoration,
              textAlign: sheet[[x, y]]?.style.alignment.align,
              textAnchor: sheet[[x, y]]?.style.alignment.anchor
            }}
            onClick={() => {
              if (!(selectedCell[0] == x && selectedCell[1] == y)) {
                setSelectedCell([x, y]);
                setSelectionChanged(true);
                setTypingStarted(false);
              } else {
                setSelectionChanged(false);
                setTypingStarted(true);
              }
            }}
            >
              {(typingStarted && selectedCell[0] == x && selectedCell[1] == y) ? (
                <input 
                  type="text"
                  className='size-full'
                  style={{backgroundColor: sheet[[x, y]]?.style.font.bgColor}}
                  autoFocus
                  onChange={ev => {
                    let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
                    tcell.style.font.value = ev.target.value;
                    setSheet({...sheet, [selectedCell]: tcell});
                  }}
                  value={sheet[[x, y]]?.style.font.value}
                />
              ) : (
                <div style={{backgroundColor: sheet[[x, y]]?.style.font.bgColor}}>
                  {sheet[[x, y]]?.style.font.value}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function SpreadsheetArea() {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [selectionChanged, setSelectionChanged] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);

  const {sheet, setSheet, selectedCell, setSelectedCell} = useContext(Sheet);

  return (
    <div className='h-full w-full overflow-hidden flex flex-col'>
      <div className='w-full bg-gray pl-2 px-5 pb-1 flex gap-3'>
        <div className='bg-sg border border-lg min-w-14 px-2 py-0.5 text-white text-sm'>
            {(selectedCell[0]-(26*27)+1) > 0 && String.fromCharCode(65 + ((((selectedCell[0]-26)/26)-26)%26)/26)}
            {(selectedCell[0]-25) > 0 && String.fromCharCode(65 + ((selectedCell[0]-26)/26)%26)}
            {String.fromCharCode(65 + selectedCell[0]%26)}
            {selectedCell[1]}
        </div>
        <input 
          className='bg-sg border border-lg text-white pl-2 w-full'
          value={(sheet[selectedCell] != null ? sheet[selectedCell]?.style.font.value : '')}
          onChange={ev => {
            let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
            tcell.style.font.value = ev.target.value;
            setSheet({...sheet, [selectedCell]: tcell});
          }}
        >

        </input>
      </div>
      <div className='h-full w-full overflow-hidden flex  relative'>
        <div className='flex flex-col'>
          <div className='bg-gray border-r border-b border-lg min-h-5 min-w-5 z-50'></div>
          <RowBar scrollTop={scrollTop} />
        </div>
        <div className='flex flex-col'>
          <ColBar scrollLeft={scrollLeft} />
          <div className='flex h-full w-svw overflow-x-scroll' onScroll={scroll => setScrollLeft(scroll.target.scrollLeft)}>
            <Grid 
              setScrollTop={setScrollTop} 
              selectedCell={selectedCell} 
              setSelectedCell={setSelectedCell} 
              selectionChanged={selectionChanged}
              setSelectionChanged={setSelectionChanged}
              typingStarted={typingStarted}
              setTypingStarted={setTypingStarted}
              sheet={sheet}
              setSheet={setSheet}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpreadsheetArea
