/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\axios\\index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LoginApp.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LoginApp.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LoginApp",
  data: function data() {
    return {
      loading: false,
      model: {
        username: null,
        password: null
      },
      messages: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var vm;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              vm = _this;
              vm.loading = true;
              vm.messages.username = '';
              vm.messages.password = '';
              Promise.resolve().then(function (credentials) {
                return vm.$http.post(vm.$app.route('login'), vm.model);
              }).then(function (_ref) {
                var data = _ref.data;
                if (data.status != 'success') {
                  vm.$app.alert.fire({
                    icon: 'error',
                    title: $t('auth.message.failed'),
                    text: $t('auth.message.failed_msg')
                  });
                  return;
                }
                location.href = '/';
              })["catch"](function (err) {
                if (err.response) {
                  var _err$response;
                  var error = (_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data;
                  Object.keys(error.errors).forEach(function (idx) {
                    vm.messages[idx] = error.errors[idx].shift();
                  });
                  vm.loading = false;
                }
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["error"],
  name: "invalid-feedback"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LoginApp.vue?vue&type=template&id=269bc096&scoped=true":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LoginApp.vue?vue&type=template&id=269bc096&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "container"
  }, [_c("b-card", {
    staticStyle: {
      width: "30rem"
    },
    attrs: {
      title: _vm.$t("auth.login.title")
    }
  }, [_c("ValidationObserver", {
    attrs: {
      slim: true
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(_ref) {
        var passes = _ref.passes;
        return [_c("b-form", {
          attrs: {
            id: "form-login"
          },
          on: {
            submit: function submit($event) {
              $event.preventDefault();
              return passes(_vm.submit);
            }
          }
        }, [_c("b-form-group", {
          attrs: {
            label: _vm.$t("auth.login.username"),
            "label-for": "username"
          }
        }, [_c("ValidationProvider", {
          attrs: {
            rules: "required",
            name: "Username"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref2) {
              var errors = _ref2.errors;
              return [_c("b-input-group", {
                staticClass: "mb-2 mr-sm-2 mb-sm-0",
                attrs: {
                  name: "username"
                }
              }, [_c("b-form-input", {
                attrs: {
                  trim: "",
                  id: "username",
                  disabled: _vm.loading,
                  placeholder: _vm.$t("auth.login.username")
                },
                model: {
                  value: _vm.model.username,
                  callback: function callback($$v) {
                    _vm.$set(_vm.model, "username", $$v);
                  },
                  expression: "model.username"
                }
              })], 1), _vm._v(" "), _c("invalid-feedback", {
                staticClass: "mt-1",
                attrs: {
                  error: errors[0] || _vm.messages.username
                }
              })];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("b-form-group", {
          attrs: {
            label: _vm.$t("auth.login.password"),
            "label-for": "password"
          }
        }, [_c("ValidationProvider", {
          attrs: {
            rules: "required",
            name: "Password"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function fn(_ref3) {
              var errors = _ref3.errors;
              return [_c("b-input-group", {
                staticClass: "mb-2 mr-sm-2 mb-sm-0",
                attrs: {
                  name: "password"
                }
              }, [_c("b-form-input", {
                attrs: {
                  type: "password",
                  trim: "",
                  id: "password",
                  disabled: _vm.loading,
                  placeholder: _vm.$t("auth.login.password")
                },
                model: {
                  value: _vm.model.password,
                  callback: function callback($$v) {
                    _vm.$set(_vm.model, "password", $$v);
                  },
                  expression: "model.password"
                }
              })], 1), _vm._v(" "), _c("invalid-feedback", {
                staticClass: "mt-1",
                attrs: {
                  error: errors[0] || _vm.messages.password
                }
              })];
            }
          }], null, true)
        })], 1), _vm._v(" "), _c("div", {
          staticClass: "action-button mt-3"
        }, [_c("div", {
          staticClass: "row no-gutters"
        }, [_c("div", {
          staticClass: "col-lg-12 pr-lg-1 my-1"
        }, [_c("button", {
          staticClass: "btn btn-info btn-block btn-md",
          attrs: {
            id: "js-login-btn",
            type: "submit",
            disabled: _vm.loading
          }
        }, [_c("i", {
          staticClass: "fal fa-sign-in mr-1"
        }), _vm._v("\n                " + _vm._s(_vm.loading ? _vm.$t("general.loading") : _vm.$t("auth.button.login")) + "\n              ")])])])])], 1)];
      }
    }])
  })], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=template&id=5d13ec66":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=template&id=5d13ec66 ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "errors"
  }, [_c("span", {
    staticClass: "invalid-feedback",
    style: {
      display: _vm.error ? "block" : "none"
    },
    attrs: {
      role: "alert"
    }
  }, [_vm._v("\n    " + _vm._s(_vm.error) + "\n  ")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/index.js ***!
  \*************************************************/
/*! exports provided: install, NAME, BVConfigPlugin, BVConfig, BootstrapVue, BVModalPlugin, BVToastPlugin, IconsPlugin, BootstrapVueIcons, BIcon, BIconstack, BIconBlank, BIconAlarm, BIconAlarmFill, BIconAlignBottom, BIconAlignCenter, BIconAlignEnd, BIconAlignMiddle, BIconAlignStart, BIconAlignTop, BIconAlt, BIconApp, BIconAppIndicator, BIconArchive, BIconArchiveFill, BIconArrow90degDown, BIconArrow90degLeft, BIconArrow90degRight, BIconArrow90degUp, BIconArrowBarDown, BIconArrowBarLeft, BIconArrowBarRight, BIconArrowBarUp, BIconArrowClockwise, BIconArrowCounterclockwise, BIconArrowDown, BIconArrowDownCircle, BIconArrowDownCircleFill, BIconArrowDownLeft, BIconArrowDownLeftCircle, BIconArrowDownLeftCircleFill, BIconArrowDownLeftSquare, BIconArrowDownLeftSquareFill, BIconArrowDownRight, BIconArrowDownRightCircle, BIconArrowDownRightCircleFill, BIconArrowDownRightSquare, BIconArrowDownRightSquareFill, BIconArrowDownShort, BIconArrowDownSquare, BIconArrowDownSquareFill, BIconArrowDownUp, BIconArrowLeft, BIconArrowLeftCircle, BIconArrowLeftCircleFill, BIconArrowLeftRight, BIconArrowLeftShort, BIconArrowLeftSquare, BIconArrowLeftSquareFill, BIconArrowRepeat, BIconArrowReturnLeft, BIconArrowReturnRight, BIconArrowRight, BIconArrowRightCircle, BIconArrowRightCircleFill, BIconArrowRightShort, BIconArrowRightSquare, BIconArrowRightSquareFill, BIconArrowUp, BIconArrowUpCircle, BIconArrowUpCircleFill, BIconArrowUpLeft, BIconArrowUpLeftCircle, BIconArrowUpLeftCircleFill, BIconArrowUpLeftSquare, BIconArrowUpLeftSquareFill, BIconArrowUpRight, BIconArrowUpRightCircle, BIconArrowUpRightCircleFill, BIconArrowUpRightSquare, BIconArrowUpRightSquareFill, BIconArrowUpShort, BIconArrowUpSquare, BIconArrowUpSquareFill, BIconArrowsAngleContract, BIconArrowsAngleExpand, BIconArrowsCollapse, BIconArrowsExpand, BIconArrowsFullscreen, BIconArrowsMove, BIconAspectRatio, BIconAspectRatioFill, BIconAsterisk, BIconAt, BIconAward, BIconAwardFill, BIconBack, BIconBackspace, BIconBackspaceFill, BIconBackspaceReverse, BIconBackspaceReverseFill, BIconBadge3d, BIconBadge3dFill, BIconBadge4k, BIconBadge4kFill, BIconBadge8k, BIconBadge8kFill, BIconBadgeAd, BIconBadgeAdFill, BIconBadgeAr, BIconBadgeArFill, BIconBadgeCc, BIconBadgeCcFill, BIconBadgeHd, BIconBadgeHdFill, BIconBadgeTm, BIconBadgeTmFill, BIconBadgeVo, BIconBadgeVoFill, BIconBadgeVr, BIconBadgeVrFill, BIconBadgeWc, BIconBadgeWcFill, BIconBag, BIconBagCheck, BIconBagCheckFill, BIconBagDash, BIconBagDashFill, BIconBagFill, BIconBagPlus, BIconBagPlusFill, BIconBagX, BIconBagXFill, BIconBank, BIconBank2, BIconBarChart, BIconBarChartFill, BIconBarChartLine, BIconBarChartLineFill, BIconBarChartSteps, BIconBasket, BIconBasket2, BIconBasket2Fill, BIconBasket3, BIconBasket3Fill, BIconBasketFill, BIconBattery, BIconBatteryCharging, BIconBatteryFull, BIconBatteryHalf, BIconBell, BIconBellFill, BIconBellSlash, BIconBellSlashFill, BIconBezier, BIconBezier2, BIconBicycle, BIconBinoculars, BIconBinocularsFill, BIconBlockquoteLeft, BIconBlockquoteRight, BIconBook, BIconBookFill, BIconBookHalf, BIconBookmark, BIconBookmarkCheck, BIconBookmarkCheckFill, BIconBookmarkDash, BIconBookmarkDashFill, BIconBookmarkFill, BIconBookmarkHeart, BIconBookmarkHeartFill, BIconBookmarkPlus, BIconBookmarkPlusFill, BIconBookmarkStar, BIconBookmarkStarFill, BIconBookmarkX, BIconBookmarkXFill, BIconBookmarks, BIconBookmarksFill, BIconBookshelf, BIconBootstrap, BIconBootstrapFill, BIconBootstrapReboot, BIconBorder, BIconBorderAll, BIconBorderBottom, BIconBorderCenter, BIconBorderInner, BIconBorderLeft, BIconBorderMiddle, BIconBorderOuter, BIconBorderRight, BIconBorderStyle, BIconBorderTop, BIconBorderWidth, BIconBoundingBox, BIconBoundingBoxCircles, BIconBox, BIconBoxArrowDown, BIconBoxArrowDownLeft, BIconBoxArrowDownRight, BIconBoxArrowInDown, BIconBoxArrowInDownLeft, BIconBoxArrowInDownRight, BIconBoxArrowInLeft, BIconBoxArrowInRight, BIconBoxArrowInUp, BIconBoxArrowInUpLeft, BIconBoxArrowInUpRight, BIconBoxArrowLeft, BIconBoxArrowRight, BIconBoxArrowUp, BIconBoxArrowUpLeft, BIconBoxArrowUpRight, BIconBoxSeam, BIconBraces, BIconBricks, BIconBriefcase, BIconBriefcaseFill, BIconBrightnessAltHigh, BIconBrightnessAltHighFill, BIconBrightnessAltLow, BIconBrightnessAltLowFill, BIconBrightnessHigh, BIconBrightnessHighFill, BIconBrightnessLow, BIconBrightnessLowFill, BIconBroadcast, BIconBroadcastPin, BIconBrush, BIconBrushFill, BIconBucket, BIconBucketFill, BIconBug, BIconBugFill, BIconBuilding, BIconBullseye, BIconCalculator, BIconCalculatorFill, BIconCalendar, BIconCalendar2, BIconCalendar2Check, BIconCalendar2CheckFill, BIconCalendar2Date, BIconCalendar2DateFill, BIconCalendar2Day, BIconCalendar2DayFill, BIconCalendar2Event, BIconCalendar2EventFill, BIconCalendar2Fill, BIconCalendar2Minus, BIconCalendar2MinusFill, BIconCalendar2Month, BIconCalendar2MonthFill, BIconCalendar2Plus, BIconCalendar2PlusFill, BIconCalendar2Range, BIconCalendar2RangeFill, BIconCalendar2Week, BIconCalendar2WeekFill, BIconCalendar2X, BIconCalendar2XFill, BIconCalendar3, BIconCalendar3Event, BIconCalendar3EventFill, BIconCalendar3Fill, BIconCalendar3Range, BIconCalendar3RangeFill, BIconCalendar3Week, BIconCalendar3WeekFill, BIconCalendar4, BIconCalendar4Event, BIconCalendar4Range, BIconCalendar4Week, BIconCalendarCheck, BIconCalendarCheckFill, BIconCalendarDate, BIconCalendarDateFill, BIconCalendarDay, BIconCalendarDayFill, BIconCalendarEvent, BIconCalendarEventFill, BIconCalendarFill, BIconCalendarMinus, BIconCalendarMinusFill, BIconCalendarMonth, BIconCalendarMonthFill, BIconCalendarPlus, BIconCalendarPlusFill, BIconCalendarRange, BIconCalendarRangeFill, BIconCalendarWeek, BIconCalendarWeekFill, BIconCalendarX, BIconCalendarXFill, BIconCamera, BIconCamera2, BIconCameraFill, BIconCameraReels, BIconCameraReelsFill, BIconCameraVideo, BIconCameraVideoFill, BIconCameraVideoOff, BIconCameraVideoOffFill, BIconCapslock, BIconCapslockFill, BIconCardChecklist, BIconCardHeading, BIconCardImage, BIconCardList, BIconCardText, BIconCaretDown, BIconCaretDownFill, BIconCaretDownSquare, BIconCaretDownSquareFill, BIconCaretLeft, BIconCaretLeftFill, BIconCaretLeftSquare, BIconCaretLeftSquareFill, BIconCaretRight, BIconCaretRightFill, BIconCaretRightSquare, BIconCaretRightSquareFill, BIconCaretUp, BIconCaretUpFill, BIconCaretUpSquare, BIconCaretUpSquareFill, BIconCart, BIconCart2, BIconCart3, BIconCart4, BIconCartCheck, BIconCartCheckFill, BIconCartDash, BIconCartDashFill, BIconCartFill, BIconCartPlus, BIconCartPlusFill, BIconCartX, BIconCartXFill, BIconCash, BIconCashCoin, BIconCashStack, BIconCast, BIconChat, BIconChatDots, BIconChatDotsFill, BIconChatFill, BIconChatLeft, BIconChatLeftDots, BIconChatLeftDotsFill, BIconChatLeftFill, BIconChatLeftQuote, BIconChatLeftQuoteFill, BIconChatLeftText, BIconChatLeftTextFill, BIconChatQuote, BIconChatQuoteFill, BIconChatRight, BIconChatRightDots, BIconChatRightDotsFill, BIconChatRightFill, BIconChatRightQuote, BIconChatRightQuoteFill, BIconChatRightText, BIconChatRightTextFill, BIconChatSquare, BIconChatSquareDots, BIconChatSquareDotsFill, BIconChatSquareFill, BIconChatSquareQuote, BIconChatSquareQuoteFill, BIconChatSquareText, BIconChatSquareTextFill, BIconChatText, BIconChatTextFill, BIconCheck, BIconCheck2, BIconCheck2All, BIconCheck2Circle, BIconCheck2Square, BIconCheckAll, BIconCheckCircle, BIconCheckCircleFill, BIconCheckLg, BIconCheckSquare, BIconCheckSquareFill, BIconChevronBarContract, BIconChevronBarDown, BIconChevronBarExpand, BIconChevronBarLeft, BIconChevronBarRight, BIconChevronBarUp, BIconChevronCompactDown, BIconChevronCompactLeft, BIconChevronCompactRight, BIconChevronCompactUp, BIconChevronContract, BIconChevronDoubleDown, BIconChevronDoubleLeft, BIconChevronDoubleRight, BIconChevronDoubleUp, BIconChevronDown, BIconChevronExpand, BIconChevronLeft, BIconChevronRight, BIconChevronUp, BIconCircle, BIconCircleFill, BIconCircleHalf, BIconCircleSquare, BIconClipboard, BIconClipboardCheck, BIconClipboardData, BIconClipboardMinus, BIconClipboardPlus, BIconClipboardX, BIconClock, BIconClockFill, BIconClockHistory, BIconCloud, BIconCloudArrowDown, BIconCloudArrowDownFill, BIconCloudArrowUp, BIconCloudArrowUpFill, BIconCloudCheck, BIconCloudCheckFill, BIconCloudDownload, BIconCloudDownloadFill, BIconCloudDrizzle, BIconCloudDrizzleFill, BIconCloudFill, BIconCloudFog, BIconCloudFog2, BIconCloudFog2Fill, BIconCloudFogFill, BIconCloudHail, BIconCloudHailFill, BIconCloudHaze, BIconCloudHaze1, BIconCloudHaze2Fill, BIconCloudHazeFill, BIconCloudLightning, BIconCloudLightningFill, BIconCloudLightningRain, BIconCloudLightningRainFill, BIconCloudMinus, BIconCloudMinusFill, BIconCloudMoon, BIconCloudMoonFill, BIconCloudPlus, BIconCloudPlusFill, BIconCloudRain, BIconCloudRainFill, BIconCloudRainHeavy, BIconCloudRainHeavyFill, BIconCloudSlash, BIconCloudSlashFill, BIconCloudSleet, BIconCloudSleetFill, BIconCloudSnow, BIconCloudSnowFill, BIconCloudSun, BIconCloudSunFill, BIconCloudUpload, BIconCloudUploadFill, BIconClouds, BIconCloudsFill, BIconCloudy, BIconCloudyFill, BIconCode, BIconCodeSlash, BIconCodeSquare, BIconCoin, BIconCollection, BIconCollectionFill, BIconCollectionPlay, BIconCollectionPlayFill, BIconColumns, BIconColumnsGap, BIconCommand, BIconCompass, BIconCompassFill, BIconCone, BIconConeStriped, BIconController, BIconCpu, BIconCpuFill, BIconCreditCard, BIconCreditCard2Back, BIconCreditCard2BackFill, BIconCreditCard2Front, BIconCreditCard2FrontFill, BIconCreditCardFill, BIconCrop, BIconCup, BIconCupFill, BIconCupStraw, BIconCurrencyBitcoin, BIconCurrencyDollar, BIconCurrencyEuro, BIconCurrencyExchange, BIconCurrencyPound, BIconCurrencyYen, BIconCursor, BIconCursorFill, BIconCursorText, BIconDash, BIconDashCircle, BIconDashCircleDotted, BIconDashCircleFill, BIconDashLg, BIconDashSquare, BIconDashSquareDotted, BIconDashSquareFill, BIconDiagram2, BIconDiagram2Fill, BIconDiagram3, BIconDiagram3Fill, BIconDiamond, BIconDiamondFill, BIconDiamondHalf, BIconDice1, BIconDice1Fill, BIconDice2, BIconDice2Fill, BIconDice3, BIconDice3Fill, BIconDice4, BIconDice4Fill, BIconDice5, BIconDice5Fill, BIconDice6, BIconDice6Fill, BIconDisc, BIconDiscFill, BIconDiscord, BIconDisplay, BIconDisplayFill, BIconDistributeHorizontal, BIconDistributeVertical, BIconDoorClosed, BIconDoorClosedFill, BIconDoorOpen, BIconDoorOpenFill, BIconDot, BIconDownload, BIconDroplet, BIconDropletFill, BIconDropletHalf, BIconEarbuds, BIconEasel, BIconEaselFill, BIconEgg, BIconEggFill, BIconEggFried, BIconEject, BIconEjectFill, BIconEmojiAngry, BIconEmojiAngryFill, BIconEmojiDizzy, BIconEmojiDizzyFill, BIconEmojiExpressionless, BIconEmojiExpressionlessFill, BIconEmojiFrown, BIconEmojiFrownFill, BIconEmojiHeartEyes, BIconEmojiHeartEyesFill, BIconEmojiLaughing, BIconEmojiLaughingFill, BIconEmojiNeutral, BIconEmojiNeutralFill, BIconEmojiSmile, BIconEmojiSmileFill, BIconEmojiSmileUpsideDown, BIconEmojiSmileUpsideDownFill, BIconEmojiSunglasses, BIconEmojiSunglassesFill, BIconEmojiWink, BIconEmojiWinkFill, BIconEnvelope, BIconEnvelopeFill, BIconEnvelopeOpen, BIconEnvelopeOpenFill, BIconEraser, BIconEraserFill, BIconExclamation, BIconExclamationCircle, BIconExclamationCircleFill, BIconExclamationDiamond, BIconExclamationDiamondFill, BIconExclamationLg, BIconExclamationOctagon, BIconExclamationOctagonFill, BIconExclamationSquare, BIconExclamationSquareFill, BIconExclamationTriangle, BIconExclamationTriangleFill, BIconExclude, BIconEye, BIconEyeFill, BIconEyeSlash, BIconEyeSlashFill, BIconEyedropper, BIconEyeglasses, BIconFacebook, BIconFile, BIconFileArrowDown, BIconFileArrowDownFill, BIconFileArrowUp, BIconFileArrowUpFill, BIconFileBarGraph, BIconFileBarGraphFill, BIconFileBinary, BIconFileBinaryFill, BIconFileBreak, BIconFileBreakFill, BIconFileCheck, BIconFileCheckFill, BIconFileCode, BIconFileCodeFill, BIconFileDiff, BIconFileDiffFill, BIconFileEarmark, BIconFileEarmarkArrowDown, BIconFileEarmarkArrowDownFill, BIconFileEarmarkArrowUp, BIconFileEarmarkArrowUpFill, BIconFileEarmarkBarGraph, BIconFileEarmarkBarGraphFill, BIconFileEarmarkBinary, BIconFileEarmarkBinaryFill, BIconFileEarmarkBreak, BIconFileEarmarkBreakFill, BIconFileEarmarkCheck, BIconFileEarmarkCheckFill, BIconFileEarmarkCode, BIconFileEarmarkCodeFill, BIconFileEarmarkDiff, BIconFileEarmarkDiffFill, BIconFileEarmarkEasel, BIconFileEarmarkEaselFill, BIconFileEarmarkExcel, BIconFileEarmarkExcelFill, BIconFileEarmarkFill, BIconFileEarmarkFont, BIconFileEarmarkFontFill, BIconFileEarmarkImage, BIconFileEarmarkImageFill, BIconFileEarmarkLock, BIconFileEarmarkLock2, BIconFileEarmarkLock2Fill, BIconFileEarmarkLockFill, BIconFileEarmarkMedical, BIconFileEarmarkMedicalFill, BIconFileEarmarkMinus, BIconFileEarmarkMinusFill, BIconFileEarmarkMusic, BIconFileEarmarkMusicFill, BIconFileEarmarkPdf, BIconFileEarmarkPdfFill, BIconFileEarmarkPerson, BIconFileEarmarkPersonFill, BIconFileEarmarkPlay, BIconFileEarmarkPlayFill, BIconFileEarmarkPlus, BIconFileEarmarkPlusFill, BIconFileEarmarkPost, BIconFileEarmarkPostFill, BIconFileEarmarkPpt, BIconFileEarmarkPptFill, BIconFileEarmarkRichtext, BIconFileEarmarkRichtextFill, BIconFileEarmarkRuled, BIconFileEarmarkRuledFill, BIconFileEarmarkSlides, BIconFileEarmarkSlidesFill, BIconFileEarmarkSpreadsheet, BIconFileEarmarkSpreadsheetFill, BIconFileEarmarkText, BIconFileEarmarkTextFill, BIconFileEarmarkWord, BIconFileEarmarkWordFill, BIconFileEarmarkX, BIconFileEarmarkXFill, BIconFileEarmarkZip, BIconFileEarmarkZipFill, BIconFileEasel, BIconFileEaselFill, BIconFileExcel, BIconFileExcelFill, BIconFileFill, BIconFileFont, BIconFileFontFill, BIconFileImage, BIconFileImageFill, BIconFileLock, BIconFileLock2, BIconFileLock2Fill, BIconFileLockFill, BIconFileMedical, BIconFileMedicalFill, BIconFileMinus, BIconFileMinusFill, BIconFileMusic, BIconFileMusicFill, BIconFilePdf, BIconFilePdfFill, BIconFilePerson, BIconFilePersonFill, BIconFilePlay, BIconFilePlayFill, BIconFilePlus, BIconFilePlusFill, BIconFilePost, BIconFilePostFill, BIconFilePpt, BIconFilePptFill, BIconFileRichtext, BIconFileRichtextFill, BIconFileRuled, BIconFileRuledFill, BIconFileSlides, BIconFileSlidesFill, BIconFileSpreadsheet, BIconFileSpreadsheetFill, BIconFileText, BIconFileTextFill, BIconFileWord, BIconFileWordFill, BIconFileX, BIconFileXFill, BIconFileZip, BIconFileZipFill, BIconFiles, BIconFilesAlt, BIconFilm, BIconFilter, BIconFilterCircle, BIconFilterCircleFill, BIconFilterLeft, BIconFilterRight, BIconFilterSquare, BIconFilterSquareFill, BIconFlag, BIconFlagFill, BIconFlower1, BIconFlower2, BIconFlower3, BIconFolder, BIconFolder2, BIconFolder2Open, BIconFolderCheck, BIconFolderFill, BIconFolderMinus, BIconFolderPlus, BIconFolderSymlink, BIconFolderSymlinkFill, BIconFolderX, BIconFonts, BIconForward, BIconForwardFill, BIconFront, BIconFullscreen, BIconFullscreenExit, BIconFunnel, BIconFunnelFill, BIconGear, BIconGearFill, BIconGearWide, BIconGearWideConnected, BIconGem, BIconGenderAmbiguous, BIconGenderFemale, BIconGenderMale, BIconGenderTrans, BIconGeo, BIconGeoAlt, BIconGeoAltFill, BIconGeoFill, BIconGift, BIconGiftFill, BIconGithub, BIconGlobe, BIconGlobe2, BIconGoogle, BIconGraphDown, BIconGraphUp, BIconGrid, BIconGrid1x2, BIconGrid1x2Fill, BIconGrid3x2, BIconGrid3x2Gap, BIconGrid3x2GapFill, BIconGrid3x3, BIconGrid3x3Gap, BIconGrid3x3GapFill, BIconGridFill, BIconGripHorizontal, BIconGripVertical, BIconHammer, BIconHandIndex, BIconHandIndexFill, BIconHandIndexThumb, BIconHandIndexThumbFill, BIconHandThumbsDown, BIconHandThumbsDownFill, BIconHandThumbsUp, BIconHandThumbsUpFill, BIconHandbag, BIconHandbagFill, BIconHash, BIconHdd, BIconHddFill, BIconHddNetwork, BIconHddNetworkFill, BIconHddRack, BIconHddRackFill, BIconHddStack, BIconHddStackFill, BIconHeadphones, BIconHeadset, BIconHeadsetVr, BIconHeart, BIconHeartFill, BIconHeartHalf, BIconHeptagon, BIconHeptagonFill, BIconHeptagonHalf, BIconHexagon, BIconHexagonFill, BIconHexagonHalf, BIconHourglass, BIconHourglassBottom, BIconHourglassSplit, BIconHourglassTop, BIconHouse, BIconHouseDoor, BIconHouseDoorFill, BIconHouseFill, BIconHr, BIconHurricane, BIconImage, BIconImageAlt, BIconImageFill, BIconImages, BIconInbox, BIconInboxFill, BIconInboxes, BIconInboxesFill, BIconInfo, BIconInfoCircle, BIconInfoCircleFill, BIconInfoLg, BIconInfoSquare, BIconInfoSquareFill, BIconInputCursor, BIconInputCursorText, BIconInstagram, BIconIntersect, BIconJournal, BIconJournalAlbum, BIconJournalArrowDown, BIconJournalArrowUp, BIconJournalBookmark, BIconJournalBookmarkFill, BIconJournalCheck, BIconJournalCode, BIconJournalMedical, BIconJournalMinus, BIconJournalPlus, BIconJournalRichtext, BIconJournalText, BIconJournalX, BIconJournals, BIconJoystick, BIconJustify, BIconJustifyLeft, BIconJustifyRight, BIconKanban, BIconKanbanFill, BIconKey, BIconKeyFill, BIconKeyboard, BIconKeyboardFill, BIconLadder, BIconLamp, BIconLampFill, BIconLaptop, BIconLaptopFill, BIconLayerBackward, BIconLayerForward, BIconLayers, BIconLayersFill, BIconLayersHalf, BIconLayoutSidebar, BIconLayoutSidebarInset, BIconLayoutSidebarInsetReverse, BIconLayoutSidebarReverse, BIconLayoutSplit, BIconLayoutTextSidebar, BIconLayoutTextSidebarReverse, BIconLayoutTextWindow, BIconLayoutTextWindowReverse, BIconLayoutThreeColumns, BIconLayoutWtf, BIconLifePreserver, BIconLightbulb, BIconLightbulbFill, BIconLightbulbOff, BIconLightbulbOffFill, BIconLightning, BIconLightningCharge, BIconLightningChargeFill, BIconLightningFill, BIconLink, BIconLink45deg, BIconLinkedin, BIconList, BIconListCheck, BIconListNested, BIconListOl, BIconListStars, BIconListTask, BIconListUl, BIconLock, BIconLockFill, BIconMailbox, BIconMailbox2, BIconMap, BIconMapFill, BIconMarkdown, BIconMarkdownFill, BIconMask, BIconMastodon, BIconMegaphone, BIconMegaphoneFill, BIconMenuApp, BIconMenuAppFill, BIconMenuButton, BIconMenuButtonFill, BIconMenuButtonWide, BIconMenuButtonWideFill, BIconMenuDown, BIconMenuUp, BIconMessenger, BIconMic, BIconMicFill, BIconMicMute, BIconMicMuteFill, BIconMinecart, BIconMinecartLoaded, BIconMoisture, BIconMoon, BIconMoonFill, BIconMoonStars, BIconMoonStarsFill, BIconMouse, BIconMouse2, BIconMouse2Fill, BIconMouse3, BIconMouse3Fill, BIconMouseFill, BIconMusicNote, BIconMusicNoteBeamed, BIconMusicNoteList, BIconMusicPlayer, BIconMusicPlayerFill, BIconNewspaper, BIconNodeMinus, BIconNodeMinusFill, BIconNodePlus, BIconNodePlusFill, BIconNut, BIconNutFill, BIconOctagon, BIconOctagonFill, BIconOctagonHalf, BIconOption, BIconOutlet, BIconPaintBucket, BIconPalette, BIconPalette2, BIconPaletteFill, BIconPaperclip, BIconParagraph, BIconPatchCheck, BIconPatchCheckFill, BIconPatchExclamation, BIconPatchExclamationFill, BIconPatchMinus, BIconPatchMinusFill, BIconPatchPlus, BIconPatchPlusFill, BIconPatchQuestion, BIconPatchQuestionFill, BIconPause, BIconPauseBtn, BIconPauseBtnFill, BIconPauseCircle, BIconPauseCircleFill, BIconPauseFill, BIconPeace, BIconPeaceFill, BIconPen, BIconPenFill, BIconPencil, BIconPencilFill, BIconPencilSquare, BIconPentagon, BIconPentagonFill, BIconPentagonHalf, BIconPeople, BIconPeopleFill, BIconPercent, BIconPerson, BIconPersonBadge, BIconPersonBadgeFill, BIconPersonBoundingBox, BIconPersonCheck, BIconPersonCheckFill, BIconPersonCircle, BIconPersonDash, BIconPersonDashFill, BIconPersonFill, BIconPersonLinesFill, BIconPersonPlus, BIconPersonPlusFill, BIconPersonSquare, BIconPersonX, BIconPersonXFill, BIconPhone, BIconPhoneFill, BIconPhoneLandscape, BIconPhoneLandscapeFill, BIconPhoneVibrate, BIconPhoneVibrateFill, BIconPieChart, BIconPieChartFill, BIconPiggyBank, BIconPiggyBankFill, BIconPin, BIconPinAngle, BIconPinAngleFill, BIconPinFill, BIconPinMap, BIconPinMapFill, BIconPip, BIconPipFill, BIconPlay, BIconPlayBtn, BIconPlayBtnFill, BIconPlayCircle, BIconPlayCircleFill, BIconPlayFill, BIconPlug, BIconPlugFill, BIconPlus, BIconPlusCircle, BIconPlusCircleDotted, BIconPlusCircleFill, BIconPlusLg, BIconPlusSquare, BIconPlusSquareDotted, BIconPlusSquareFill, BIconPower, BIconPrinter, BIconPrinterFill, BIconPuzzle, BIconPuzzleFill, BIconQuestion, BIconQuestionCircle, BIconQuestionCircleFill, BIconQuestionDiamond, BIconQuestionDiamondFill, BIconQuestionLg, BIconQuestionOctagon, BIconQuestionOctagonFill, BIconQuestionSquare, BIconQuestionSquareFill, BIconRainbow, BIconReceipt, BIconReceiptCutoff, BIconReception0, BIconReception1, BIconReception2, BIconReception3, BIconReception4, BIconRecord, BIconRecord2, BIconRecord2Fill, BIconRecordBtn, BIconRecordBtnFill, BIconRecordCircle, BIconRecordCircleFill, BIconRecordFill, BIconRecycle, BIconReddit, BIconReply, BIconReplyAll, BIconReplyAllFill, BIconReplyFill, BIconRss, BIconRssFill, BIconRulers, BIconSafe, BIconSafe2, BIconSafe2Fill, BIconSafeFill, BIconSave, BIconSave2, BIconSave2Fill, BIconSaveFill, BIconScissors, BIconScrewdriver, BIconSdCard, BIconSdCardFill, BIconSearch, BIconSegmentedNav, BIconServer, BIconShare, BIconShareFill, BIconShield, BIconShieldCheck, BIconShieldExclamation, BIconShieldFill, BIconShieldFillCheck, BIconShieldFillExclamation, BIconShieldFillMinus, BIconShieldFillPlus, BIconShieldFillX, BIconShieldLock, BIconShieldLockFill, BIconShieldMinus, BIconShieldPlus, BIconShieldShaded, BIconShieldSlash, BIconShieldSlashFill, BIconShieldX, BIconShift, BIconShiftFill, BIconShop, BIconShopWindow, BIconShuffle, BIconSignpost, BIconSignpost2, BIconSignpost2Fill, BIconSignpostFill, BIconSignpostSplit, BIconSignpostSplitFill, BIconSim, BIconSimFill, BIconSkipBackward, BIconSkipBackwardBtn, BIconSkipBackwardBtnFill, BIconSkipBackwardCircle, BIconSkipBackwardCircleFill, BIconSkipBackwardFill, BIconSkipEnd, BIconSkipEndBtn, BIconSkipEndBtnFill, BIconSkipEndCircle, BIconSkipEndCircleFill, BIconSkipEndFill, BIconSkipForward, BIconSkipForwardBtn, BIconSkipForwardBtnFill, BIconSkipForwardCircle, BIconSkipForwardCircleFill, BIconSkipForwardFill, BIconSkipStart, BIconSkipStartBtn, BIconSkipStartBtnFill, BIconSkipStartCircle, BIconSkipStartCircleFill, BIconSkipStartFill, BIconSkype, BIconSlack, BIconSlash, BIconSlashCircle, BIconSlashCircleFill, BIconSlashLg, BIconSlashSquare, BIconSlashSquareFill, BIconSliders, BIconSmartwatch, BIconSnow, BIconSnow2, BIconSnow3, BIconSortAlphaDown, BIconSortAlphaDownAlt, BIconSortAlphaUp, BIconSortAlphaUpAlt, BIconSortDown, BIconSortDownAlt, BIconSortNumericDown, BIconSortNumericDownAlt, BIconSortNumericUp, BIconSortNumericUpAlt, BIconSortUp, BIconSortUpAlt, BIconSoundwave, BIconSpeaker, BIconSpeakerFill, BIconSpeedometer, BIconSpeedometer2, BIconSpellcheck, BIconSquare, BIconSquareFill, BIconSquareHalf, BIconStack, BIconStar, BIconStarFill, BIconStarHalf, BIconStars, BIconStickies, BIconStickiesFill, BIconSticky, BIconStickyFill, BIconStop, BIconStopBtn, BIconStopBtnFill, BIconStopCircle, BIconStopCircleFill, BIconStopFill, BIconStoplights, BIconStoplightsFill, BIconStopwatch, BIconStopwatchFill, BIconSubtract, BIconSuitClub, BIconSuitClubFill, BIconSuitDiamond, BIconSuitDiamondFill, BIconSuitHeart, BIconSuitHeartFill, BIconSuitSpade, BIconSuitSpadeFill, BIconSun, BIconSunFill, BIconSunglasses, BIconSunrise, BIconSunriseFill, BIconSunset, BIconSunsetFill, BIconSymmetryHorizontal, BIconSymmetryVertical, BIconTable, BIconTablet, BIconTabletFill, BIconTabletLandscape, BIconTabletLandscapeFill, BIconTag, BIconTagFill, BIconTags, BIconTagsFill, BIconTelegram, BIconTelephone, BIconTelephoneFill, BIconTelephoneForward, BIconTelephoneForwardFill, BIconTelephoneInbound, BIconTelephoneInboundFill, BIconTelephoneMinus, BIconTelephoneMinusFill, BIconTelephoneOutbound, BIconTelephoneOutboundFill, BIconTelephonePlus, BIconTelephonePlusFill, BIconTelephoneX, BIconTelephoneXFill, BIconTerminal, BIconTerminalFill, BIconTextCenter, BIconTextIndentLeft, BIconTextIndentRight, BIconTextLeft, BIconTextParagraph, BIconTextRight, BIconTextarea, BIconTextareaResize, BIconTextareaT, BIconThermometer, BIconThermometerHalf, BIconThermometerHigh, BIconThermometerLow, BIconThermometerSnow, BIconThermometerSun, BIconThreeDots, BIconThreeDotsVertical, BIconToggle2Off, BIconToggle2On, BIconToggleOff, BIconToggleOn, BIconToggles, BIconToggles2, BIconTools, BIconTornado, BIconTranslate, BIconTrash, BIconTrash2, BIconTrash2Fill, BIconTrashFill, BIconTree, BIconTreeFill, BIconTriangle, BIconTriangleFill, BIconTriangleHalf, BIconTrophy, BIconTrophyFill, BIconTropicalStorm, BIconTruck, BIconTruckFlatbed, BIconTsunami, BIconTv, BIconTvFill, BIconTwitch, BIconTwitter, BIconType, BIconTypeBold, BIconTypeH1, BIconTypeH2, BIconTypeH3, BIconTypeItalic, BIconTypeStrikethrough, BIconTypeUnderline, BIconUiChecks, BIconUiChecksGrid, BIconUiRadios, BIconUiRadiosGrid, BIconUmbrella, BIconUmbrellaFill, BIconUnion, BIconUnlock, BIconUnlockFill, BIconUpc, BIconUpcScan, BIconUpload, BIconVectorPen, BIconViewList, BIconViewStacked, BIconVinyl, BIconVinylFill, BIconVoicemail, BIconVolumeDown, BIconVolumeDownFill, BIconVolumeMute, BIconVolumeMuteFill, BIconVolumeOff, BIconVolumeOffFill, BIconVolumeUp, BIconVolumeUpFill, BIconVr, BIconWallet, BIconWallet2, BIconWalletFill, BIconWatch, BIconWater, BIconWhatsapp, BIconWifi, BIconWifi1, BIconWifi2, BIconWifiOff, BIconWind, BIconWindow, BIconWindowDock, BIconWindowSidebar, BIconWrench, BIconX, BIconXCircle, BIconXCircleFill, BIconXDiamond, BIconXDiamondFill, BIconXLg, BIconXOctagon, BIconXOctagonFill, BIconXSquare, BIconXSquareFill, BIconYoutube, BIconZoomIn, BIconZoomOut, AlertPlugin, BAlert, AspectPlugin, BAspect, AvatarPlugin, BAvatar, BAvatarGroup, BadgePlugin, BBadge, BreadcrumbPlugin, BBreadcrumb, BBreadcrumbItem, ButtonPlugin, BButton, BButtonClose, ButtonGroupPlugin, BButtonGroup, ButtonToolbarPlugin, BButtonToolbar, CalendarPlugin, BCalendar, CardPlugin, BCard, BCardBody, BCardFooter, BCardGroup, BCardHeader, BCardImg, BCardImgLazy, BCardSubTitle, BCardText, BCardTitle, CarouselPlugin, BCarousel, BCarouselSlide, CollapsePlugin, BCollapse, DropdownPlugin, BDropdown, BDropdownItem, BDropdownItemButton, BDropdownDivider, BDropdownForm, BDropdownGroup, BDropdownHeader, BDropdownText, EmbedPlugin, BEmbed, FormPlugin, BForm, BFormDatalist, BFormText, BFormInvalidFeedback, BFormValidFeedback, FormCheckboxPlugin, BFormCheckbox, BFormCheckboxGroup, FormDatepickerPlugin, BFormDatepicker, FormFilePlugin, BFormFile, FormGroupPlugin, BFormGroup, FormInputPlugin, BFormInput, FormRadioPlugin, BFormRadio, BFormRadioGroup, FormRatingPlugin, BFormRating, FormTagsPlugin, BFormTags, BFormTag, FormSelectPlugin, BFormSelect, BFormSelectOption, BFormSelectOptionGroup, FormSpinbuttonPlugin, BFormSpinbutton, FormTextareaPlugin, BFormTextarea, FormTimepickerPlugin, BFormTimepicker, ImagePlugin, BImg, BImgLazy, InputGroupPlugin, BInputGroup, BInputGroupAddon, BInputGroupAppend, BInputGroupPrepend, BInputGroupText, JumbotronPlugin, BJumbotron, LayoutPlugin, BContainer, BRow, BCol, BFormRow, LinkPlugin, BLink, ListGroupPlugin, BListGroup, BListGroupItem, MediaPlugin, BMedia, BMediaAside, BMediaBody, ModalPlugin, BModal, NavPlugin, BNav, BNavForm, BNavItem, BNavItemDropdown, BNavText, NavbarPlugin, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle, OverlayPlugin, BOverlay, PaginationPlugin, BPagination, PaginationNavPlugin, BPaginationNav, PopoverPlugin, BPopover, ProgressPlugin, BProgress, BProgressBar, SidebarPlugin, BSidebar, SkeletonPlugin, BSkeleton, BSkeletonIcon, BSkeletonImg, BSkeletonTable, BSkeletonWrapper, SpinnerPlugin, BSpinner, TablePlugin, TableLitePlugin, TableSimplePlugin, BTable, BTableLite, BTableSimple, BTbody, BThead, BTfoot, BTr, BTh, BTd, TabsPlugin, BTabs, BTab, TimePlugin, BTime, ToastPlugin, BToast, BToaster, TooltipPlugin, BTooltip, VBHoverPlugin, VBHover, VBModalPlugin, VBModal, VBPopoverPlugin, VBPopover, VBScrollspyPlugin, VBScrollspy, VBTogglePlugin, VBToggle, VBTooltipPlugin, VBTooltip, VBVisiblePlugin, VBVisible, default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\bootstrap-vue\\esm\\index.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container[data-v-269bc096] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\lodash\\lodash.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-2!../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../node_modules/vue-loader/lib??vue-loader-options!./LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\sweetalert2\\dist\\sweetalert2.all.js'");

/***/ }),

/***/ "./node_modules/vee-validate/dist/locale/en.json":
/*!*******************************************************!*\
  !*** ./node_modules/vee-validate/dist/locale/en.json ***!
  \*******************************************************/
/*! exports provided: code, messages, default */
/***/ (function(module) {

!(function webpackMissingModule() { var e = new Error("Cannot find module 'vee-validate/dist/locale/en'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ }),

/***/ "./node_modules/vee-validate/dist/locale/id.json":
/*!*******************************************************!*\
  !*** ./node_modules/vee-validate/dist/locale/id.json ***!
  \*******************************************************/
/*! exports provided: code, messages, default */
/***/ (function(module) {

!(function webpackMissingModule() { var e = new Error("Cannot find module 'vee-validate/dist/locale/id'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


/***/ }),

/***/ "./node_modules/vee-validate/dist/rules.js":
/*!*************************************************!*\
  !*** ./node_modules/vee-validate/dist/rules.js ***!
  \*************************************************/
/*! exports provided: alpha, alpha_dash, alpha_num, alpha_spaces, between, confirmed, digits, dimensions, double, email, excluded, ext, image, integer, is, is_not, length, max, max_value, mimes, min, min_value, numeric, oneOf, regex, required, required_if, size */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\vee-validate\\dist\\rules.js'");

/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.esm.js ***!
  \************************************************************/
/*! exports provided: ValidationObserver, ValidationProvider, configure, extend, localeChanged, localize, normalizeRules, setInteractionMode, validate, version, withValidation */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\vee-validate\\dist\\vee-validate.esm.js'");

/***/ }),

/***/ "./node_modules/vue-i18n/dist/vue-i18n.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\vue-i18n\\dist\\vue-i18n.esm.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\vue-loader\\lib\\runtime\\componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\laragon\\www\\test-flower-advisor\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),

/***/ "./resources/js/LoginApp.vue":
/*!***********************************!*\
  !*** ./resources/js/LoginApp.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginApp_vue_vue_type_template_id_269bc096_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginApp.vue?vue&type=template&id=269bc096&scoped=true */ "./resources/js/LoginApp.vue?vue&type=template&id=269bc096&scoped=true");
/* harmony import */ var _LoginApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginApp.vue?vue&type=script&lang=js */ "./resources/js/LoginApp.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _LoginApp_vue_vue_type_style_index_0_id_269bc096_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true */ "./resources/js/LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LoginApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LoginApp_vue_vue_type_template_id_269bc096_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _LoginApp_vue_vue_type_template_id_269bc096_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "269bc096",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/LoginApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/LoginApp.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./resources/js/LoginApp.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./LoginApp.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LoginApp.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_style_index_0_id_269bc096_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--7-2!../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../node_modules/vue-loader/lib??vue-loader-options!./LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LoginApp.vue?vue&type=style&index=0&id=269bc096&lang=scss&scoped=true");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_style_index_0_id_269bc096_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_style_index_0_id_269bc096_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_style_index_0_id_269bc096_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_style_index_0_id_269bc096_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/LoginApp.vue?vue&type=template&id=269bc096&scoped=true":
/*!*****************************************************************************!*\
  !*** ./resources/js/LoginApp.vue?vue&type=template&id=269bc096&scoped=true ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_template_id_269bc096_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../node_modules/vue-loader/lib??vue-loader-options!./LoginApp.vue?vue&type=template&id=269bc096&scoped=true */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/LoginApp.vue?vue&type=template&id=269bc096&scoped=true");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_template_id_269bc096_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginApp_vue_vue_type_template_id_269bc096_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/auth.js":
/*!******************************!*\
  !*** ./resources/js/auth.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @js/bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var _js_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_bootstrap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_axios_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/axios-config */ "./resources/js/axios-config.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _components_bootstraps_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/bootstraps/base */ "./resources/js/components/bootstraps/base/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _js_vendor_vue_i18n_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @js/vendor/vue-i18n-config */ "./resources/js/vendor/vue-i18n-config.js");
/* harmony import */ var _js_vendor_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @js/vendor/sweet-alert */ "./resources/js/vendor/sweet-alert.js");
/* harmony import */ var _js_vendor_sweet_alert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_vendor_sweet_alert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _js_vendor_vee_validate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @js/vendor/vee-validate */ "./resources/js/vendor/vee-validate.js");







var i18n = Object(_js_vendor_vue_i18n_config__WEBPACK_IMPORTED_MODULE_6__["createLocales"])(window.settings.locale);


vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(_components_bootstraps_base__WEBPACK_IMPORTED_MODULE_4__["default"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.component("ValidationProvider", vee_validate__WEBPACK_IMPORTED_MODULE_5__["ValidationProvider"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.component("ValidationObserver", vee_validate__WEBPACK_IMPORTED_MODULE_5__["ValidationObserver"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.component('login-app', __webpack_require__(/*! ./LoginApp.vue */ "./resources/js/LoginApp.vue")["default"]);
vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$app = window.settings;
vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$http = _js_axios_config__WEBPACK_IMPORTED_MODULE_2__["axios"];
vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$app.route = window.route;
vue__WEBPACK_IMPORTED_MODULE_1___default.a.prototype.$app.alert = window.swal;
var app = new vue__WEBPACK_IMPORTED_MODULE_1___default.a({
  el: '#auth',
  i18n: i18n
});

/***/ }),

/***/ "./resources/js/axios-config.js":
/*!**************************************!*\
  !*** ./resources/js/axios-config.js ***!
  \**************************************/
/*! exports provided: axios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "axios", function() { return axios__WEBPACK_IMPORTED_MODULE_0___default.a; });


/**
 * Axios config
 */
axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
var token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
  axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
}


/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

// try {
//     window.Popper = require('popper.js').default;
//     window.$ = window.jQuery = require('jquery');

//     require('bootstrap');
// } catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.doLogout = function (e) {
  e.preventDefault();
  document.getElementById('logout-form').submit();
};
var jsonSettings = document.querySelector('[data-settings-selector="settings-json"]');
window.settings = jsonSettings ? JSON.parse(jsonSettings.textContent) : {};

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/bootstraps/base sync recursive \\.vue$/":
/*!**************************************************************!*\
  !*** ./resources/js/components/bootstraps/base sync \.vue$/ ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./InvalidFeedback.vue": "./resources/js/components/bootstraps/base/InvalidFeedback.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/components/bootstraps/base sync recursive \\.vue$/";

/***/ }),

/***/ "./resources/js/components/bootstraps/base/InvalidFeedback.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/bootstraps/base/InvalidFeedback.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvalidFeedback_vue_vue_type_template_id_5d13ec66__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvalidFeedback.vue?vue&type=template&id=5d13ec66 */ "./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=template&id=5d13ec66");
/* harmony import */ var _InvalidFeedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvalidFeedback.vue?vue&type=script&lang=js */ "./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InvalidFeedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvalidFeedback_vue_vue_type_template_id_5d13ec66__WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvalidFeedback_vue_vue_type_template_id_5d13ec66__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/bootstraps/base/InvalidFeedback.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=script&lang=js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvalidFeedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvalidFeedback.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvalidFeedback_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=template&id=5d13ec66":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=template&id=5d13ec66 ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InvalidFeedback_vue_vue_type_template_id_5d13ec66__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InvalidFeedback.vue?vue&type=template&id=5d13ec66 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/bootstraps/base/InvalidFeedback.vue?vue&type=template&id=5d13ec66");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InvalidFeedback_vue_vue_type_template_id_5d13ec66__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_InvalidFeedback_vue_vue_type_template_id_5d13ec66__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/bootstraps/base/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/bootstraps/base/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var files = __webpack_require__("./resources/js/components/bootstraps/base sync recursive \\.vue$/"); // the power of autoload hehehe
/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(Vue) {
    files.keys().map(function (key) {
      var componentName = files(key)["default"].name ? files(key)["default"].name : key.split("/").pop().split(".").shift();
      Vue.component(componentName, files(key)["default"]);
    });
  }
});

/***/ }),

/***/ "./resources/js/lang sync recursive \\.js$/":
/*!***************************************!*\
  !*** ./resources/js/lang sync \.js$/ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en/auth.js": "./resources/js/lang/en/auth.js",
	"./en/general.js": "./resources/js/lang/en/general.js",
	"./en/menu.js": "./resources/js/lang/en/menu.js",
	"./en/movie.js": "./resources/js/lang/en/movie.js",
	"./id/auth.js": "./resources/js/lang/id/auth.js",
	"./id/general.js": "./resources/js/lang/id/general.js",
	"./id/menu.js": "./resources/js/lang/id/menu.js",
	"./id/movie.js": "./resources/js/lang/id/movie.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/lang sync recursive \\.js$/";

/***/ }),

/***/ "./resources/js/lang/en/auth.js":
/*!**************************************!*\
  !*** ./resources/js/lang/en/auth.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "login": {
    "title": "Please log in to continue",
    "username": "Username",
    "password": "Password"
  },
  "button": {
    "login": "Login"
  },
  "message": {
    "failed": "Failed",
    "failed_msg": "Incorrect username or password"
  },
  "logout": "Logout"
});

/***/ }),

/***/ "./resources/js/lang/en/general.js":
/*!*****************************************!*\
  !*** ./resources/js/lang/en/general.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "button": {
    "upload": "Upload",
    "cancel": "Cancel",
    "back": "Back"
  },
  "director": "Director",
  "loading": "Loading...",
  "type": {
    "success": "Success",
    "error": "Error",
    "warning": "Warning",
    "info": "Information"
  }
});

/***/ }),

