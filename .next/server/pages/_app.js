module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ "./src/store/configureStore.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "I:\\react4\\src\\pages\\_app.js";
 //ant디자인

 //proptype체크

 //사실 없어도댐

 //헤드건드릴수있음.




const App = ({
  Component
}) => {
  //index.js의 리턴값을 컴포넌트로 받는다.
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "NextReact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_6___default()(App)));

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./src/reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initialState = {}; //비동기 액션 크리에이터(saga)
//이전 상태와 action을 통해 다음 상태를 만들어내는 함수
//combinereducer
//리듀서가 함수인데 이거 다 합쳐준다.

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_2__["combineReducers"])({
  index: (state = initialState, action) => {
    //서버사이드 랜더링 위해
    switch (action.type) {
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["HYDRATE"]:
        console.log('HYDRATE', action);
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        {
          return state;
        }
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_0__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/post.js":
/*!******************************!*\
  !*** ./src/reducers/post.js ***!
  \******************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/*더미데이터 생성
* 1.shortId : 겹치기 힘든 아이디를 생성해준다.
* 2.faker : 각종 더미데이터 제공*/

const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '황경하'
    },
    content: '첫 번재 게시글 #해시 #리엑트',
    Images: [{
      //시퀄라이즈 시 대문자로 반환되기에 대문자로 (조인연산인듯?)
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832'
    }, {
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      src: "../images/그림1.png"
    }],
    Comments: [{
      User: {
        nickname: 'he'
      },
      content: "aaaa"
    }]
  }],
  imagePaths: [],
  //이미지 업로드시에 이미지 저장
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false
};
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const addPostRequestAction = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addCommentRequestAction = data => ({
  type: ADD_POST_REQUEST,
  data
});

