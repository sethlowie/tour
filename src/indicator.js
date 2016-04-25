import details from './popUp/details';

const indicatorSize = 30;

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
  const el = obj;
  el.style.position = 'absolute';
  el.style.zIndex = '99999999999999999';
  el.style.height = `${indicatorSize}px`;
  el.style.width = `${indicatorSize}px`;
  el.style.opacity = '1';
  el.style.backgroundColor = 'rgba(204, 204, 204, 0.2)';
  el.style.border = 'solid 2px rgba(204, 204, 204, 1)';
  el.style.borderRadius = '50%';
  el.style.cursor = 'pointer';
  el.style.left = '-15px';
  el.style.top = '60%';
  return el;
}

function animate(obj) {
  let el = obj;
  el = window.logixTourConfig.tap ? tap(el) : el;
  return el;
}

function create(tourGuide, title, prefix) {
  for (const guide of tourGuide) {
    let indicator = document.createElement('div');
    indicator = styleIndicator(guide.el, indicator);
    indicator = details(guide.el, indicator, title);
    indicator = animate(indicator);
    indicator.className = `${prefix}-logix-tour-indicator tour-active`;
    guide.el.parentNode.insertBefore(indicator, guide.el.nextSibling);
  }
}

export default create;
