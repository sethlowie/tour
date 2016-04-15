import indicator from './indicator';
import config from './config';

export default {
  runMe(prefix) {
    const els = document.querySelectorAll(`.${prefix}-tour`);
    const tourGuide = [];
    for (let i = 0; i < els.length; i++) {
      tourGuide.push({
        el: els[i],
        text: els[i].dataset.tourText,
      });
    }
    indicator(tourGuide);
  },
  setConfig(obj) {
    config(obj);
  },
};
