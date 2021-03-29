import * as React from "react";
import {useEffect, useState} from "react";
import cucumber from "./cucumberGuy.png";

export function Cucumber() {
  const [position, setPosition] = useState(100);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 37) {
        setPosition(position => position - 100)
        console.log(position)
      } else if (e.keyCode === 39) {
        setPosition(position => position + 100)
        console.log(position)
      }
    })
  }, [])

  return <img style={{
    width: "100px",
    position: "absolute",
    left: position,
    bottom: "20px"
  }} className="cucumber" alt="cucumber" src={cucumber}/>
}