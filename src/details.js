import quadrant from './quadrant';

function stylePopUp(parent, obj) {
  const el = obj;
  const parentBounds = parent.getBoundingClientRect();
  const elBounds = el.getBoundingClientRect();
  const quad = quadrant(parent);
  let top = 0;
  let left = 0;
  if (quad === 1 || quad === 3) {
    top = parentBounds.top - elBounds.height / 2;
    left = parentBounds.left + 40;
  } else if (quad === 2 || quad === 4) {
    top = parentBounds.top - elBounds.height / 2;
    left = parentBounds.left - elBounds.width - 10;
  }
  el.style.position = 'absolute';
  el.style.border = 'solid 2px';
  el.style.borderRadius = '5px';
  el.style.backgroundColor = 'whitesmoke';
  el.style.padding = '5px 10px';
  el.style.zIndex = '99999999';
  el.style.top = `${top}px`;
  el.style.left = `${left}px`;
  return el;
}

function removePopUp() {
  const otherPopUps = document.getElementById('logix-tour-popup');
  if (otherPopUps) window.logixTourConfig.appendTarget.removeChild(otherPopUps);
}

function removePopUpAndClear(el, cb) {
  const otherPopUps = document.getElementById('logix-tour-popup');
  if (otherPopUps) window.logixTourConfig.appendTarget.removeChild(otherPopUps);
  window.logixTourConfig.appendTarget.removeChild(el);
  cb();
}

export default function addEvent(parent, el) {
  const text = parent.dataset.tourText || 'Now that I have your attention!';
  el.addEventListener('click', (e) => {
    removePopUp();
    let popUp = document.createElement('div');
    const content = document.createTextNode(text);
    popUp.id = 'logix-tour-popup';
    popUp.appendChild(content);
    window.logixTourConfig.appendTarget.appendChild(popUp);
    popUp.style.width = '250px';
    popUp.style.minHeight = '50px';
    popUp = stylePopUp(el, popUp);
    const removeThisPopUp = removePopUpAndClear.bind(this, el, () => {
      document.removeEventListener('click', removeThisPopUp);
    });
    document.addEventListener('click', removeThisPopUp);
    e.stopPropagation();
  });
  return el;
}
