import {GameContext} from "src/Game";
import * as React from "react";

export const useLoop = (everyXSeconds: number) => {
  const { ms } = React.useContext(GameContext);

  return (cb) => {
    if (ms )
  }
}