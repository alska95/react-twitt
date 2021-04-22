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
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, addPostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);


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
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: "../images/그림1.png"
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
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
  removePostLoading: false,
  removePostDone: false,
  removePostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false
};
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const addPostRequestAction = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addCommentRequestAction = data => ({
  type: ADD_POST_REQUEST,
  data
});

const dummyPostAction = data => ({
  id: data.id,
  content: data.content,
  Images: [{
    src: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832"
  }],
  User: {
    id: 1,
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
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: '황경하'
  }
}); //이전 상태를 액션을 통해 다음상태를 만들어내는 함수가 리듀서다. 불변성을 지키면서.
//-->produce를 사용하면 불변성이 보장된다.


const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.mainPosts.unshift([dummyPostAction(action.data), ...state.mainPosts]);
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostDone = action.error;
        draft.addPostError = false;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = false;
        draft.removePostDone = false;
        draft.removePostError = true;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = draft.mainPosts.filter(v => v.id !== action.data);
        draft.removePostDone = false;
        draft.removePostError = false;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostDone = action.error;
        draft.removePostError = true;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentDone = false;
        draft.addCommentLoading = true;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          /*action.data.comment , userid , postid*/

          /*immer 사용하면 훨씬 쉽게 할 수 있다. */

          /*                const postIndex = state.mainPosts.findIndex((y)=>
                              y.id === action.data.postId);
                          const post = state.mainPosts[postIndex];
                          post.Comments = [dummyComment(action.data.content) , ...post.Comments]; /!*배열의 앞으로 새로운 댓글을 집어넣는다.*!/
                          const mainPosts = [...state.mainPosts];
                          mainPosts[postIndex] = post;
                            return{
                              ...state,
                              addCommentDone: true,
                              addCommentLoading: false,
                          };*/
          const post = draft.mainPosts.findIndex(v => v.id === action.data.postId);
          post.Comment.unshift(dummyComment(action.data.content));
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentDone = false;
        draft.addCommentError = action.error;
        draft.addCommentLoading = false;
        break;

      default:
        break;
    }
  });
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
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post */ "./src/reducers/post.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,

  /*로그아웃 시도중*/
  user: {
    Posts: [{
      id: 1
    }]
  },
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
  Posts: [{
    id: 1
  }],
  Followings: [{
    nickname: '가나다'
  }, {
    nickname: '가ㄴ나다'
  }, {
    nickname: '나다'
  }],
  Followers: [{
    nickname: '가나다'
  }, {
    nickname: '가ㄴ나다'
  }, {
    nickname: '나다'
  }]
});

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        {
          draft.isLoggedIn = true;
          break;
        }

      case LOG_IN_SUCCESS:
        {
          draft.isLoggedIn = true;
          draft.isLoggingIn = false;
          draft.user = dummyUser(action.data);
          break;
        }

      case LOG_IN_FAILURE:
        {
          draft.isLoggedIn = false;
          draft.isLoggingIn = false;
          break;
        }

      case LOG_OUT_SUCCESS:
        {
          draft.isLoggedIn = false;
          draft.isLoggingOut = false;
          break;
        }

      case LOG_OUT_FAILURE:
        {
          draft.isLoggedIn = false;
          draft.isLoggingOut = false;
          break;
        }

      case LOG_OUT_REQUEST:
        {
          draft.isLoggingOut = true;
          draft.user = action.data;
          break;
        }

      case SIGN_UP_REQUEST:
        draft.isSignedIn = false;
        draft.isSigningUp = true;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case _post__WEBPACK_IMPORTED_MODULE_0__["ADD_POST_TO_ME"]:
        draft.user.Posts.unshift({
          id: action.data
        });
        break;

      /*                return{
                          ...state,
                          user: {
                              ...state.user,
                              Posts: [{id:action.data}, ...state.user.Posts],
                          }
                      }*/

      case _post__WEBPACK_IMPORTED_MODULE_0__["REMOVE_POST_OF_ME"]:
        draft.user.Posts = draft.user.Posts.filter(v => v.id !== action.data);
        break;

      /*                return{
                          ...state,
                          user: {
                              ...state.user,
                              Posts: state.user.Posts.filter((v)=>v.id === action.data),
                          }
                      }*/

      default:
        break;
    }
  });
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
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_3__);