const dummyPostAction = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  Images: [{
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832"
  }],
  User: {
    id: 2,
    nickname: '황경하'
  },
  Comments: [{
    User: {
      nickname: 'he'
    },
    content: "aaaa"
  }]
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  content: data,
  User: {
    id: 2,
    nickname: '황경하'
  }
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostDone: false,
        addPostError: false,
        addPostLoading: true
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPostAction(action.data), ...state.mainPosts],
        addPostDone: true,
        addPostError: false,
        addPostLoading: false
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostDone: false,
        addPostError: action.error,
        addPostLoading: false
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentDone: false,
        addCommentLoading: true
      });

    case ADD_COMMENT_SUCCESS:
      {
        /*action.data.comment , userid , postid*/
        const postIndex = state.mainPosts.findIndex(y => y.id === action.data.postId);
        const post = state.mainPosts[postIndex];
        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        const mainPosts = [...state.mainPosts];
        mainPosts[postIndex] = post;
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentDone: true,
          addCommentLoading: false
        });
      }

    case ADD_COMMENT_FAILURE:
      return {
        addCommentDone: false,
        addCommentError: action.error,
        addCommentLoading: false
      };

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: initialState, loginAction, logoutAction, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginSuccessAction, loginFailureAction, logoutSuccessAction, logoutFailureAction, logoutRequestAction, loginRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAction", function() { return loginAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAction", function() { return logoutAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccessAction", function() { return loginSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFailureAction", function() { return loginFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccessAction", function() { return logoutSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutFailureAction", function() { return logoutFailureAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,

  /*로그아웃 시도중*/
  user: [{
    Posts: [null],
    Followings: 0,
    Followers: 0
  }],
  isSigningUp: false,
  isSignedIn: false,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  signUpData: {},
  loginData: {}
};
const loginAction = data => {
  return dispatch => {
    dispatch(loginRequestAction());

    try {
      dispatch(loginSuccessAction(data));
    } catch (err) {
      dispatch(loginFailureAction(data));
    }
  };
};
const logoutAction = data => {
  return dispatch => {
    dispatch(logoutRequestAction());

    try {
      dispatch(logoutSuccessAction(data));
    } catch (err) {
      dispatch(logoutFailureAction(data));
    }
  };
};
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_REQUEST';
const SIGN_UP_FAILURE = 'SIGN_UP_REQUEST';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_REQUEST';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const loginSuccessAction = data => {
  return {
    type: LOG_IN_SUCCESS,
    data
  };
};
const loginFailureAction = data => {
  return {
    type: LOG_IN_FAILURE,
    data
  };
};
const logoutSuccessAction = data => {
  return {
    type: LOG_OUT_SUCCESS,
    data
  };
};
const logoutFailureAction = data => {
  return {
    type: LOG_OUT_FAILURE,
    data
  };
};
const logoutRequestAction = data => {
  return {
    type: LOG_OUT_REQUEST,
    data
  };
};
const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  nickname: '황경하',
  id: 1,
  Posts: [],
  Followings: [],
  Followers: []
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: true,
          user: action.data
        });
      }

    case LOG_IN_SUCCESS:
      {
        console.log("redux Login");
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingIn: false,
          isLoggedIn: true,
          user: dummyUser(action.data)
        });
      }

    case LOG_IN_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggedIn: false,
          isLoggingIn: false
        });
      }

    case LOG_OUT_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggedIn: false,
          isLoggingOut: false
        });
      }

    case LOG_OUT_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggedIn: false,
          isLoggingOut: false
        });
      }

    case LOG_OUT_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isLoggingOut: true,
          user: action.data
        });
      }

    case SIGN_UP_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSigningUp: true,
          isSignedIn: false
        });
      }

    case SIGN_UP_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSigningUp: false,
          isSignedIn: false,
          signUpData: action.data
        });
      }

    case SIGN_UP_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isSigningUp: false,
          isSignedIn: false
        });
      }

    case CHANGE_NICKNAME_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          changeNicknameLoading: true,
          changeNicknameDone: false,
          changeNicknameError: false
        });
      }

    case CHANGE_NICKNAME_FAILURE:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          changeNicknameLoading: false,
          changeNicknameDone: true,
          changeNicknameError: false
        });
      }

    case CHANGE_NICKNAME_SUCCESS:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          changeNicknameLoading: false,
          changeNicknameDone: false,
          changeNicknameError: true
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/sagas/index.js":
/*!****************************!*\
  !*** ./src/sagas/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./src/sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/sagas/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_4__);





/*
function logInAPI(data){/!*action.data가 들어온다.*!/
    return axios.port('/api/login' ,data)
}
function logOutAPI(){
    return axios.port('/api/logout')
}

function addPostAPI(data){
    return axios.post('/api/post' , data)
}*/

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}
/*generator 은 yield단위로 멈추고 , value로 yield 뒤에 쓴 글자를 리턴 가능.
* 중간에 멈출 수 있다!*/

/***/ }),

/***/ "./src/sagas/post.js":
/*!***************************!*\
  !*** ./src/sagas/post.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./src/reducers/post.js");




function* addPost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    /*        const result = yield call(addPostAPI , action.data);*/

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: action.data
      /*엑션에서 리퀘스트 받아와서 석세스를 넘겨줌 , 데이터에는 사용자가 넣은 데이터가 들어있다.*/

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* addComment(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: action.data
    });
  }
}

function* watchAddPost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
  /*요청을 2초에 한번만 받아들임*/
}

function* watchAddComment() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
  /*요청을 2초에 한번만 받아들임*/
}

function* postSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment)]);
}

/***/ }),

/***/ "./src/sagas/user.js":
/*!***************************!*\
  !*** ./src/sagas/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./src/reducers/user.js");




function* SignUp(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      data: action.data
    });
  }
}

function* LogIn(action) {
  /*로그인 리퀘스트할때 매개변수로 전달된다.*/
  try {
    console.log("saga Login");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    /*const result = yield call(logInAPI , action.data) /!*===loginApi(action.data)*!/*/

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      data: err.response.data
    });
  }
}

