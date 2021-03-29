import * as React from "react";
import { Cucumber } from "./components/Cucumber";
import { Block } from "./components/Block";

/**
 *  1. Find a cucumber sprite and add to Cucumber.js
 *  2. Position Cucumber on the game (bottom - middle)
 *  3. Find creative block sprite and create component
 */

type Set<T> = React.Dispatch<React.SetStateAction<T>>;

interface ICucumber {
  left: number;
  bottom: number;
}

interface IBlock {
  left: number;
  top: number;
}

interface GameContext {
  cucumber: ICucumber;
  setCucumber: Set<ICucumber>;
  blocks: IBlock[];
  setBlocks: Set<IBlock[]>;
  ms: number;
}

export const GameContext = React.createContext<GameContext>({
  cucumber: {
    left: 100,
    bottom: 20,
  },
  setCucumber: () => {},
  blocks: [],
  setBlocks: () => {},
  ms: 0,
});

function App() {
  const [cucumber, setCucumber] = React.useState<ICucumber>({
    left: 100,
    bottom: 20,
  });
  const [blocks, setBlocks] = React.useState<IBlock[]>([]);
  const [ms, setMs] = React.useState<number>(0);
  const ref = React.useRef<HTMLDivElement>();

  // Game loop
  React.useEffect(() => {
    window.setInterval(() => {
      setMs((ms) => ms + 1);
    }, 1);
  }, []);

  // React.useEffect(() => {
  //   window.setInterval(() => {
  //     setBlocks((blocks) => {
  //       const cleanBlocks = blocks.filter(
  //         (block) => block.y < ref.current!.clientHeight
  //       );
  //       return [...cleanBlocks, generateBlock()];
  //     });
  //   }, 500);

  //   window.setInterval(() => {
  //     setBlocks((blocks) => {
  //       return blocks.map((block) => ({ y: block.y + 20, x: block.x }));
  //     });
  //   }, 20);
  // }, []);

  // React.useEffect(() => {
  //   console.log(blocks.length);
  // }, [blocks.length]);

  return (
    <GameContext.Provider
      value={{ cucumber, blocks, setCucumber, setBlocks, ms }}
    >
      <div ref={ref} className="game">
        {blocks.map((block, i) => (
          <CreativeBlock block={block} />
        ))}
        <Cucumber />
      </div>
    </GameContext.Provider>
  );
}

export default App;