function* addPost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    /*        const result = yield call(addPostAPI , action.data);*/

    const id = shortid__WEBPACK_IMPORTED_MODULE_3___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id: id,
        content: action.data
      }
      /*엑션에서 리퀘스트 받아와서 석세스를 넘겨줌 , 데이터에는 사용자가 넣은 데이터가 들어있다.*/

    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* removePost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    /*        const result = yield call(addPostAPI , action.data);*/

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data
      /*엑션에서 리퀘스트 받아와서 석세스를 넘겨줌 , 데이터에는 사용자가 넣은 데이터가 들어있다.*/

    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function* addComment(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: {
        content: action.data
      }
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

function* watchRemovePost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
  /*요청을 2초에 한번만 받아들임*/
}

function* watchAddComment() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
  /*요청을 2초에 한번만 받아들임*/
}

function* postSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost)]);
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

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNob3J0aWRcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwid2l0aFJlZHV4U2FnYSIsImluaXRpYWxTdGF0ZSIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNob3J0SWQiLCJnZW5lcmF0ZSIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImR1bW15UG9zdEFjdGlvbiIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJwcm9kdWNlIiwiZHJhZnQiLCJ1bnNoaWZ0IiwiZXJyb3IiLCJmaWx0ZXIiLCJ2IiwiZmluZEluZGV4IiwicG9zdElkIiwiQ29tbWVudCIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2luZ091dCIsIlBvc3RzIiwiaXNTaWduaW5nVXAiLCJpc1NpZ25lZEluIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJsb2dpbkFjdGlvbiIsImRpc3BhdGNoIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9naW5TdWNjZXNzQWN0aW9uIiwiZXJyIiwibG9naW5GYWlsdXJlQWN0aW9uIiwibG9nb3V0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRGYWlsdXJlQWN0aW9uIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiZHVtbXlVc2VyIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdCIsImRlbGF5IiwicHV0IiwicmVzcG9uc2UiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJTaWduVXAiLCJMb2dJbiIsIkxvZ091dCIsIndhdGNoTG9naW4iLCJ3YXRjaExvZ291dCIsIndhdGNoU2lnbnVwIiwibG9nZ2VyTWlkZGxld2FyZSIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJzsgLy9hbnTrlJTsnpDsnbhcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJzsgLy9wcm9wdHlwZeyytO2BrFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAvL+yCrOyLpCDsl4bslrTrj4TrjJBcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJzsgLy/tl6Trk5zqsbTrk5zrprTsiJjsnojsnYwuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tIFwibmV4dC1yZWR1eC1zYWdhXCI7XHJcblxyXG5cclxuY29uc3QgQXBwID0gKHtDb21wb25lbnR9KSA9PnsgLy9pbmRleC5qc+ydmCDrpqzthLTqsJLsnYQg7Lu07Y+s64SM7Yq466GcIOuwm+uKlOuLpC5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9e1widXRmLThcIn0vPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5leHRSZWFjdDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShBcHApKTsiLCJpbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCJcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHtIWURSQVRFfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPXtcclxufTtcclxuXHJcbi8v67mE64+Z6riwIOyVoeyFmCDtgazrpqzsl5DsnbTthLAoc2FnYSlcclxuXHJcbi8v7J207KCEIOyDge2DnOyZgCBhY3Rpb27snYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG4vL2NvbWJpbmVyZWR1Y2VyXHJcbi8v66as65OA7ISc6rCAIO2VqOyImOyduOuNsCDsnbTqsbAg64ukIO2VqeyzkOykgOuLpC5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6KHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pPT57IC8v7ISc67KE7IKs7J2065OcIOuenOuNlOungSDsnITtlbRcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlICwgLi4uYWN0aW9uLnBheWxvYWR9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG4vKuuNlOuvuOuNsOydtO2EsCDsg53shLFcclxuKiAxLnNob3J0SWQgOiDqsrnsuZjquLAg7Z6Y65OgIOyVhOydtOuUlOulvCDsg53shLHtlbTspIDri6QuXHJcbiogMi5mYWtlciA6IOqwgeyihSDrjZTrr7jrjbDsnbTthLAg7KCc6rO1Ki9cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHMgOiBbe1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIGlkOjEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiftmanqsr3tlZgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDon7LKrIOuyiOyerCDqsozsi5zquIAgI+2VtOyLnCAj66as7JeR7Yq4JyxcclxuICAgICAgICBJbWFnZXM6W3sgLy/si5ztgITrnbzsnbTspogg7IucIOuMgOusuOyekOuhnCDrsJjtmZjrkJjquLDsl5Ag64yA66y47J6Q66GcICjsobDsnbjsl7DsgrDsnbjrk68/KVxyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEF5TVRaZk5Ua2clMkZNREF4TmpFek5EVXpNRGt6T0RReC43ZWZoQkFOVjl2MThJMERVUWhILVRjMjd4dUk1dVlTYzBFNkdZaG9HSk5FZy5GS2xqTl9KdE50cG50NmpMRm1YcDl4WEFkYXRlaFJiZU1uUWJ4TjU0VG80Zy5QTkcua2NtMjg3NCUyRiUyNUMxJTI1QTYlMjVCOCUyNUYxJTI1QzAlMjVCQl8lMjVDMCUyNUQ0JTI1QjclMjVDMiUyNUM3JTI1RDglMjVDMSUyNUQ2JTI1QkMlMjVCQyUyNUJGJTI1RTQuXzAwMV8lMjUyODEwMCUyNTI5LnBuZyZ0eXBlPXNjOTYwXzgzMicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBzcmM6XCIuLi9pbWFnZXMv6re466a8MS5wbmdcIixcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czogW3tcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6J2hlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwiYWFhYVwiLFxyXG5cclxuICAgICAgICB9XSxcclxuICAgIH1dLFxyXG4gICAgaW1hZ2VQYXRoczpbXSwvL+ydtOuvuOyngCDsl4XroZzrk5zsi5zsl5Ag7J2066+47KeAIOyggOyepVxyXG4gICAgYWRkUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3IgOiBmYWxzZSxcclxuXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvciA6IGZhbHNlLFxyXG5cclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yIDogZmFsc2UsXHJcblxyXG59O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+KHtcclxuICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teVBvc3RBY3Rpb24gPSAoZGF0YSkgPT4oe1xyXG4gICAgaWQ6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50OmRhdGEuY29udGVudCxcclxuICAgIEltYWdlcyA6IFt7XHJcbiAgICAgICAgc3JjOlwiaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkZNakF5TVRBeU1UWmZOVGtnJTJGTURBeE5qRXpORFV6TURrek9EUXguN2VmaEJBTlY5djE4STBEVVFoSC1UYzI3eHVJNXVZU2MwRTZHWWhvR0pORWcuRktsak5fSnROdHBudDZqTEZtWHA5eFhBZGF0ZWhSYmVNblFieE41NFRvNGcuUE5HLmtjbTI4NzQlMkYlMjVDMSUyNUE2JTI1QjglMjVGMSUyNUMwJTI1QkJfJTI1QzAlMjVENCUyNUI3JTI1QzIlMjVDNyUyNUQ4JTI1QzElMjVENiUyNUJDJTI1QkMlMjVCRiUyNUU0Ll8wMDFfJTI1MjgxMDAlMjUyOS5wbmcmdHlwZT1zYzk2MF84MzJcIixcclxuICAgIH0sXHJcbiAgICBdLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBuaWNrbmFtZTon7Zmp6rK97ZWYJyxcclxuICAgIH0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgbmlja25hbWU6J2hlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQgOiBcImFhYWFcIixcclxuICAgIH1dLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+KHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OmRhdGEsXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiftmanqsr3tlZgnLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG4vL+ydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYzsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImOqwgCDrpqzrk4DshJzri6QuIOu2iOuzgOyEseydhCDsp4DtgqTrqbTshJwuXHJcbi8vLS0+cHJvZHVjZeulvCDsgqzsmqntlZjrqbQg67aI67OA7ISx7J20IOuztOyepeuQnOuLpC5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSAsIGFjdGlvbikgPT57XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoW2R1bW15UG9zdEFjdGlvbihhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgLyphY3Rpb24uZGF0YS5jb21tZW50ICwgdXNlcmlkICwgcG9zdGlkKi9cclxuICAgICAgICAgICAgICAgIC8qaW1tZXIg7IKs7Jqp7ZWY66m0IO2bqOyUrCDsib3qsowg7ZWgIOyImCDsnojri6QuICovXHJcbiAgICAgICAgICAgICAgICAvKiAgICAgICAgICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCh5KT0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHkuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpICwgLi4ucG9zdC5Db21tZW50c107IC8hKuuwsOyXtOydmCDslZ7snLzroZwg7IOI66Gc7Jq0IOuMk+q4gOydhCDsp5HslrTrhKPripTri6QuKiEvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07Ki9cclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5Db21tZW50LnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciIsImltcG9ydCB7QUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FfSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgaXNMb2dnaW5nSW46ZmFsc2UsXHJcbiAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvKuuhnOq3uOyVhOybgyDsi5zrj4TspJEqL1xyXG5cclxuICAgIHVzZXI6IHtcclxuICAgICAgICBQb3N0cyA6IFt7aWQ6MX1dLFxyXG4gICAgfSxcclxuICAgIGlzU2lnbmluZ1VwOmZhbHNlLFxyXG4gICAgaXNTaWduZWRJbjpmYWxzZSxcclxuXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6ZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjpudWxsLFxyXG5cclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKGRhdGEpKTtcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dvdXRTdWNjZXNzQWN0aW9uKGRhdGEpKTtcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9nb3V0RmFpbHVyZUFjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb249IChkYXRhKSA9PntcclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb249IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlOkxPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIG5pY2tuYW1lIDogJ+2Zqeqyve2VmCcsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzIDogW3tpZCA6IDF9XSxcclxuICAgIEZvbGxvd2luZ3M6IFt7bmlja25hbWUgOiAn6rCA64KY64ukJ30se25pY2tuYW1lIDogJ+qwgOOEtOuCmOuLpCd9LHtuaWNrbmFtZSA6ICfrgpjri6QnfV0sXHJcbiAgICBGb2xsb3dlcnM6W3tuaWNrbmFtZSA6ICfqsIDrgpjri6QnfSx7bmlja25hbWUgOiAn6rCA44S064KY64ukJ30se25pY2tuYW1lIDogJ+uCmOuLpCd9XSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlICwgYWN0aW9uKSA9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlICwgKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6e1xyXG5cclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXNlciA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNTaWduZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51c2VyLlBvc3RzLnVuc2hpZnQoe2lkIDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vKiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0czogW3tpZDphY3Rpb24uZGF0YX0sIC4uLnN0YXRlLnVzZXIuUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXNlci5Qb3N0cyA9IGRyYWZ0LnVzZXIuUG9zdHMuZmlsdGVyKCh2KT0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vKiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0czogc3RhdGUudXNlci5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkID09PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7YWxsICwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cydcclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCdcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQge3Rha2VFdmVyeX0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5cclxuLypcclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSl7LyEqYWN0aW9uLmRhdGHqsIAg65Ok7Ja07Jio64ukLiohL1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvcnQoJy9hcGkvbG9naW4nICxkYXRhKVxyXG59XHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvcnQoJy9hcGkvbG9nb3V0JylcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3QnICwgZGF0YSlcclxufSovXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCl7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcbi8qZ2VuZXJhdG9yIOydgCB5aWVsZOuLqOychOuhnCDrqYjstpTqs6AgLCB2YWx1ZeuhnCB5aWVsZCDrkqTsl5Ag7JO0IOq4gOyekOulvCDrpqzthLQg6rCA64qlLlxyXG4qIOykkeqwhOyXkCDrqYjstpwg7IiYIOyeiOuLpCEqLyIsImltcG9ydCB7ZGVsYXksIHB1dH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQge2FsbCwgZm9yaywgdGFrZUxhdGVzdH0gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1RPX01FLFxyXG4gICAgUkVNT1ZFX1BPU1RfT0ZfTUUsUkVNT1ZFX1BPU1RfRkFJTFVSRSxSRU1PVkVfUE9TVF9SRVFVRVNULFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCdcclxuXHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxyXG4gICAgICAgIC8qICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEkgLCBhY3Rpb24uZGF0YSk7Ki9cclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0SWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfSwgLyrsl5HshZjsl5DshJwg66as7YCY7Iqk7Yq4IOuwm+yVhOyZgOyEnCDshJ3shLjsiqTrpbwg64SY6rKo7KSMICwg642w7J207YSw7JeQ64qUIOyCrOyaqeyekOqwgCDrhKPsnYAg642w7J207YSw6rCAIOuTpOyWtOyeiOuLpC4qL1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfUE9TVF9UT19NRSxcclxuICAgICAgICAgICAgZGF0YTppZCxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG5cclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxyXG4gICAgICAgIC8qICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEkgLCBhY3Rpb24uZGF0YSk7Ki9cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSwgLyrsl5HshZjsl5DshJwg66as7YCY7Iqk7Yq4IOuwm+yVhOyZgOyEnCDshJ3shLjsiqTrpbwg64SY6rKo7KSMICwg642w7J207YSw7JeQ64qUIOyCrOyaqeyekOqwgCDrhKPsnYAg642w7J207YSw6rCAIOuTpOyWtOyeiOuLpC4qL1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgZGF0YTphY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9Y2F0Y2ggKGVycil7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QgLCBhZGRQb3N0KTsgLyrsmpTssq3snYQgMuy0iOyXkCDtlZzrsojrp4wg67Cb7JWE65Ok7J6EKi9cclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QgLCByZW1vdmVQb3N0KTsgLyrsmpTssq3snYQgMuy0iOyXkCDtlZzrsojrp4wg67Cb7JWE65Ok7J6EKi9cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNUICwgYWRkQ29tbWVudCk7IC8q7JqU7LKt7J2EIDLstIjsl5Ag7ZWc67KI66eMIOuwm+yVhOuTpOyehCovXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBwb3N0U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQge2FsbCwgZm9ya30gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5pbXBvcnQge2RlbGF5LCBwdXQsIHRha2VMYXRlc3R9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtMT0dfSU5fU1VDQ0VTUyAsIExPR19JTl9GQUlMVVJFICwgTE9HX0lOX1JFUVVFU1RcclxuLCBMT0dfT1VUX0ZBSUxVUkUgLCBMT0dfT1VUX1JFUVVFU1QgLExPR19PVVRfU1VDQ0VTUyAsXHJcblNJR05fVVBfRkFJTFVSRSAsIFNJR05fVVBfUkVRVUVTVCAsIFNJR05fVVBfU1VDQ0VTU30gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuXHJcbmZ1bmN0aW9uKiBTaWduVXAoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlNJR05fVVBfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaCAoZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTphY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogTG9nSW4oYWN0aW9uKXsvKuuhnOq3uOyduCDrpqztgJjsiqTtirjtlaDrlYwg66ek6rCc67OA7IiY66GcIOyghOuLrOuQnOuLpC4qL1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2FnYSBMb2dpblwiKVxyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXHJcbiAgICAgICAgLypjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJICwgYWN0aW9uLmRhdGEpIC8hKj09PWxvZ2luQXBpKGFjdGlvbi5kYXRhKSohLyovXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBMb2dPdXQoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxyXG4gICAgICAgIC8qICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSkqL1xyXG4gICAgICAgIHlpZWxkIHB1dCh7Lyrsl5HshZjsnYQg66eM65Ok7Ja07KSMLiBkaXNwYXRjaCovXHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4vKnB1dOydgCBkaXNwYXRjaCDsl63tlaBcclxuKiBmb3JrIOuKlCDruYTrj5nquLAg7ZWo7IiY7Zi47LacICgg6rKw6rO8IOyViOq4sOuLpOumrOqzoCDrsJTroZwg64uk7J2M6rq8IOyLpO2WiSlcclxuKiBjYWxsIOydgCDrj5nquLAg7ZWo7IiY7Zi47LacKi9cclxuXHJcbi8q7J2067Kk7Yq4IOumrOyKpOuEiOuTpCovXHJcbi8qdGFrZeydgCAx7ZqM7Jqp7J206riw65WM66y47JeQIHdoaWxl66GcIOqwkOyLvOuLpCA9PT0gdGFrZUV2ZXJ5Ki9cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIExvZ0luKTsgLyp0YWtlTGF0ZXN0IDog7Iuk7IiY66GcIOuNlOu4lO2BtOumre2VmOuptCDrp4jsp4Drp4nqurzrp4wg67Cb7J2MLiovXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCAsIExvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnbnVwKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgU2lnblVwKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nb3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnbnVwKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY29tcG9zZX0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCdcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMvaW5kZXgnXHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnXHJcbi8q66as642V7IqkIOq4sOuKpSBlbmhhbmNlKi9cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7ZGlzcGF0Y2ggLCBnZXRTdGF0ZX0pID0+KG5leHQpID0+KGFjdGlvbik9PntcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICAvKmlmKCB0eXBlb2YgKGFjdGlvbikgPT09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgIHJldHVybiBhY3Rpb24oZGlzcGF0Y2ggLCBnZXRTdGF0ZSk7XHJcbiAgICB9Ki9cclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn1cclxuY29uc3QgY29uZmlndXJlU3RvcmU9KCk9PntcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID1bbG9nZ2VyTWlkZGxld2FyZSAsIHNhZ2FNaWRkbGV3YXJlXTtcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09J3Byb2R1Y3Rpb24nXHJcbiAgICAgICAgP2NvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgICA6Y29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIgLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmVcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLFxyXG4gICAge2RlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxuICAgIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==