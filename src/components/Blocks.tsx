import * as React from "react";
import { GameContext } from "src/Game";

const Blocks: React.FC = () => {
  const { blocks, setBlocks } = React.useContext(GameContext);
  const every20Ms = useLoop(20);
  const every500Ms = useLoop(500);
  const every2000Ms = useLoop(2000);

  every20Ms(() => {
    setBlocks((blocks) =>
      blocks.map((block) => ({ ...block, top: block.top + 20 }))
    );
  });

  every500Ms(() => {
    setBlocks((blocks) => [
      ...blocks,
      {
        left: Math.floor(Math.random() * (ref.current!.clientWidth - 100)) + 1,
        top: 0,
      },
    ]);
  });

  every2000Ms(() => {
    setBlocks(() =>
      blocks.filter((block) => block.top < ref.current!.clientHeight)
    );
  });

  return <div></div>;
};
