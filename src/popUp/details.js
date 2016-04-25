import { buildTitle, buildContent, buildDismiss } from './buildStuff';

function stylePopUp(parent, obj) {
  const el = obj;
  el.style.position = 'absolute';
  el.style.border = 'solid 2px #D8D8D8';
  el.style.borderRadius = '5px';
  el.style.backgroundColor = 'whitesmoke';
  el.style.boxShadow = '0 0 1px 5000px rgba(0, 0, 0, 0.4)';
  el.style.padding = '15px 10px';
  el.style.zIndex = '99999999';
  el.style.top = '50%';
  el.style.left = '30px';
  return el;
}

function removePopUp() {
  const otherPopUps = document.getElementById('logix-tour-popup');
  if (otherPopUps) otherPopUps.parentNode.removeChild(otherPopUps);
}

function removePopUpAndClear(el, cb) {
  const otherPopUps = document.getElementById('logix-tour-popup');
  if (otherPopUps) otherPopUps.parentNode.removeChild(otherPopUps);
  try {
    el.parentNode.removeChild(el);
  } catch (err) {
    // DON'T WORRY ABOUT THROWING THIS
  }
  cb();
}

export default function addEvent(parent, el, title) {
  const text = parent.dataset.tourText || 'Now that I have your attention!';
  el.addEventListener('click', (e) => {
    removePopUp();
    let popUp = document.createElement('div');
    popUp.id = 'logix-tour-popup';
    buildTitle(popUp, title);
    buildContent(popUp, text);
    buildDismiss(popUp);
    el.parentNode.insertBefore(popUp, el.nextSibling);
    popUp.style.width = '250px';
    popUp.style.minHeight = '50px';
    popUp = stylePopUp(el, popUp);
    const removeThisPopUp = removePopUpAndClear.bind(this, el, () => {
      document.removeEventListener('click', removeThisPopUp);
      if (window.logixTourConfig.onClose) {
        window.logixTourConfig.onClose(parent);
      }
    });
    document.addEventListener('click', removeThisPopUp);
    e.stopPropagation();
  });
  return el;
}
