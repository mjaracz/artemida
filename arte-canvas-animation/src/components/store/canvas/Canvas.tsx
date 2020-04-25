import React, {createContext, useRef} from 'react';
import {useCanvas} from "./hooks/useCanavas";

export const SharingContext = createContext(null);

export const CanvasProvider: React.FC = ({children}) => {
  const canvasRef = useRef(null);
  const {renderingContext} = useCanvas(canvasRef);
  
  return (
    <SharingContext.Provider value={renderingContext}>
      <canvas ref={canvasRef} />
        {children}
    </SharingContext.Provider>
  )
};