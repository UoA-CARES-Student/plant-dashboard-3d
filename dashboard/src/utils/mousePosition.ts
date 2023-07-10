export const isMouseShortDistance = (x1: number, y1: number, x2: number, y2: number): boolean => {
  return (
    Math.sqrt(Math.abs(x1 - x2) * Math.abs(x1 - x2) + Math.abs(y1 - y2) * Math.abs(y1 - y2)) < 6
  );
};
