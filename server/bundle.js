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
/***/ function(module, exports) {

	eval(" import React from 'react';\r\n  import { render } from 'react-dom';\r\n  import { Router, browserHistory } from 'react-router';\r\n  \r\n  import routes from './routes';\r\n \r\n // render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvaW5kZXguanM/ZWFiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFVBQVUsU0FBUztBQUNuQixVQUFVLHlCQUF5Qjs7QUFFbkM7O0FBRUEsNEJBQTRCLGVBQWUsU0FBUyxPQUFPIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuICBpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xyXG4gIGltcG9ydCB7IFJvdXRlciwgYnJvd3Nlckhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG4gIFxyXG4gIGltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG4gXHJcbiAvLyByZW5kZXIoPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0gcm91dGVzPXtyb3V0ZXN9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY2xpZW50L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);