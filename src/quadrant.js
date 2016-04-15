function getQuadrant(el) {
  const elBounds = el.getBoundingClientRect();
  const docBounds = document.body.getBoundingClientRect();
  const north = (elBounds.top + elBounds.height / 2) < docBounds.height / 2;
  const west = (elBounds.left + elBounds.width / 2) < docBounds.width / 2;
  let quadrant = 0;
  if (north && west) quadrant = 1;
  if (north && !west) quadrant = 2;
  if (!north && west) quadrant = 3;
  if (!north && !west) quadrant = 4;
  return quadrant;
}

export default getQuadrant;
