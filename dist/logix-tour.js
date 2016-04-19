var logixTour =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _indicator = __webpack_require__(1);

	var _indicator2 = _interopRequireDefault(_indicator);

	var _config = __webpack_require__(5);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* Need to use ES5 export for bundling for standard script tags
	*  Using ES6 export with webpack results in global of logixTour.default
	*  instead of just logixTour
	*/
	module.exports = {
	  runMe: function runMe(prefix, title) {
	    if (!window.logixTourConfig) this.setConfig({});
	    var els = document.querySelectorAll('.' + prefix + '-tour');
	    var tourGuide = [];
	    for (var i = 0; i < els.length; i++) {
	      tourGuide.push({
	        el: els[i],
	        text: els[i].dataset.tourText
	      });
	    }
	    (0, _indicator2.default)(tourGuide, title);
	  },
	  setConfig: function setConfig(obj) {
	    (0, _config2.default)(obj);
	  }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _details = __webpack_require__(2);

	var _details2 = _interopRequireDefault(_details);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var indicatorSize = 30;

	function getTop(el) {
	  var _el$getBoundingClient = el.getBoundingClientRect();

	  var bottom = _el$getBoundingClient.bottom;
	  var top = _el$getBoundingClient.top;

	  var docHeight = window.innerHeight;
	  if (docHeight - bottom > 50) {
	    return bottom - indicatorSize;
	  }
	  return top - indicatorSize / 2;
	}

	function getLeft(el) {
	  var _el$getBoundingClient2 = el.getBoundingClientRect();

	  var left = _el$getBoundingClient2.left;
	  var width = _el$getBoundingClient2.width;

	  if (left > 50) {
	    return left - indicatorSize;
	  }
	  return left + width + indicatorSize;
	}

	function tap(obj) {
	  var el = obj;
	  var reveal = true;
	  var shrink = false;
	  var opacity = 0;
	  var scale = 1;
	  var shadow = 0;
	  setInterval(function () {
	    if (reveal) {
	      if (opacity >= 1) {
	        setTimeout(function () {
	          reveal = false;
	          shrink = true;
	        }, 500);
	      } else {
	        opacity += 0.008;
	        el.style.opacity = '' + opacity;
	      }
	    } else if (shrink) {
	      if (scale <= 0.9) {
	        setTimeout(function () {
	          shrink = false;
	        }, 0);
	      } else {
	        scale -= 0.01;
	        el.style.transform = 'scale(' + scale + ', ' + scale + ')';
	      }
	    } else {
	      if (opacity <= 0) {
	        setTimeout(function () {
	          reveal = true;
	          scale = 1;
	          shadow = 0;
	          el.style.boxShadow = '0 0 6px ' + shadow + 'px #CCCCCC';
	          el.style.transform = 'scale(' + scale + ', ' + scale + ')';
	        }, 250);
	      } else {
	        opacity -= 0.009;
	        shadow += 0.1;
	        el.style.opacity = '' + opacity;
	        el.style.boxShadow = '0 0 6px ' + shadow + 'px #CCCCCC';
	      }
	    }
	  }, 10);
	  return el;
	}

	function styleIndicator(parent, obj) {
	  var el = obj;
	  el.style.position = 'absolute';
	  el.style.zIndex = '99999999999999999';
	  el.style.height = indicatorSize + 'px';
	  el.style.width = indicatorSize + 'px';
	  el.style.opacity = '1';
	  el.style.top = getTop(parent, el) + 'px';
	  el.style.left = getLeft(parent, el) + 'px';
	  el.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
	  el.style.borderRadius = '50%';
	  el.style.cursor = 'pointer';
	  return el;
	}

	function animate(obj) {
	  var el = obj;
	  el = window.logixTourConfig.tap ? tap(el) : el;
	  return el;
	}

	function create(tourGuide, title) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = tourGuide[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var guide = _step.value;

	      var indicator = document.createElement('div');
	      indicator = styleIndicator(guide.el, indicator);
	      indicator = (0, _details2.default)(guide.el, indicator, title);
	      indicator = animate(indicator);
	      window.logixTourConfig.appendTarget.appendChild(indicator);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}

	exports.default = create;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = addEvent;

	var _quadrant = __webpack_require__(3);

	var _quadrant2 = _interopRequireDefault(_quadrant);

	var _buildStuff = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function stylePopUp(parent, obj) {
	  var el = obj;
	  var parentBounds = parent.getBoundingClientRect();
	  var elBounds = el.getBoundingClientRect();
	  var quad = (0, _quadrant2.default)(parent);
	  var top = parentBounds.top - elBounds.height / 2;
	  var left = 0;
	  if (quad === 1 || quad === 3) {
	    if (parentBounds.top < 50) {
	      top = parentBounds.top + elBounds.height / 2;
	    }
	    left = parentBounds.left + 40;
	  } else if (quad === 2 || quad === 4) {
	    if (window.innerHeight - parentBounds.bottom < 50) {
	      top = parentBounds.top - elBounds.height * 1.5;
	    }
	    left = parentBounds.left - elBounds.width - 10;
	  }
	  el.style.position = 'absolute';
	  el.style.border = 'solid 2px #D8D8D8';
	  el.style.borderRadius = '5px';
	  el.style.backgroundColor = 'whitesmoke';
	  el.style.boxShadow = '0 0 1px 5000px rgba(0, 0, 0, 0.4)';
	  el.style.padding = '15px 10px';
	  el.style.zIndex = '99999999';
	  el.style.top = top + 'px';
	  el.style.left = left + 'px';
	  return el;
	}

	function removePopUp() {
	  var otherPopUps = document.getElementById('logix-tour-popup');
	  if (otherPopUps) window.logixTourConfig.appendTarget.removeChild(otherPopUps);
	}

	function removePopUpAndClear(el, cb) {
	  var otherPopUps = document.getElementById('logix-tour-popup');
	  if (otherPopUps) window.logixTourConfig.appendTarget.removeChild(otherPopUps);
	  window.logixTourConfig.appendTarget.removeChild(el);
	  cb();
	}

	function addEvent(parent, el, title) {
	  var _this = this;

	  var text = parent.dataset.tourText || 'Now that I have your attention!';
	  el.addEventListener('click', function (e) {
	    removePopUp();
	    var popUp = document.createElement('div');
	    popUp.id = 'logix-tour-popup';
	    (0, _buildStuff.buildTitle)(popUp, title);
	    (0, _buildStuff.buildContent)(popUp, text);
	    (0, _buildStuff.buildDismiss)(popUp);
	    window.logixTourConfig.appendTarget.appendChild(popUp);
	    popUp.style.width = '250px';
	    popUp.style.minHeight = '50px';
	    popUp = stylePopUp(el, popUp);
	    var removeThisPopUp = removePopUpAndClear.bind(_this, el, function () {
	      document.removeEventListener('click', removeThisPopUp);
	    });
	    document.addEventListener('click', removeThisPopUp);
	    e.stopPropagation();
	  });
	  return el;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function getQuadrant(el) {
	  var elBounds = el.getBoundingClientRect();
	  var docBounds = document.body.getBoundingClientRect();
	  var north = elBounds.top + elBounds.height / 2 < docBounds.height / 2;
	  var west = elBounds.left + elBounds.width / 2 < docBounds.width / 2;
	  var quadrant = 0;
	  if (north && west) quadrant = 1;
	  if (north && !west) quadrant = 2;
	  if (!north && west) quadrant = 3;
	  if (!north && !west) quadrant = 4;
	  return quadrant;
	}

	exports.default = getQuadrant;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	var buildStuff = {
	  buildDismiss: function buildDismiss(el) {
	    if (window.logixTourConfig.dismiss) {
	      var dismiss = document.createElement('div');
	      dismiss.appendChild(document.createTextNode('don\'t show these again'));
	      dismiss.style.textDecoration = 'underline';
	      dismiss.style.color = 'blue';
	      dismiss.style.cursor = 'pointer';
	      dismiss.addEventListener('click', function () {
	        window.logixTourConfig.dismiss();
	      });
	      el.appendChild(dismiss);
	    }
	  },
	  buildTitle: function buildTitle(el, title) {
	    if (title) {
	      var titleText = document.createElement('div');
	      titleText.appendChild(document.createTextNode(title));
	      titleText.style.fontWeight = 'bold';
	      titleText.style.marginBottom = '5px';
	      el.appendChild(titleText);
	    }
	  },
	  buildContent: function buildContent(el, text) {
	    var content = document.createTextNode(text);
	    el.appendChild(content);
	  }
	};

	// needed to get rid of buildStuff.default
	module.exports = buildStuff;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function config(obj) {
	  if (window) {
	    window.logixTourConfig = {
	      appendTarget: obj.appendTarget ? document.getElementById(obj.appendTarget) : document.body,
	      tap: obj.tap,
	      dismiss: obj.dismiss
	    };
	  }
	}

	exports.default = config;

/***/ }
/******/ ]);