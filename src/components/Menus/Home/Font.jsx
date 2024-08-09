import React, { useContext, useState } from 'react'
import { Sheet } from '../../../contexts/SheetContext'
import cell from '../../../data/Cell';

function ColorSelector({forBG, setVisible, setSelectedBGColor, setSelectedTextColor, sheet, setSheet, selectedCell}) {
  const majorPalet = ['#FFFFFF',	'#000000',	'#E7E6E6',	'#44546A',	'#4472C4',	'#ED7D31',	'#A5A5A5',	'#FFC000',	'#5B9BD5',	'#70AD47'];

  const themePalets = [
    ['#F2F2F2', '#808080', '#D0CECE', '#D6DCE4', '#D9E1F2', '#FCE4D6', '#EDEDED', '#FFF2CC', '#DDEBF7', '#E2EFDA'],
    ['#D9D9D9', '#595959', '#AEAAAA', '#ACB9CA', '#B4C6E7', '#F8CBAD', '#DBDBDB', '#FFE699', '#BDD7EE', '#C6E0B4'],
    ['#BFBFBF', '#404040', '#757171', '#8497B0', '#8EA9DB', '#F4B084', '#C9C9C9', '#FFD966', '#9BC2E6', '#A9D08E'],
    ['#A6A6A6', '#262626', '#3A3838', '#333F4F', '#305496', '#C65911', '#7B7B7B', '#BF8F00', '#2F75B5', '#548235'],
    ['#808080', '#0D0D0D', '#161616', '#222B35', '#203764', '#833C0C', '#525252', '#806000', '#1F4E78', '#375623']
  ]

  const standardPalet = ['#C00000',	'#FF0000',	'#FFC000',	'#FFFF00',	'#92D050',	'#00B050',	'#00B0F0',	'#0070C0',	'#002060',	'#7030A0']
  
  return (
    <div className='absolute top-8 left-36 min-w-max z-10 rounded-md text-xs overflow-hidden bg-gray border border-dwhite pb-1'>
      <div className='px-1 py-0.5 bg-sg font-bold'>Theme Colors</div>
      <div className='flex flex-col gap-1.5 px-1 py-1'>
        <div className='flex gap-1'>
          {majorPalet.length > 0 && majorPalet.map(color => (
            <button 
              key={color} 
              className='size-3 cursor-pointer hover:outline outline-1 outline-orange' 
              style={{backgroundColor: color}}
              onClick={() => {
                if(!forBG) {
                  let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
                  tcell.style.font.textColor = color;
                  setSheet({...sheet, [selectedCell]: tcell});
                } else {
                  let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
                  tcell.style.font.bgColor = color;
                  setSheet({...sheet, [selectedCell]: tcell});
                }
                forBG ? setSelectedBGColor(color) : setSelectedTextColor(color);
                setVisible(false)
              }}
            ></button>
          ))}
        </div>
        <div className='grid grid-cols-10 gap-x-1'>
          {themePalets.length > 0 && themePalets.map(palet => (
            palet.map(color => (
              <button 
                key={color} 
                className='size-3 cursor-pointer hover:outline outline-1 outline-orange' 
                style={{backgroundColor: color}}
                onClick={() => {
                  if(!forBG) {
                    let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
                    tcell.style.font.textColor = color;
                    setSheet({...sheet, [selectedCell]: tcell});
                  } else {
                    let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
                    tcell.style.font.bgColor = color;
                    setSheet({...sheet, [selectedCell]: tcell});
                  }
                  forBG ? setSelectedBGColor(color) : setSelectedTextColor(color);
                  setVisible(false)
                }}
              ></button>
            ))
          ))}
        </div>
        <div className='px-1 py-0.5 bg-sg font-bold'>Standard Colors</div>
        <div className='flex gap-1'>
          {standardPalet.length > 0 && standardPalet.map(color => (
            <button 
              key={color} 
              className='size-3 cursor-pointer hover:outline outline-1 outline-orange' 
              style={{backgroundColor: color}}
              onClick={() => {
                if(!forBG) {
                  let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
                  tcell.style.font.textColor = color;
                  setSheet({...sheet, [selectedCell]: tcell});
                } else {
                  let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
                  tcell.style.font.bgColor = color;
                  setSheet({...sheet, [selectedCell]: tcell});
                }
                forBG ? setSelectedBGColor(color) : setSelectedTextColor(color);
                setVisible(false)
              }}
            ></button>
          ))}
        </div>
      </div>
      <div 
        className='bg-sg hover:bg-xsg font-bold px-4 py-0.5 mt-1 cursor-pointer'
        onClick={() => {
          if(!forBG) {
            let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
            tcell.style.font.textColor = null;
            setSheet({...sheet, [selectedCell]: tcell});
          } else {
            let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
            tcell.style.font.bgColor = null;
            setSheet({...sheet, [selectedCell]: tcell});
          }
          forBG ? setSelectedBGColor(null) : setSelectedTextColor(null);
          setVisible(false)
        }}
      >No Fill</div>
    </div>
  )
}

