import { MenuList } from "./components/MenuList/MenuList"
import { GlobalStyle } from "./components/globalStyle"
import data from "./data/data.json"

function App() {
  return (
    <>
      <MenuList data={data} />
      <GlobalStyle />
    </>
  )
}

export default App
