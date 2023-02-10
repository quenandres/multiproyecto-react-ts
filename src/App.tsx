import { Route, Routes } from "react-router-dom"
import MemoTest from "./screens/MemoTest"
import Pokemon from "./screens/Pokemon"
import WordsPerMinute from "./screens/WordsPerMinute"

function App() {

  return (
    <Routes>
      <Route path="/memotest" element={<MemoTest />} />
      <Route path="/pokemon" element={<Pokemon />} />
      <Route path="/wpn" element={<WordsPerMinute />} />
    </Routes>
  )
}

export default App
