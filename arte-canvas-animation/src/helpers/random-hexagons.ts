import random from 'lodash/random';
import isArray from 'lodash'

const getPositionBetween = (min: number, max: number, variance: number) =>
  random(min - variance, max + variance);

const hueVariance = 40;

const getRandomColor = (baseHue: number, hueVariance: number) => {
  const hue = random(baseHue - hueVariance, baseHue + hueVariance);
  const saturation = random(4, 55);
  
  return `hsla(${hue}, ${saturation}%, ${random(30, 80)}%, ${random(
    0.2,
    0.6
  )})`;
};

interface IRandomHexagonAttr {
  baseSize: number;
  baseHue: number;
  x: number[] | number;
  y: number[] | number;
}

export const getRandomHexagon = ({baseSize, baseHue, x, y}: IRandomHexagonAttr) => {
  const size = random(baseSize * 1.2, baseSize * 2);
  const positionVariance = Math.round(0.1 * baseSize);
  
  const [Xmin, Xmax] = isArray(x) ? x : [x, x];
  const [Ymin, Ymax] = isArray(y) ? y : [y, y];
  
  return {
    x: getPositionBetween(
      (Xmin as number) - size * 0.5,
      (Xmax as number) - size * 0.5,
      positionVariance
    ),
    y: getPositionBetween(
      (Ymin as number) - size * 0.5,
      (Ymax as number) - size * 0.5,
      positionVariance
    ),
    size,
    color: getRandomColor(baseHue, hueVariance),
    rotation: random(0, 90)
  };
};

export const getHexagonsToFillZone = ({width, height}: { width: number, height: number }) => {
  const baseHue = random(200, 300);
  
  const smallerSize = Math.min(width, height);
  
  /* putting big hexagons in the screen corners */
  /* so that we have the whole screen covered */
  const cornerHexagons = [];
  for (let i = 0; i <= Math.round(width / smallerSize); i++) {
    for (let j = 0; j <= Math.round(height / smallerSize); j++) {
      cornerHexagons.push(
        getRandomHexagon({
          baseSize: Math.max(width, height),
          x: i * width,
          y: j * height,
          baseHue
        })
      );
    }
  }
  
  /* Then adding some more hexagons randomly on the screen */
  const extraHexagons = [...Array(random(5, 10))].map(() =>
    getRandomHexagon({
      baseSize: smallerSize,
      x: [0, width],
      y: [0, height],
      baseHue
    })
  );
  return [...cornerHexagons, ...extraHexagons];
};
