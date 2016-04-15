import details from './details';
import quadrant from './quadrant';

const indicatorSize = 30;

function getTop(el) {
  const { bottom, top } = el.getBoundingClientRect();
  const quad = quadrant(el);
  if (quad === 1 || quad === 2) {
    return bottom - indicatorSize;
  }
  return top - (indicatorSize / 2);
}

function getLeft(el) {
  const { left, width } = el.getBoundingClientRect();
  const quad = quadrant(el);
  if (quad === 2 || quad === 4) {
    return left - indicatorSize;
  }
  return left + width + indicatorSize;
}

function tap(obj) {
  const el = obj;
  let reveal = true;
  let shrink = false;
  let opacity = 0;
  let scale = 1;
  let shadow = 0;
  setInterval(() => {
    if (reveal) {
      if (opacity >= 1) {
        setTimeout(() => {
          reveal = false;
          shrink = true;
        }, 500);
      } else {
        opacity += 0.008;
        el.style.opacity = `${opacity}`;
      }
    } else if (shrink) {
      if (scale <= 0.9) {
        setTimeout(() => {
          shrink = false;
        }, 0);
      } else {
        scale -= 0.01;
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

function styleIndicator(parent, obj) {
  let el = obj;
  el.style.position = 'absolute';
  el.style.zIndex = '99999999999999999';
  el.style.height = `${indicatorSize}px`;
  el.style.width = `${indicatorSize}px`;
  el.style.opacity = '0';
  el.style.top = `${getTop(parent, el)}px`;
  el.style.left = `${getLeft(parent, el)}px`;
  el.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  el.style.borderRadius = '50%';
  el.style.cursor = 'pointer';
  el = tap(el);
  return el;
}

function create(tourGuide) {
  for (const guide of tourGuide) {
    let indicator = document.createElement('div');
    indicator = styleIndicator(guide.el, indicator);
    indicator = details(guide.el, indicator);
    window.logixTourConfig.appendTarget.appendChild(indicator);
  }
}

export default create;
