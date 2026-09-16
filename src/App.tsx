import { useState } from 'react'
import './App.css'
import { PuzzleText } from './PuzzleText.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PuzzleText answer={'G\'Kar'} />
    </>
  )
}

export default App
