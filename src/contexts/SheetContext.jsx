import React, { createContext, useState } from 'react'

export const Sheet = createContext({});

function SheetContext({children}) {
  const [sheet, setSheet] = useState({});
  const [selectedCell, setSelectedCell] = useState([0, 0]);

  return (
    <Sheet.Provider value={{sheet, setSheet, selectedCell, setSelectedCell}}>
      {children}
    </Sheet.Provider>
  )
}

export default SheetContext
