import * as React from "react";

const CanvasContext = React.createContext(null);

export const Canvas = ({ height, width, dpr, isAnimating, children }) => {
  const canvasRef = React.useRef(null);
  const actualWidth = width * dpr;
  const actualHeight = height * dpr;

  // the canvas' context is stored once it's created
  const [context, setContext] = React.useState(null);
  React.useEffect(() => {
    if (canvasRef.current !== null) {
      const canvasContext = canvasRef.current.getContext("2d");
      if (canvasContext !== null) {
        canvasContext.scale(dpr, dpr);
        canvasContext.globalCompositeOperation = "soft-light";
        setContext(canvasContext);
      }
    }
  }, [dpr]);

  // we need to clear the whole canvas before drawing the children
  if (context !== null) {
    context.clearRect(0, 0, actualWidth, actualHeight);
  }

  return (
    <CanvasContext.Provider value={context}>
      <canvas
        ref={canvasRef}
        height={actualHeight}
        width={actualWidth}
        style={{ width, height }}
      />
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  const renderingContext = React.useContext(CanvasContext);
  return renderingContext;
};
