function config(obj) {
  if (window) {
    window.logixTourConfig = {
      appendTarget: obj.appendTarget ? document.getElementById(obj.appendTarget) : document.body,
      tap: obj.tap,
      dismiss: obj.dismiss,
    };
  }
}

export default config;
