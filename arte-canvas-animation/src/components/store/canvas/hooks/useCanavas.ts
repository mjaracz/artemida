import {RefObject, useLayoutEffect, useState} from 'react';

export const useCanvas = (canvasRef: RefObject<any>) => {
  const [renderingContext, setRenderingContext] = useState();
  useLayoutEffect(() => {
    setRenderingContext(canvasRef.current.getContext('2d'));
  }, [canvasRef]);
  return {
    renderingContext
  }
};

