import React from 'react';
import { useDimensions } from './hooks/useDimensions';
import './style/container.scss';

export function Hexagon() {
  const { ref } = useDimensions();
  return (
    <div ref={ref} className="hexagon--container">
    
    </div>
  )
}