/***/ "./resources/js/lang/en/menu.js":
/*!**************************************!*\
  !*** ./resources/js/lang/en/menu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "movies": "Movies",
  "favorite_movies": "Favorite Movies"
});

/***/ }),

/***/ "./resources/js/lang/en/movie.js":
/*!***************************************!*\
  !*** ./resources/js/lang/en/movie.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "button": {
    "detail": "Detail",
    "back": "Back",
    "favorite": "Add to Favorite",
    "del_favorite": "Remove from Favorite"
  },
  "filter": {
    "search": "Search",
    "search_placeholder": "Search Title"
  }
});

/***/ }),

/***/ "./resources/js/lang/id/auth.js":
/*!**************************************!*\
  !*** ./resources/js/lang/id/auth.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "login": {
    "title": "Silahkan masuk untuk melanjutkan",
    "username": "Nama pengguna",
    "password": "Kata sandi"
  },
  "button": {
    "login": "Masuk"
  },
  "message": {
    "failed": "Gagal",
    "failed_msg": "Kata sandi atau nama pengguna salah"
  },
  "logout": "Keluar"
});

/***/ }),

/***/ "./resources/js/lang/id/general.js":
/*!*****************************************!*\
  !*** ./resources/js/lang/id/general.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "button": {
    "upload": "Unggah",
    "cancel": "Batal",
    "back": "Kembali"
  },
  "director": "Direktur",
  "loading": "Memuat...",
  "type": {
    "success": "Sukses",
    "error": "Gagal",
    "warning": "Peringatan",
    "info": "Informasi"
  }
});

/***/ }),

