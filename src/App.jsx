import MenuBar from "./components/MenuBar"
import Ribbon from "./components/Ribbon"
import SpreadsheetArea from "./components/SpreadsheetArea"
import TitleBar from "./components/TitleBar"

function App() {

  return (
    <div className="font-body h-svh w-svw overflow-hidden">
      <TitleBar />
      <MenuBar />
      <Ribbon />
      <SpreadsheetArea />
    </div>
  )
}

export default App
