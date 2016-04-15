function config(obj) {
  if (window) {
    window.logixTourConfig = {
      appendTarget: obj.appendTarget ? document.getElementById(obj.appendTarget) : document.body,
    };
  }
}

export default config;