/***/ "./resources/js/lang/id/menu.js":
/*!**************************************!*\
  !*** ./resources/js/lang/id/menu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "movies": "Film",
  "favorite_movies": "Film Favorit"
});

/***/ }),

/***/ "./resources/js/lang/id/movie.js":
/*!***************************************!*\
  !*** ./resources/js/lang/id/movie.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "button": {
    "detail": "Detail",
    "back": "Kembali",
    "favorite": "Simpan ke Favorit",
    "del_favorite": "Hapus dari Favorit"
  },
  "filter": {
    "search": "Cari",
    "search_placeholder": "Cari Judul"
  }
});

/***/ }),

/***/ "./resources/js/vendor/sweet-alert.js":
/*!********************************************!*\
  !*** ./resources/js/vendor/sweet-alert.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");

/***/ }),

/***/ "./resources/js/vendor/vee-validate.js":
/*!*********************************************!*\
  !*** ./resources/js/vendor/vee-validate.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/locale/id */ "./node_modules/vee-validate/dist/locale/id.json");
var vee_validate_dist_locale_id__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/id */ "./node_modules/vee-validate/dist/locale/id.json", 1);
/* harmony import */ var vee_validate_dist_locale_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/locale/en */ "./node_modules/vee-validate/dist/locale/en.json");
var vee_validate_dist_locale_en__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/en */ "./node_modules/vee-validate/dist/locale/en.json", 1);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var locale = window.settings.locale == 'en' ? vee_validate_dist_locale_en__WEBPACK_IMPORTED_MODULE_3__ : vee_validate_dist_locale_id__WEBPACK_IMPORTED_MODULE_2__;

