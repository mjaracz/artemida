import React from "react";
import { useDimensions } from "./use-dimensions";
import { Canvas } from "./Canvas";
import { Hexagon } from "./Hexagon";
import { getHexagonsToFillZone } from "./random-helpers";
import "./styles.css";

const App = () => {
  const [ref, { width, height, dpr }] = useDimensions();

  return (
    <main ref={ref}>
      {width === undefined || height === undefined || dpr === undefined ? (
        <div>{"🤔"}</div>
      ) : (
        <Canvas width={width} height={height} dpr={dpr}>
          {getHexagonsToFillZone({
            height: height * dpr,
            width: width * dpr
          }).map((hexagon, index) => (
            <Hexagon key={index} {...hexagon} />
          ))}
        </Canvas>
      )}
    </main>
  );
};

export default App;
