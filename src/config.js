function config(obj) {
  if (window) {
    window.logixTourConfig = {
      tap: obj.tap,
      dismiss: obj.dismiss,
      onClose: obj.onClose,
    };
  }
}

export default config;
