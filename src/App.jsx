import MenuBar from "./components/MenuBar"
import Ribbon from "./components/Ribbon"
import SpreadsheetArea from "./components/SpreadsheetArea"
import TitleBar from "./components/TitleBar"
import SheetContext from "./contexts/SheetContext"

function App() {

  return (
    <div className="font-body h-svh w-svw overflow-hidden">
      <SheetContext>
        <TitleBar />
        <MenuBar />
        <Ribbon />
        <SpreadsheetArea />
      </SheetContext>
    </div>
  )
}

export default App