function* LogOut(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    /*        const result = yield call(logOutAPI)*/

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      /*엑션을 만들어줌. dispatch*/
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_FAILURE"],
      data: err.response.data
    });
  }
}
/*put은 dispatch 역할
* fork 는 비동기 함수호출 ( 결과 안기다리고 바로 다음꺼 실행)
* call 은 동기 함수호출*/

/*이벤트 리스너들*/

/*take은 1회용이기때문에 while로 감싼다 === takeEvery*/


function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_REQUEST"], LogIn);
  /*takeLatest : 실수로 더블클릭하면 마지막꺼만 받음.*/
}

function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_OUT_REQUEST"], LogOut);
}

function* watchSignup() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_REQUEST"], SignUp);
}

function* userSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup)]);
}

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/index */ "./src/reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./src/sagas/index.js");







/*리덕스 기능 enhance*/

const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  /*if( typeof (action) === 'function'){
      return action(dispatch , getState);
  }*/

  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [loggerMiddleware, sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers_index__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "@redux-saga/core/effects":
/*!*******************************************!*\
  !*** external "@redux-saga/core/effects" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsIndpdGhSZWR1eFNhZ2EiLCJpbml0aWFsU3RhdGUiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImluZGV4Iiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwidXNlciIsInBvc3QiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwiZHVtbXlQb3N0QWN0aW9uIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsImVycm9yIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwieSIsInBvc3RJZCIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2luZ091dCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImlzU2lnbmluZ1VwIiwiaXNTaWduZWRJbiIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5BY3Rpb24iLCJkaXNwYXRjaCIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImxvZ2luU3VjY2Vzc0FjdGlvbiIsImVyciIsImxvZ2luRmFpbHVyZUFjdGlvbiIsImxvZ291dEFjdGlvbiIsImxvZ291dFJlcXVlc3RBY3Rpb24iLCJsb2dvdXRTdWNjZXNzQWN0aW9uIiwibG9nb3V0RmFpbHVyZUFjdGlvbiIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsImR1bW15VXNlciIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJhZGRQb3N0IiwiZGVsYXkiLCJwdXQiLCJyZXNwb25zZSIsImFkZENvbW1lbnQiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hBZGRDb21tZW50IiwiU2lnblVwIiwiTG9nSW4iLCJMb2dPdXQiLCJ3YXRjaExvZ2luIiwid2F0Y2hMb2dvdXQiLCJ3YXRjaFNpZ251cCIsImxvZ2dlck1pZGRsZXdhcmUiLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwiY29tcG9zZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJzdG9yZSIsImNyZWF0ZVN0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QUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJzsgLy9hbnTrlJTsnpDsnbhcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJzsgLy9wcm9wdHlwZeyytO2BrFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAvL+yCrOyLpCDsl4bslrTrj4TrjJBcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJzsgLy/tl6Trk5zqsbTrk5zrprTsiJjsnojsnYwuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tIFwibmV4dC1yZWR1eC1zYWdhXCI7XHJcblxyXG5cclxuY29uc3QgQXBwID0gKHtDb21wb25lbnR9KSA9PnsgLy9pbmRleC5qc+ydmCDrpqzthLTqsJLsnYQg7Lu07Y+s64SM7Yq466GcIOuwm+uKlOuLpC5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9e1widXRmLThcIn0vPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5leHRSZWFjdDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShBcHApKTsiLCJpbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCJcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHtIWURSQVRFfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPXtcclxufTtcclxuXHJcbi8v67mE64+Z6riwIOyVoeyFmCDtgazrpqzsl5DsnbTthLAoc2FnYSlcclxuXHJcbi8v7J207KCEIOyDge2DnOyZgCBhY3Rpb27snYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG4vL2NvbWJpbmVyZWR1Y2VyXHJcbi8v66as65OA7ISc6rCAIO2VqOyImOyduOuNsCDsnbTqsbAg64ukIO2VqeyzkOykgOuLpC5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6KHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pPT57IC8v7ISc67KE7IKs7J2065OcIOuenOuNlOungSDsnITtlbRcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlICwgLi4uYWN0aW9uLnBheWxvYWR9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbi8q642U66+4642w7J207YSwIOyDneyEsVxyXG4qIDEuc2hvcnRJZCA6IOqyuey5mOq4sCDtnpjrk6Ag7JWE7J2065SU66W8IOyDneyEse2VtOykgOuLpC5cclxuKiAyLmZha2VyIDog6rCB7KKFIOuNlOuvuOuNsOydtO2EsCDsoJzqs7UqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFt7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgbmlja25hbWU6J+2Zqeqyve2VmCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50Oifssqsg67KI7J6sIOqyjOyLnOq4gCAj7ZW07IucICPrpqzsl5HtirgnLFxyXG4gICAgICAgIEltYWdlczpbeyAvL+yLnO2AhOudvOydtOymiCDsi5wg64yA66y47J6Q66GcIOuwmO2ZmOuQmOq4sOyXkCDrjIDrrLjsnpDroZwgKOyhsOyduOyXsOyCsOyduOuTrz8pXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQXlNVFpmTlRrZyUyRk1EQXhOakV6TkRVek1Ea3pPRFF4LjdlZmhCQU5WOXYxOEkwRFVRaEgtVGMyN3h1STV1WVNjMEU2R1lob0dKTkVnLkZLbGpOX0p0TnRwbnQ2akxGbVhwOXhYQWRhdGVoUmJlTW5RYnhONTRUbzRnLlBORy5rY20yODc0JTJGJTI1QzElMjVBNiUyNUI4JTI1RjElMjVDMCUyNUJCXyUyNUMwJTI1RDQlMjVCNyUyNUMyJTI1QzclMjVEOCUyNUMxJTI1RDYlMjVCQyUyNUJDJTI1QkYlMjVFNC5fMDAxXyUyNTI4MTAwJTI1MjkucG5nJnR5cGU9c2M5NjBfODMyJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHNyYzpcIi4uL2ltYWdlcy/qt7jrprwxLnBuZ1wiLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOidoZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcImFhYWFcIixcclxuICAgICAgICB9XSxcclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczpbXSwvL+ydtOuvuOyngCDsl4XroZzrk5zsi5zsl5Ag7J2066+47KeAIOyggOyepVxyXG4gICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3IgOiBmYWxzZSxcclxuXHJcbiAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmUgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvciA6IGZhbHNlLFxyXG5cclxufTtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdEFjdGlvbiA9IChkYXRhKSA9Pih7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDpkYXRhLFxyXG4gICAgSW1hZ2VzIDogW3tcclxuICAgICAgICBzcmM6XCJodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEF5TVRaZk5Ua2clMkZNREF4TmpFek5EVXpNRGt6T0RReC43ZWZoQkFOVjl2MThJMERVUWhILVRjMjd4dUk1dVlTYzBFNkdZaG9HSk5FZy5GS2xqTl9KdE50cG50NmpMRm1YcDl4WEFkYXRlaFJiZU1uUWJ4TjU0VG80Zy5QTkcua2NtMjg3NCUyRiUyNUMxJTI1QTYlMjVCOCUyNUYxJTI1QzAlMjVCQl8lMjVDMCUyNUQ0JTI1QjclMjVDMiUyNUM3JTI1RDglMjVDMSUyNUQ2JTI1QkMlMjVCQyUyNUJGJTI1RTQuXzAwMV8lMjUyODEwMCUyNTI5LnBuZyZ0eXBlPXNjOTYwXzgzMlwiLFxyXG4gICAgfSxcclxuICAgIF0sXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoyLFxyXG4gICAgICAgIG5pY2tuYW1lOiftmanqsr3tlZgnLFxyXG4gICAgfSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBuaWNrbmFtZTonaGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6IFwiYWFhYVwiLFxyXG4gICAgfV0sXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6ZGF0YSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjIsXHJcbiAgICAgICAgbmlja25hbWU6J+2Zqeqyve2VmCcsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUgLCBhY3Rpb24pID0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0QWN0aW9uKGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIC8qYWN0aW9uLmRhdGEuY29tbWVudCAsIHVzZXJpZCAsIHBvc3RpZCovXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHkpPT5cclxuICAgICAgICAgICAgICAgIHkuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XTtcclxuICAgICAgICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkgLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIGlzTG9nZ2luZ0luOmZhbHNlLFxyXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLyrroZzqt7jslYTsm4Mg7Iuc64+E7KSRKi9cclxuXHJcbiAgICB1c2VyOiBbe1xyXG4gICAgICAgIFBvc3RzOiBbbnVsbCAsIF0sXHJcbiAgICAgICAgRm9sbG93aW5nczowLFxyXG4gICAgICAgIEZvbGxvd2VyczowLFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBpc1NpZ25pbmdVcDpmYWxzZSxcclxuICAgIGlzU2lnbmVkSW46ZmFsc2UsXHJcblxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOmZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6bnVsbCxcclxuXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PntcclxuICAgICAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9nb3V0U3VjY2Vzc0FjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ291dEZhaWx1cmVBY3Rpb24oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uPSAoZGF0YSkgPT57XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbj0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRGYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZTpMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsXHJcbiAgICBuaWNrbmFtZSA6ICftmanqsr3tlZgnLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBQb3N0cyA6IFtdLFxyXG4gICAgRm9sbG93aW5nczogW10sXHJcbiAgICBGb2xsb3dlcnM6W10sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSAsIGFjdGlvbikgPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnaW5nSW46IHRydWUsXHJcbiAgICAgICAgICAgICAgICB1c2VyOmFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZWR1eCBMb2dpblwiKTtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ0luOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzTG9nZ2luZ091dDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6YWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ1VwOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXNTaWduZWRJbjogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGlzU2lnbmluZ1VwOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzU2lnbmVkSW46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRGF0YSA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25pbmdVcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc1NpZ25lZEluOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTp7XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGZhbHNlLFxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOntcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQge2FsbCAsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt0YWtlRXZlcnl9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpey8hKmFjdGlvbi5kYXRh6rCAIOuTpOyWtOyYqOuLpC4qIS9cclxuICAgIHJldHVybiBheGlvcy5wb3J0KCcvYXBpL2xvZ2luJyAsZGF0YSlcclxufVxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3J0KCcvYXBpL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JyAsIGRhdGEpXHJcbn0qL1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgIF0pO1xyXG59XHJcblxyXG4vKmdlbmVyYXRvciDsnYAgeWllbGTri6jsnITroZwg66mI7LaU6rOgICwgdmFsdWXroZwgeWllbGQg65Kk7JeQIOyTtCDquIDsnpDrpbwg66as7YS0IOqwgOuKpS5cclxuKiDspJHqsITsl5Ag66mI7LacIOyImCDsnojri6QhKi8iLCJpbXBvcnQge2RlbGF5LCBwdXR9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHthbGwsIGZvcmssIHRha2VMYXRlc3R9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtBRERfQ09NTUVOVF9TVUNDRVNTICxBRERfQ09NTUVOVF9SRVFVRVNUICxBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5BRERfUE9TVF9GQUlMVVJFICxBRERfUE9TVF9TVUNDRVNTICxBRERfUE9TVF9SRVFVRVNUfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcclxuICAgICAgICAvKiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJICwgYWN0aW9uLmRhdGEpOyovXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhLCAvKuyXkeyFmOyXkOyEnCDrpqztgJjsiqTtirgg67Cb7JWE7JmA7IScIOyEneyEuOyKpOulvCDrhJjqsqjspIwgLCDrjbDsnbTthLDsl5DripQg7IKs7Jqp7J6Q6rCAIOuEo+ydgCDrjbDsnbTthLDqsIAg65Ok7Ja07J6I64ukLiovXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2ggKGVycil7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QgLCBhZGRQb3N0KTsgLyrsmpTssq3snYQgMuy0iOyXkCDtlZzrsojrp4wg67Cb7JWE65Ok7J6EKi9cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNUICwgYWRkQ29tbWVudCk7IC8q7JqU7LKt7J2EIDLstIjsl5Ag7ZWc67KI66eMIOuwm+yVhOuTpOyehCovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgXSlcclxufSIsImltcG9ydCB7YWxsLCBmb3JrfSBmcm9tIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7ZGVsYXksIHB1dCwgdGFrZUxhdGVzdH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge0xPR19JTl9TVUNDRVNTICwgTE9HX0lOX0ZBSUxVUkUgLCBMT0dfSU5fUkVRVUVTVFxyXG4sIExPR19PVVRfRkFJTFVSRSAsIExPR19PVVRfUkVRVUVTVCAsTE9HX09VVF9TVUNDRVNTICxcclxuU0lHTl9VUF9GQUlMVVJFICwgU0lHTl9VUF9SRVFVRVNUICwgU0lHTl9VUF9TVUNDRVNTfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24qIFNpZ25VcChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6U0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoIChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6U0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBMb2dJbihhY3Rpb24pey8q66Gc6re47J24IOumrO2AmOyKpO2KuO2VoOuVjCDrp6TqsJzrs4DsiJjroZwg7KCE64us65Cc64ukLiovXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYWdhIExvZ2luXCIpXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcclxuICAgICAgICAvKmNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEkgLCBhY3Rpb24uZGF0YSkgLyEqPT09bG9naW5BcGkoYWN0aW9uLmRhdGEpKiEvKi9cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogTG9nT3V0KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcclxuICAgICAgICAvKiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpKi9cclxuICAgICAgICB5aWVsZCBwdXQoey8q7JeR7IWY7J2EIOunjOuTpOyWtOykjC4gZGlzcGF0Y2gqL1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuLypwdXTsnYAgZGlzcGF0Y2gg7Jet7ZWgXHJcbiogZm9yayDripQg67mE64+Z6riwIO2VqOyImO2YuOy2nCAoIOqysOqzvCDslYjquLDri6Trpqzqs6Ag67CU66GcIOuLpOydjOq6vCDsi6TtlokpXHJcbiogY2FsbCDsnYAg64+Z6riwIO2VqOyImO2YuOy2nCovXHJcblxyXG4vKuydtOuypO2KuCDrpqzsiqTrhIjrk6QqL1xyXG4vKnRha2XsnYAgMe2ajOyaqeydtOq4sOuVjOusuOyXkCB3aGlsZeuhnCDqsJDsi7zri6QgPT09IHRha2VFdmVyeSovXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBMb2dJbik7IC8qdGFrZUxhdGVzdCA6IOyLpOyImOuhnCDrjZTruJTtgbTrpq3tlZjrqbQg66eI7KeA66eJ6rq866eMIOuwm+ydjC4qL1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QgLCBMb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIFNpZ25VcClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ291dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ251cCksXHJcbiAgICBdKTtcclxufSIsImltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHthcHBseU1pZGRsZXdhcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnXHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzL2luZGV4J1xyXG5pbXBvcnQge2NvbXBvc2VXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJ1xyXG4vKuumrOuNleyKpCDquLDriqUgZW5oYW5jZSovXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoe2Rpc3BhdGNoICwgZ2V0U3RhdGV9KSA9PihuZXh0KSA9PihhY3Rpb24pPT57XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgLyppZiggdHlwZW9mIChhY3Rpb24pID09PSAnZnVuY3Rpb24nKXtcclxuICAgICAgICByZXR1cm4gYWN0aW9uKGRpc3BhdGNoICwgZ2V0U3RhdGUpO1xyXG4gICAgfSovXHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlPSgpPT57XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9W2xvZ2dlck1pZGRsZXdhcmUgLCBzYWdhTWlkZGxld2FyZV07XHJcbiAgICBjb25zdCBlbmhhbmNlciA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID9jb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgICAgOmNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyICwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG4gICAgcmV0dXJuIHN0b3JlXHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSxcclxuICAgIHtkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXHJcbiAgICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=