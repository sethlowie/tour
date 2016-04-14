import indicator from './indicator';

export default {
  runMe: function(prefix, appendTarget) {
    const els = document.querySelectorAll(`.${prefix}-tour`);
    const tourGuide = [];
    for (let i = 0; i < els.length; i++) {
      tourGuide.push({
        el: els[i],
        text: els[i].dataset.tourText,
      });
    }
    indicator(tourGuide, appendTarget);
  },
};
