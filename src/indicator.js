import details from './details';

function getQuadrant(el) {
    const elBounds = el.getBoundingClientRect();
    const docBounds = document.body.getBoundingClientRect();
    const west = (elBounds.left + elBounds.width / 2) < docBounds.width / 2;
    let quadrant = 0;
    if (west) quadrant = 1;
    if (!west) quadrant = 2;
    return quadrant;
}

function getTop(parent, el) {
  const { bottom } = parent.getBoundingClientRect();
  const { height } = el.getBoundingClientRect();
  return bottom - (height / 2);
}

function getLeft(parent, el) {
  const { left } = parent.getBoundingClientRect();
  const { width } = el.getBoundingClientRect();
  return left - (width / 2);
}

function styleIndicator(parent, el) {
  console.log('Quad', getQuadrant(parent));
  el.style.position = 'absolute';
  el.style.zIndex = '99999999999999999';
  el.style.height = '30px';
  el.style.width = '30px';
  el.style.opacity = '0';
  el.style.top = `${getTop(parent, el)}px`;
  el.style.left = `${getLeft(parent, el)}px`;
  el.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
  el.style.borderRadius = '50%';
  el.style.cursor = 'pointer';
  let reveal = true;
  let shrink = false;
  let opacity = 0;
  let scale = 1;
  let shadow = 0;
  setInterval(() => {
    if (reveal) {
      if (opacity >= 1){
        setTimeout(() => {
          reveal = false;
          shrink = true;
        }, 500);
      } else {
        opacity += 0.008;
        el.style.opacity = `${opacity}`;
      }
    } else if (shrink) {
      if (scale <= 0.85) {
        setTimeout(() => {
          shrink = false;
        }, 250);
      } else {
        scale -= 0.001;
        el.style.transform = `scale(${scale}, ${scale})`;
      }
    } else {
      if (opacity <= 0) {
        setTimeout(() => {
          reveal = true;
          scale = 1;
          shadow = 0;
          el.style.boxShadow = `0 0 6px ${shadow}px #CCCCCC`;
          el.style.transform = `scale(${scale}, ${scale})`;
        }, 250);
      } else {
        opacity -= 0.009;
        shadow += 0.1;
        el.style.opacity = `${opacity}`;
        el.style.boxShadow = `0 0 6px ${shadow}px #CCCCCC`;
      }
    }
  }, 10);
  return el;
}

function create(tourGuide, appendTarget) {
  for (const guide of tourGuide) {
    let indicator = document.createElement('div');
    indicator = styleIndicator(guide.el, indicator);
    indicator = details(guide.el, indicator);
    if (appendTarget) {
      document.getElementById(appendTarget).appendChild(indicator);
    } else {
      document.body.appendChild(indicator);
    }
  }
}

export default create;
