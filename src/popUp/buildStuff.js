const buildStuff = {
  buildDismiss(el) {
    if (window.logixTourConfig.dismiss) {
      const dismiss = document.createElement('div');
      dismiss.appendChild(document.createTextNode('don\'t show these again'));
      dismiss.style.textDecoration = 'underline';
      dismiss.style.color = 'blue';
      dismiss.style.cursor = 'pointer';
      dismiss.addEventListener('click', () => {
        window.logixTourConfig.dismiss();
      });
      el.appendChild(dismiss);
    }
  },
  buildTitle(el, title) {
    if (title) {
      const titleText = document.createElement('div');
      titleText.appendChild(document.createTextNode(title));
      titleText.style.fontWeight = 'bold';
      titleText.style.marginBottom = '5px';
      el.appendChild(titleText);
    }
  },
  buildContent(el, text) {
    const content = document.createTextNode(text);
    el.appendChild(content);
  },
};

// needed to get rid of buildStuff.default
module.exports = buildStuff;
