import { useState, useEffect, useRef } from "react";
import { Cucumber } from "./components/Cucumber"
import { CreativeBlock } from "./components/CreativeBlock"

/**
 *  1. Find a cucumber sprite and add to Cucumber.js
 *  2. Position Cucumber on the game (bottom - middle)
 *  3. Find creative block sprite and create component
 */

function App() {
  const [blocks, setBlocks] = useState([]);
  const ref = useRef();

  function generateBlock() {
    return {
      x: Math.floor(Math.random() * (ref.current.clientWidth - 100)) + 1,
      y: 0,
    }
  }

  useEffect(() => {
    window.setInterval(() => {
      setBlocks(blocks => {
        const cleanBlocks = blocks.filter(block => block.y < ref.current.clientHeight);
        return [...cleanBlocks, generateBlock()]
      });
    }, 500);

    window.setInterval(() => {
      setBlocks(blocks => {
        return blocks.map(block => ({ y: block.y + 20, x: block.x }))
      })
    }, 20)
  }, [])

  useEffect(() => {
    console.log(blocks.length)
  }, [blocks.length])

  return (
    <div ref={ref} className="game">
      {blocks.map((block, i) => <CreativeBlock block={block} />)}
      <Cucumber />
    </div>
  );
}

export default App;