// alpha, alpha_dash, alpha_num, alpha_spaces, between, confirmed, digits, dimensions, email,
// excluded, ext, image, integer, is, is_not, length, max, max_value, mimes, min, min_value,
// numeric, oneOf, regex, required, required_if, size
for (var rule in vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__) {
  Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__[rule]), {}, {
    // add its message
    message: locale.messages[rule]
  }));
}

/***/ }),

/***/ "./resources/js/vendor/vue-i18n-config.js":
/*!************************************************!*\
  !*** ./resources/js/vendor/vue-i18n-config.js ***!
  \************************************************/
/*! exports provided: createLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocales", function() { return createLocales; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]);
var Locale = function Locale(locale) {
  var files = __webpack_require__("./resources/js/lang sync recursive \\.js$/");
  var lang = Object.create(null);
  Object.assign(lang, _defineProperty({}, locale, {}));
  files.keys().forEach(function (key) {
    var names = _toConsumableArray(key.split('/'));
    var section = names.pop().split('.').shift();
    var i18n = names.pop();
    if (i18n === locale) Object.assign(lang[i18n], _defineProperty({}, section, files(key)["default"]));
  });
  return lang;
};
function createLocales(locale) {
  return new vue_i18n__WEBPACK_IMPORTED_MODULE_1__["default"]({
    locale: locale,
    messages: Locale(locale)
  });
}

/***/ }),

/***/ 1:
/*!************************************!*\
  !*** multi ./resources/js/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\laragon\www\test-flower-advisor\resources\js\auth.js */"./resources/js/auth.js");


/***/ })

/******/ });