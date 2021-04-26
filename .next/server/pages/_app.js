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
/*! exports provided: initialState, generateDummyPost, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, addPostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
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
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);



/*더미데이터 생성
* 1.shortId : 겹치기 힘든 아이디를 생성해준다.
* 2.faker : 각종 더미데이터 제공*/

const initialState = {
  mainPosts: [//     {
    //     id:1,
    //     User:{
    //         id:1,
    //         nickname:'황경하',
    //     },
    //     content:'첫 번재 게시글 #해시 #리엑트',
    //     Images:[{ //시퀄라이즈 시 대문자로 반환되기에 대문자로 (조인연산인듯?)
    //         id: shortId.generate(),
    //         src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832',
    //     }, {
    //         id: shortId.generate(),
    //         src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    //     }, {
    //         id: shortId.generate(),
    //         src:"../images/그림1.png",
    //     }],
    //     Comments: [{
    //         id: shortId.generate(),
    //         User:{
    //             id: shortId.generate(),
    //             nickname:'he',
    //         },
    //         content : "aaaa",
    //
    //     }],
    // }
  ],
  imagePaths: [],
  //이미지 업로드시에 이미지 저장
  hasMorePost: true,
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: false,
  removePostLoading: false,
  removePostDone: false,
  removePostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false
};
const generateDummyPost = number => Array(number).fill().map(() => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
  },
  Images: [{
    src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.imageUrl()
  }],
  Comments: [{
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
  }],
  content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
}));
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
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
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = false;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hasMorePost = draft.mainPosts.length < 30; //게시물 50개만 보겠다

        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostDone = action.error;
        draft.loadPostError = false;
        break;

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
/*! exports provided: initialState, loginAction, logoutAction, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginSuccessAction, loginFailureAction, logoutSuccessAction, logoutFailureAction, logoutRequestAction, loginRequestAction, signupRequestAction, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupRequestAction", function() { return signupRequestAction; });
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
const signupRequestAction = data => ({
  type: SIGN_UP_REQUEST,
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
      case UNFOLLOW_REQUEST:
        {
          draft.unfollowLoading = true;
          draft.unfollowDone = false;
          break;
        }

      case UNFOLLOW_SUCCESS:
        {
          draft.unfollowDone = true;
          draft.unfollowLoading = false;
          draft.user.Followings = draft.user.Followings.filter(v => v.id !== action.data); //해당 사람빼고 나머지 팔로우 해준다.

          break;
        }

      case UNFOLLOW_FAILURE:
        {
          draft.unfollowDone = false;
          draft.unfollowLoading = false;
          break;
        }

      case FOLLOW_REQUEST:
        {
          draft.followLoading = true;
          draft.followDone = false;
          break;
        }

      case FOLLOW_SUCCESS:
        {
          draft.followDone = true;
          draft.followLoading = false;
          draft.user.Followings.push({
            id: action.data
          });
          break;
        }

      case FOLLOW_FAILURE:
        {
          draft.followDone = false;
          draft.followLoading = false;
          break;
        }

      case LOG_IN_REQUEST:
        {
          draft.isLoggingIn = true;
          draft.isLoggedIn = false;
          draft.user = dummyUser(action.data);
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
          draft.isLoggedIn = false;
          draft.isLoggingOut = true;
          draft.user = action.data;
          break;
        }

      case SIGN_UP_REQUEST:
        draft.isSignedIn = false;
        draft.isSigningUp = true;
        break;

      case SIGN_UP_SUCCESS:
        draft.isSigningUp = false;
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.isSigningUp = false;
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





function* loadPost(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    /*        const result = yield call(addPostAPI , action.data);*/

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10)
      /*엑션에서 리퀘스트 받아와서 석세스를 넘겨줌 , 데이터에는 사용자가 넣은 데이터가 들어있다.*/

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

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

function* watchLoadPost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POST_REQUEST"], loadPost);
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
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost)]);
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

function* Follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_FAILURE"],
      data: action.data
    });
  }
}

function* UnFollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_FAILURE"],
      data: action.data
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

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["FOLLOW_REQUEST"], Follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["UNFOLLOW_REQUEST"], UnFollow);
}

function* userSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup)]);
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

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zYWdhcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiLCJ3aXRoUmVkdXhTYWdhIiwiaW5pdGlhbFN0YXRlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0IiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiaWQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsIkltYWdlcyIsInNyYyIsImltYWdlIiwiaW1hZ2VVcmwiLCJDb21tZW50cyIsImNvbnRlbnQiLCJsb3JlbSIsInNlbnRlbmNlIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsImFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uIiwiZHVtbXlQb3N0QWN0aW9uIiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInByb2R1Y2UiLCJkcmFmdCIsImNvbmNhdCIsImxlbmd0aCIsImVycm9yIiwidW5zaGlmdCIsImZpbHRlciIsInYiLCJmaW5kSW5kZXgiLCJwb3N0SWQiLCJDb21tZW50IiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ0luIiwiaXNMb2dnaW5nT3V0IiwiUG9zdHMiLCJpc1NpZ25pbmdVcCIsImlzU2lnbmVkSW4iLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGlzcGF0Y2giLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJlcnIiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJsb2dvdXRBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibG9nb3V0U3VjY2Vzc0FjdGlvbiIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJzaWdudXBSZXF1ZXN0QWN0aW9uIiwiZHVtbXlVc2VyIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwicHVzaCIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwibG9hZFBvc3QiLCJkZWxheSIsInB1dCIsInJlc3BvbnNlIiwiYWRkUG9zdCIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50Iiwid2F0Y2hBZGRQb3N0IiwidGFrZUxhdGVzdCIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJTaWduVXAiLCJMb2dJbiIsIkxvZ091dCIsIkZvbGxvdyIsIlVuRm9sbG93Iiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nb3V0Iiwid2F0Y2hTaWdudXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5Gb2xsb3ciLCJsb2dnZXJNaWRkbGV3YXJlIiwiZ2V0U3RhdGUiLCJuZXh0IiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FB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T3NDLEtBQVA7QUFDSCxDQVZEOztBQVlBLE1BQU01SyxPQUFPLEdBQUdnTCx3RUFBYSxDQUFDWixjQUFELEVBQ3pCO0FBQUNhLE9BQUs7QUFBTixDQUR5QixDQUE3QjtBQUllakwsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEscUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJzsgLy9hbnTrlJTsnpDsnbhcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJzsgLy9wcm9wdHlwZeyytO2BrFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAvL+yCrOyLpCDsl4bslrTrj4TrjJBcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJzsgLy/tl6Trk5zqsbTrk5zrprTsiJjsnojsnYwuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tIFwibmV4dC1yZWR1eC1zYWdhXCI7XHJcblxyXG5cclxuY29uc3QgQXBwID0gKHtDb21wb25lbnR9KSA9PnsgLy9pbmRleC5qc+ydmCDrpqzthLTqsJLsnYQg7Lu07Y+s64SM7Yq466GcIOuwm+uKlOuLpC5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9e1widXRmLThcIn0vPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5leHRSZWFjdDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShBcHApKTsiLCJpbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCJcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiXHJcbmltcG9ydCB7Y29tYmluZVJlZHVjZXJzfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHtIWURSQVRFfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPXtcclxufTtcclxuXHJcbi8v67mE64+Z6riwIOyVoeyFmCDtgazrpqzsl5DsnbTthLAoc2FnYSlcclxuXHJcbi8v7J207KCEIOyDge2DnOyZgCBhY3Rpb27snYQg7Ya17ZW0IOuLpOydjCDsg4Htg5zrpbwg66eM65Ok7Ja064K064qUIO2VqOyImFxyXG4vL2NvbWJpbmVyZWR1Y2VyXHJcbi8v66as65OA7ISc6rCAIO2VqOyImOyduOuNsCDsnbTqsbAg64ukIO2VqeyzkOykgOuLpC5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgaW5kZXg6KHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pPT57IC8v7ISc67KE7IKs7J2065OcIOuenOuNlOungSDsnITtlbRcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLGFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlICwgLi4uYWN0aW9uLnBheWxvYWR9O1xyXG4gICAgICAgICAgICBkZWZhdWx0OntcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1c2VyLFxyXG4gICAgcG9zdCxcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcbmltcG9ydCBmYWtlciBmcm9tIFwiZmFrZXJcIlxyXG5cclxuLyrrjZTrr7jrjbDsnbTthLAg7IOd7ISxXHJcbiogMS5zaG9ydElkIDog6rK57LmY6riwIO2emOuToCDslYTsnbTrlJTrpbwg7IOd7ISx7ZW07KSA64ukLlxyXG4qIDIuZmFrZXIgOiDqsIHsooUg642U66+4642w7J207YSwIOygnOqztSovXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICBpZDoxLFxyXG4gICAgLy8gICAgIFVzZXI6e1xyXG4gICAgLy8gICAgICAgICBpZDoxLFxyXG4gICAgLy8gICAgICAgICBuaWNrbmFtZTon7Zmp6rK97ZWYJyxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGNvbnRlbnQ6J+yyqyDrsojsnqwg6rKM7Iuc6riAICPtlbTsi5wgI+umrOyXke2KuCcsXHJcbiAgICAvLyAgICAgSW1hZ2VzOlt7IC8v7Iuc7YCE65287J207KaIIOyLnCDrjIDrrLjsnpDroZwg67CY7ZmY65CY6riw7JeQIOuMgOusuOyekOuhnCAo7KGw7J247Jew7IKw7J2465OvPylcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkZNakF5TVRBeU1UWmZOVGtnJTJGTURBeE5qRXpORFV6TURrek9EUXguN2VmaEJBTlY5djE4STBEVVFoSC1UYzI3eHVJNXVZU2MwRTZHWWhvR0pORWcuRktsak5fSnROdHBudDZqTEZtWHA5eFhBZGF0ZWhSYmVNblFieE41NFRvNGcuUE5HLmtjbTI4NzQlMkYlMjVDMSUyNUE2JTI1QjglMjVGMSUyNUMwJTI1QkJfJTI1QzAlMjVENCUyNUI3JTI1QzIlMjVDNyUyNUQ4JTI1QzElMjVENiUyNUJDJTI1QkMlMjVCRiUyNUU0Ll8wMDFfJTI1MjgxMDAlMjUyOS5wbmcmdHlwZT1zYzk2MF84MzInLFxyXG4gICAgLy8gICAgIH0sIHtcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgLy8gICAgIH0sIHtcclxuICAgIC8vICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgc3JjOlwiLi4vaW1hZ2VzL+q3uOumvDEucG5nXCIsXHJcbiAgICAvLyAgICAgfV0sXHJcbiAgICAvLyAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAvLyAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAvLyAgICAgICAgIFVzZXI6e1xyXG4gICAgLy8gICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIC8vICAgICAgICAgICAgIG5pY2tuYW1lOidoZScsXHJcbiAgICAvLyAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgIGNvbnRlbnQgOiBcImFhYWFcIixcclxuICAgIC8vXHJcbiAgICAvLyAgICAgfV0sXHJcbiAgICAvLyB9XHJcbiAgICBdLFxyXG4gICAgaW1hZ2VQYXRoczpbXSwvL+ydtOuvuOyngCDsl4XroZzrk5zsi5zsl5Ag7J2066+47KeAIOyggOyepVxyXG4gICAgaGFzTW9yZVBvc3Q6dHJ1ZSxcclxuICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yIDogZmFsc2UsXHJcblxyXG4gICAgbG9hZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3IgOiBmYWxzZSxcclxuXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvciA6IGZhbHNlLFxyXG5cclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yIDogZmFsc2UsXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gICAgIEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKT0+KHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZCA6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZSA6IGZha2VyLm5hbWUuZmluZE5hbWUoKVxyXG4gICAgfSxcclxuICAgIEltYWdlcyA6IFt7XHJcbiAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpLFxyXG4gICAgfV0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbiAgICBjb250ZW50IDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxufSkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdEFjdGlvbiA9IChkYXRhKSA9Pih7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIGNvbnRlbnQ6ZGF0YS5jb250ZW50LFxyXG4gICAgSW1hZ2VzIDogW3tcclxuICAgICAgICBzcmM6XCJodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEF5TVRaZk5Ua2clMkZNREF4TmpFek5EVXpNRGt6T0RReC43ZWZoQkFOVjl2MThJMERVUWhILVRjMjd4dUk1dVlTYzBFNkdZaG9HSk5FZy5GS2xqTl9KdE50cG50NmpMRm1YcDl4WEFkYXRlaFJiZU1uUWJ4TjU0VG80Zy5QTkcua2NtMjg3NCUyRiUyNUMxJTI1QTYlMjVCOCUyNUYxJTI1QzAlMjVCQl8lMjVDMCUyNUQ0JTI1QjclMjVDMiUyNUM3JTI1RDglMjVDMSUyNUQ2JTI1QkMlMjVCQyUyNUJGJTI1RTQuXzAwMV8lMjUyODEwMCUyNTI5LnBuZyZ0eXBlPXNjOTYwXzgzMlwiLFxyXG4gICAgfSxcclxuICAgIF0sXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOiftmanqsr3tlZgnLFxyXG4gICAgfSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBuaWNrbmFtZTonaGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6IFwiYWFhYVwiLFxyXG4gICAgfV0sXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6ZGF0YSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6J+2Zqeqyve2VmCcsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8v7J207KCEIOyDge2DnOulvCDslaHshZjsnYQg7Ya17ZW0IOuLpOydjOyDge2DnOulvCDrp4zrk6TslrTrgrTripQg7ZWo7IiY6rCAIOumrOuTgOyEnOuLpC4g67aI67OA7ISx7J2EIOyngO2CpOuptOyEnC5cclxuLy8tLT5wcm9kdWNl66W8IOyCrOyaqe2VmOuptCDrtojrs4DshLHsnbQg67O07J6l65Cc64ukLlxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlICwgYWN0aW9uKSA9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3QgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgMzA7XHJcbiAgICAgICAgICAgICAgICAvL+qyjOyLnOusvCA1MOqwnOunjCDrs7TqsqDri6RcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KFtkdW1teVBvc3RBY3Rpb24oYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIC8qYWN0aW9uLmRhdGEuY29tbWVudCAsIHVzZXJpZCAsIHBvc3RpZCovXHJcbiAgICAgICAgICAgICAgICAvKmltbWVyIOyCrOyaqe2VmOuptCDtm6jslKwg7Im96rKMIO2VoCDsiJgg7J6I64ukLiAqL1xyXG4gICAgICAgICAgICAgICAgLyogICAgICAgICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgoeSk9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSAsIC4uLnBvc3QuQ29tbWVudHNdOyAvISrrsLDsl7TsnZgg7JWe7Jy866GcIOyDiOuhnOyatCDrjJPquIDsnYQg7KeR7Ja064Sj64qU64ukLiohL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OyovXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudC51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiLCJpbXBvcnQge0FERF9QT1NUX1RPX01FLCBSRU1PVkVfUE9TVF9PRl9NRX0gZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICAgIGlzTG9nZ2luZ0luOmZhbHNlLFxyXG4gICAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLyrroZzqt7jslYTsm4Mg7Iuc64+E7KSRKi9cclxuXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgICAgUG9zdHMgOiBbe2lkOjF9XSxcclxuICAgIH0sXHJcbiAgICBpc1NpZ25pbmdVcDpmYWxzZSxcclxuICAgIGlzU2lnbmVkSW46ZmFsc2UsXHJcblxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOmZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6bnVsbCxcclxuXHJcbiAgICBzaWduVXBEYXRhOiB7fSxcclxuICAgIGxvZ2luRGF0YToge30sXHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ2luUmVxdWVzdEFjdGlvbigpKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZUFjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PntcclxuICAgICAgICBkaXNwYXRjaChsb2dvdXRSZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9nb3V0U3VjY2Vzc0FjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ291dEZhaWx1cmVBY3Rpb24oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uPSAoZGF0YSkgPT57XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luRmFpbHVyZUFjdGlvbj0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dFN1Y2Nlc3NBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRGYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfUkVRVUVTVCxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZTpMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2lnbnVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKT0+KHtcclxuICAgIHR5cGU6U0lHTl9VUF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWUgOiAn7Zmp6rK97ZWYJyxcclxuICAgIGlkOiAxLFxyXG4gICAgUG9zdHMgOiBbe2lkIDogMX1dLFxyXG4gICAgRm9sbG93aW5nczogW3tuaWNrbmFtZSA6ICfqsIDrgpjri6QnfSx7bmlja25hbWUgOiAn6rCA44S064KY64ukJ30se25pY2tuYW1lIDogJ+uCmOuLpCd9XSxcclxuICAgIEZvbGxvd2Vyczpbe25pY2tuYW1lIDogJ+qwgOuCmOuLpCd9LHtuaWNrbmFtZSA6ICfqsIDjhLTrgpjri6QnfSx7bmlja25hbWUgOiAn64KY64ukJ31dLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUgLCBhY3Rpb24pID0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUgLCAoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXIuRm9sbG93aW5ncyA9IGRyYWZ0LnVzZXIuRm9sbG93aW5ncy5maWx0ZXIoKHYpPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy/tlbTri7kg7IKs656M67m86rOgIOuCmOuouOyngCDtjJTroZzsmrAg7ZW07KSA64ukLlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXIuRm9sbG93aW5ncy5wdXNoKHtpZDphY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXIgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzp7XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51c2VyID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51c2VyID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc1NpZ25lZEluID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXNlci5Qb3N0cy51bnNoaWZ0KHtpZCA6IGFjdGlvbi5kYXRhfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuLyogICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdHM6IFt7aWQ6YWN0aW9uLmRhdGF9LCAuLi5zdGF0ZS51c2VyLlBvc3RzXSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXIuUG9zdHMgPSBkcmFmdC51c2VyLlBvc3RzLmZpbHRlcigodik9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuLyogICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUudXNlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgUG9zdHM6IHN0YXRlLnVzZXIuUG9zdHMuZmlsdGVyKCh2KT0+di5pZCA9PT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQge2FsbCAsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnXHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHt0YWtlRXZlcnl9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuXHJcbi8qXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpey8hKmFjdGlvbi5kYXRh6rCAIOuTpOyWtOyYqOuLpC4qIS9cclxuICAgIHJldHVybiBheGlvcy5wb3J0KCcvYXBpL2xvZ2luJyAsZGF0YSlcclxufVxyXG5mdW5jdGlvbiBsb2dPdXRBUEkoKXtcclxuICAgIHJldHVybiBheGlvcy5wb3J0KCcvYXBpL2xvZ291dCcpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSl7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9wb3N0JyAsIGRhdGEpXHJcbn0qL1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpe1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgIF0pO1xyXG59XHJcblxyXG4vKmdlbmVyYXRvciDsnYAgeWllbGTri6jsnITroZwg66mI7LaU6rOgICwgdmFsdWXroZwgeWllbGQg65Kk7JeQIOyTtCDquIDsnpDrpbwg66as7YS0IOqwgOuKpS5cclxuKiDspJHqsITsl5Ag66mI7LacIOyImCDsnojri6QhKi8iLCJpbXBvcnQge2RlbGF5LCBwdXR9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHthbGwsIGZvcmssIHRha2VMYXRlc3R9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICAgIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIEFERF9QT1NUX1RPX01FLFxyXG4gICAgUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1BPU1RfU1VDQ0VTUyxcclxuICAgIExPQURfUE9TVF9GQUlMVVJFLCBMT0FEX1BPU1RfUkVRVUVTVCwgZ2VuZXJhdGVEdW1teVBvc3QsXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCdcclxuXHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3QoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcclxuICAgICAgICAvKiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJICwgYWN0aW9uLmRhdGEpOyovXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKSwvKuyXkeyFmOyXkOyEnCDrpqztgJjsiqTtirgg67Cb7JWE7JmA7IScIOyEneyEuOyKpOulvCDrhJjqsqjspIwgLCDrjbDsnbTthLDsl5DripQg7IKs7Jqp7J6Q6rCAIOuEo+ydgCDrjbDsnbTthLDqsIAg65Ok7Ja07J6I64ukLiovXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcclxuICAgICAgICAvKiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJICwgYWN0aW9uLmRhdGEpOyovXHJcbiAgICAgICAgY29uc3QgaWQgPSBzaG9ydElkLmdlbmVyYXRlKCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH0sIC8q7JeR7IWY7JeQ7IScIOumrO2AmOyKpO2KuCDrsJvslYTsmYDshJwg7ISd7IS47Iqk66W8IOuEmOqyqOykjCAsIOuNsOydtO2EsOyXkOuKlCDsgqzsmqnsnpDqsIAg64Sj7J2AIOuNsOydtO2EsOqwgCDrk6TslrTsnojri6QuKi9cclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6aWQsXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHJlbW92ZVBvc3QoYWN0aW9uKXtcclxuICAgIHRyeXtcclxuXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcclxuICAgICAgICAvKiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJICwgYWN0aW9uLmRhdGEpOyovXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsIC8q7JeR7IWY7JeQ7IScIOumrO2AmOyKpO2KuCDrsJvslYTsmYDshJwg7ISd7IS47Iqk66W8IOuEmOqyqOykjCAsIOuNsOydtO2EsOyXkOuKlCDsgqzsmqnsnpDqsIAg64Sj7J2AIOuNsOydtO2EsOqwgCDrk6TslrTsnojri6QuKi9cclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIGRhdGE6YWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfWNhdGNoIChlcnIpe1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6QUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNUICwgYWRkUG9zdCk7IC8q7JqU7LKt7J2EIDLstIjsl5Ag7ZWc67KI66eMIOuwm+yVhOuTpOyehCovXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3QoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9QT1NUX1JFUVVFU1QgLCBsb2FkUG9zdCk7IC8q7JqU7LKt7J2EIDLstIjsl5Ag7ZWc67KI66eMIOuwm+yVhOuTpOyehCovXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNUICwgcmVtb3ZlUG9zdCk7IC8q7JqU7LKt7J2EIDLstIjsl5Ag7ZWc67KI66eMIOuwm+yVhOuTpOyehCovXHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCAsIGFkZENvbW1lbnQpOyAvKuyalOyyreydhCAy7LSI7JeQIO2VnOuyiOunjCDrsJvslYTrk6TsnoQqL1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQge2FsbCwgZm9ya30gZnJvbSBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiO1xyXG5pbXBvcnQge2RlbGF5LCBwdXQsIHRha2VMYXRlc3R9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfSU5fUkVRVUVTVFxyXG4gICAgLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIEZPTExPV19SRVFVRVNULFxyXG4gICAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBGT0xMT1dfRkFJTFVSRSxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkVcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24qIFNpZ25VcChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6U0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoIChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6U0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOmFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBMb2dJbihhY3Rpb24pey8q66Gc6re47J24IOumrO2AmOyKpO2KuO2VoOuVjCDrp6TqsJzrs4DsiJjroZwg7KCE64us65Cc64ukLiovXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzYWdhIExvZ2luXCIpXHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcclxuICAgICAgICAvKmNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEkgLCBhY3Rpb24uZGF0YSkgLyEqPT09bG9naW5BcGkoYWN0aW9uLmRhdGEpKiEvKi9cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIExvZ091dChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXHJcbiAgICAgICAgLyogICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKSovXHJcbiAgICAgICAgeWllbGQgcHV0KHsvKuyXkeyFmOydhCDrp4zrk6TslrTspIwuIGRpc3BhdGNoKi9cclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogRm9sbG93KGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMClcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoIChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6Rk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBVbkZvbGxvdyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfWNhdGNoIChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4vKnB1dOydgCBkaXNwYXRjaCDsl63tlaBcclxuKiBmb3JrIOuKlCDruYTrj5nquLAg7ZWo7IiY7Zi47LacICgg6rKw6rO8IOyViOq4sOuLpOumrOqzoCDrsJTroZwg64uk7J2M6rq8IOyLpO2WiSlcclxuKiBjYWxsIOydgCDrj5nquLAg7ZWo7IiY7Zi47LacKi9cclxuXHJcbi8q7J2067Kk7Yq4IOumrOyKpOuEiOuTpCovXHJcbi8qdGFrZeydgCAx7ZqM7Jqp7J206riw65WM66y47JeQIHdoaWxl66GcIOqwkOyLvOuLpCA9PT0gdGFrZUV2ZXJ5Ki9cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIExvZ0luKTsgLyp0YWtlTGF0ZXN0IDog7Iuk7IiY66GcIOuNlOu4lO2BtOumre2VmOuptCDrp4jsp4Drp4nqurzrp4wg67Cb7J2MLiovXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nb3V0KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCAsIExvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnbnVwKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgU2lnblVwKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIEZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKXtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgVW5Gb2xsb3cpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFVuRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9naW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dvdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWdudXApLFxyXG4gICAgXSk7XHJcbn0iLCJpbXBvcnQge2NyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XHJcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7Y3JlYXRlU3RvcmV9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcclxuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcydcclxuLyrrpqzrjZXsiqQg6riw64qlIGVuaGFuY2UqL1xyXG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gKHtkaXNwYXRjaCAsIGdldFN0YXRlfSkgPT4obmV4dCkgPT4oYWN0aW9uKT0+e1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIC8qaWYoIHR5cGVvZiAoYWN0aW9uKSA9PT0gJ2Z1bmN0aW9uJyl7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCAsIGdldFN0YXRlKTtcclxuICAgIH0qL1xyXG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcclxufVxyXG5jb25zdCBjb25maWd1cmVTdG9yZT0oKT0+e1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPVtsb2dnZXJNaWRkbGV3YXJlICwgc2FnYU1pZGRsZXdhcmVdO1xyXG4gICAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0ncHJvZHVjdGlvbidcclxuICAgICAgICA/Y29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxyXG4gICAgICAgIDpjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciAsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZVxyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsXHJcbiAgICB7ZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9