function Font() {
  const {sheet, setSheet, selectedCell} = useContext(Sheet);

  const [selectedBGColor, setSelectedBGColor] = useState('#ffff00');
  const [selectedTextColor, setSelectedTextColor] = useState('#ff0000');

  const [paletVisible, setPaletVisible] = useState(false);
  const [forBG, setForBG] = useState(false);

  return (
    <div className='flex flex-col gap-1 justify-center h-full'>
      <div className='flex gap-0.5'>
        <select 
          name="Fonts" 
          id="FontsSelector" 
          className='w-full h-full bg-sg border border-lg'
          value={sheet[selectedCell] ? sheet[selectedCell]?.style.font.fontFamily : 'Calibri'}
          onChange={ev => {
            let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
            tcell.style.font.fontFamily = ev.target.value;
            setSheet({...sheet, [selectedCell]: tcell});
          }}
        >
          <option value="Calibri">Calibri</option>
          <option value="Arial">Arial</option>
          <option value="Sans-sarif">Sans sarif</option>
          <option value="Monospace">Monospace</option>
          <option value="Cursive">Cursive</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        <input 
          type="number" 
          placeholder={11} 
          value={sheet[selectedCell] ? sheet[selectedCell]?.style.font.textSize : 11}
          onChange={ev => {
            let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
            tcell.style.font.textSize = ev.target.value;
            setSheet({...sheet, [selectedCell]: tcell});
          }}
          className='w-10 h-full pb-0.5 bg-sg border border-lg'
        />
        <button
          className='bg-transparent hover:bg-lg active:bg-sg px-1.5 cursor-pointer'
          onClick={ev => {
            let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
            tcell.style.font.textSize = sheet[selectedCell]?.style.font.textSize + 1;
            setSheet({...sheet, [selectedCell]: tcell});
          }}
        >A</button>
        <button
          className='text-sm flex items-end justify-center bg-transparent hover:bg-lg active:bg-sg px-1.5 cursor-pointer'
          onClick={ev => {
            let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
            tcell.style.font.textSize = sheet[selectedCell]?.style.font.textSize - 1;
            setSheet({...sheet, [selectedCell]: tcell});
          }}
        >A</button>
      </div>
      <div className='flex gap-0.5 mt-0.5 relative'>
        <div className='flex gap-0.5'>
          <button 
            className={'px-2 hover:bg-lg ' + (sheet[selectedCell]?.style.font.fontWeight == 900 ? 'bg-sg' : '')}
            onClick={() => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.font.fontWeight = tcell.style.font.fontWeight == 900 ? 500 : 900;
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          ><b>B</b></button>
          <button 
            className={'px-2 hover:bg-lg ' + (sheet[selectedCell]?.style.font.fontStyle == 'italic' ? 'bg-sg' : '')}
            onClick={() => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.font.fontStyle = tcell.style.font.fontStyle === 'italic' ? 'normal' : 'italic';
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          ><i>I</i></button>
          <button 
            className={'px-2 hover:bg-lg ' + (sheet[selectedCell]?.style.font.textDecoration == 'underline' ? 'bg-sg' : '')}
            onClick={() => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.font.textDecoration = tcell.style.font.textDecoration === 'underline' ? 'none' : 'underline';
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          ><u>U</u></button>
        </div>
        <div className='h-5 mt-0.5'>
            <div className='border-l border-white opacity-50 h-full mx-1'></div>
        </div>
        <div className='flex gap-0.5 px-0.5 hover:outline outline-1 outline-lg'>
          <img src="/Images/Menus/Home/Font/BorderIcon.png" className='size-5 mt-1 object-contain'/>
          <img src="/Images/Menus/Home/Font/DropdownIcon.png" className='mt-1' alt="" />
        </div>
        <div className='h-5 mt-0.5'>
            <div className='border-l border-white opacity-50 h-full mx-1'></div>
        </div>
        <div className='flex px-0.5 hover:outline outline-1 outline-lg'>
          <button 
            className='flex items-center justify-center flex-col'
            onClick={ev => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.font.bgColor = selectedBGColor;
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          >
            <img src="/Images/Menus/Home/Font/PaintBucketIcon.png" className='size-5 object-contain'/>
            <div 
              className={'w-full h-1.5 ' + (selectedBGColor == null && 'border border-dwhite')}
              style={{backgroundColor: selectedBGColor}}
            ></div>
          </button>
          <img 
            src="/Images/Menus/Home/Font/DropdownIcon.png" 
            className='mt-1 cursor-pointer' 
            onClick={() => {
                setForBG(true);
                setPaletVisible(true);
              }}
          />
        </div>
        {paletVisible && <ColorSelector forBG={forBG} setVisible={setPaletVisible} setSelectedBGColor={setSelectedBGColor} setSelectedTextColor={setSelectedTextColor} sheet={sheet} setSheet={setSheet} selectedCell={selectedCell} />}
        <div className='flex px-0.5 hover:outline outline-1 outline-lg'>
          <button 
            className='flex items-center justify-center flex-col w-4'
            onClick={ev => {
              let tcell = sheet[selectedCell] ? sheet[selectedCell] : new cell(sheet[selectedCell]?.style.font.value);
              tcell.style.font.textColor = selectedTextColor;
              setSheet({...sheet, [selectedCell]: tcell});
            }}
          >
            <div className='text-slate-200'>A</div>
            <div 
              className={'w-full h-1.5 -mt-1 ' + (selectedTextColor == null && 'border border-dwhite')}
              style={{backgroundColor: selectedTextColor}}
            ></div>
          </button>
          <img 
            src="/Images/Menus/Home/Font/DropdownIcon.png" 
            className='mt-1 cursor-pointer' 
            onClick={() => {
                setForBG(false);
                setPaletVisible(true);
              }}
          />
        </div>
      </div>
    </div>
  )
}

export default Font
