import React from 'react';
import { CanvasProvider } from './store/canvas/Canvas'
import { Home } from './home';
import { Hexagon } from './hexagon';

function App() {
  return (
    <CanvasProvider>
      <Hexagon/>
      <Home />
    </CanvasProvider>
  );
}

export default App;
