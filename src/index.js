import indicator from './indicator';
import config from './config';

/* Need to use ES5 export for bundling for standard script tags
*  Using ES6 export with webpack results in global of logixTour.default
*  instead of just logixTour
*/
module.exports = {
  runMe(prefix, title) {
    if (!window.logixTourConfig) this.setConfig({});
    const els = document.querySelectorAll(`.${prefix}-tour`);
    const tourGuide = [];
    for (let i = 0; i < els.length; i++) {
      tourGuide.push({
        el: els[i],
        text: els[i].dataset.tourText,
      });
    }
    indicator(tourGuide, title);
  },
  setConfig(obj) {
    config(obj);
  },
};
