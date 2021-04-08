webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/post.js":
/*!******************************!*\
  !*** ./src/reducers/post.js ***!
  \******************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, addPostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var I_react4_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(I_react4_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAyMTZfNTkg%2FMDAxNjEzNDUzMDkzODQx.7efhBANV9v18I0DUQhH-Tc27xuI5uYSc0E6GYhoGJNEg.FKljN_JtNtpnt6jLFmXp9xXAdatehRbeMnQbxN54To4g.PNG.kcm2874%2F%25C1%25A6%25B8%25F1%25C0%25BB_%25C0%25D4%25B7%25C2%25C7%25D8%25C1%25D6%25BC%25BC%25BF%25E4._001_%2528100%2529.png&type=sc960_832'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      src: "../images/그림1.png"
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
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
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
  content: data,
  User: {
    id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
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

    case REMOVE_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostDone: false,
        removePostError: false,
        removePostLoading: true
      });

    case REMOVE_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: state.mainPosts.filter(v => v.id !== action.data),
        removePostDone: true,
        removePostError: false,
        removePostLoading: false
      });

    case REMOVE_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostDone: false,
        removePostError: action.error,
        removePostLoading: false
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentDone: false,
        addCommentLoading: true
      });

    case ADD_COMMENT_SUCCESS:
      {
        /*action.data.comment , userid , postid*/

        /*immer 사용하면 훨씬 쉽게 할 수 있다. */
        const postIndex = state.mainPosts.findIndex(y => y.id === action.data.postId);
        const post = state.mainPosts[postIndex];
        post.Comments = [dummyComment(action.data.content), ...post.Comments];
        /*배열의 앞으로 새로운 댓글을 집어넣는다.*/

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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImR1bW15UG9zdEFjdGlvbiIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwiZmlsdGVyIiwidiIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInkiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUcsQ0FBQztBQUNUQyxNQUFFLEVBQUMsQ0FETTtBQUVU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ZSxFQUFFdUIsTUFBTSxDQUFDQyxLQUg1QjtBQUlJMUIseUJBQWlCLEVBQUU7QUFKdkI7O0FBTUosU0FBS1ksbUJBQUw7QUFDSSw2Q0FDT1ksS0FEUDtBQUVJcEIsc0JBQWMsRUFBRSxLQUZwQjtBQUdJRCx5QkFBaUIsRUFBRTtBQUh2Qjs7QUFLSixTQUFLVSxtQkFBTDtBQUF5QjtBQUNyQjs7QUFDQTtBQUNBLGNBQU1nQixTQUFTLEdBQUdMLEtBQUssQ0FBQ3RDLFNBQU4sQ0FBZ0I0QyxTQUFoQixDQUEyQkMsQ0FBRCxJQUN4Q0EsQ0FBQyxDQUFDNUMsRUFBRixLQUFTc0MsTUFBTSxDQUFDUCxJQUFQLENBQVljLE1BRFAsQ0FBbEI7QUFFQSxjQUFNQyxJQUFJLEdBQUdULEtBQUssQ0FBQ3RDLFNBQU4sQ0FBZ0IyQyxTQUFoQixDQUFiO0FBQ0FJLFlBQUksQ0FBQ3RDLFFBQUwsR0FBZ0IsQ0FBQzJCLFlBQVksQ0FBQ0csTUFBTSxDQUFDUCxJQUFQLENBQVk1QixPQUFiLENBQWIsRUFBcUMsR0FBRzJDLElBQUksQ0FBQ3RDLFFBQTdDLENBQWhCO0FBQXdFOztBQUN4RSxjQUFNVCxTQUFTLEdBQUcsQ0FBQyxHQUFHc0MsS0FBSyxDQUFDdEMsU0FBVixDQUFsQjtBQUNBQSxpQkFBUyxDQUFDMkMsU0FBRCxDQUFULEdBQXVCSSxJQUF2QjtBQUVBLCtDQUNPVCxLQURQO0FBRUlwQix3QkFBYyxFQUFFLElBRnBCO0FBR0lELDJCQUFpQixFQUFFO0FBSHZCO0FBS0g7O0FBRUQsU0FBS1csbUJBQUw7QUFDSSxhQUFNO0FBQ0ZWLHNCQUFjLEVBQUUsS0FEZDtBQUVGQyx1QkFBZSxFQUFFb0IsTUFBTSxDQUFDQyxLQUZ0QjtBQUdGdkIseUJBQWlCLEVBQUU7QUFIakIsT0FBTjs7QUFNSjtBQUNJLCtCQUNPcUIsS0FEUDtBQTdFUjtBQWlGSCxDQWxGRDs7QUFvRmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuM2YxYzYyNzg4MDZkMzJlZjNjNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuLyrrjZTrr7jrjbDsnbTthLAg7IOd7ISxXHJcbiogMS5zaG9ydElkIDog6rK57LmY6riwIO2emOuToCDslYTsnbTrlJTrpbwg7IOd7ISx7ZW07KSA64ukLlxyXG4qIDIuZmFrZXIgOiDqsIHsooUg642U66+4642w7J207YSwIOygnOqztSovXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW3tcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTon7Zmp6rK97ZWYJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6J+yyqyDrsojsnqwg6rKM7Iuc6riAICPtlbTsi5wgI+umrOyXke2KuCcsXHJcbiAgICAgICAgSW1hZ2VzOlt7IC8v7Iuc7YCE65287J207KaIIOyLnCDrjIDrrLjsnpDroZwg67CY7ZmY65CY6riw7JeQIOuMgOusuOyekOuhnCAo7KGw7J247Jew7IKw7J2465OvPylcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkZNakF5TVRBeU1UWmZOVGtnJTJGTURBeE5qRXpORFV6TURrek9EUXguN2VmaEJBTlY5djE4STBEVVFoSC1UYzI3eHVJNXVZU2MwRTZHWWhvR0pORWcuRktsak5fSnROdHBudDZqTEZtWHA5eFhBZGF0ZWhSYmVNblFieE41NFRvNGcuUE5HLmtjbTI4NzQlMkYlMjVDMSUyNUE2JTI1QjglMjVGMSUyNUMwJTI1QkJfJTI1QzAlMjVENCUyNUI3JTI1QzIlMjVDNyUyNUQ4JTI1QzElMjVENiUyNUJDJTI1QkMlMjVCRiUyNUU0Ll8wMDFfJTI1MjgxMDAlMjUyOS5wbmcmdHlwZT1zYzk2MF84MzInLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgc3JjOlwiLi4vaW1hZ2VzL+q3uOumvDEucG5nXCIsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOidoZScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQgOiBcImFhYWFcIixcclxuXHJcbiAgICAgICAgfV0sXHJcbiAgICB9XSxcclxuICAgIGltYWdlUGF0aHM6W10sLy/snbTrr7jsp4Ag7JeF66Gc65Oc7Iuc7JeQIOydtOuvuOyngCDsoIDsnqVcclxuICAgIGFkZFBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yIDogZmFsc2UsXHJcblxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmcgOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3IgOiBmYWxzZSxcclxuXHJcbiAgICBhZGRDb21tZW50TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmUgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvciA6IGZhbHNlLFxyXG5cclxufTtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0QWN0aW9uID0gKGRhdGEpID0+KHtcclxuICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgY29udGVudDpkYXRhLmNvbnRlbnQsXHJcbiAgICBJbWFnZXMgOiBbe1xyXG4gICAgICAgIHNyYzpcImh0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQXlNVFpmTlRrZyUyRk1EQXhOakV6TkRVek1Ea3pPRFF4LjdlZmhCQU5WOXYxOEkwRFVRaEgtVGMyN3h1STV1WVNjMEU2R1lob0dKTkVnLkZLbGpOX0p0TnRwbnQ2akxGbVhwOXhYQWRhdGVoUmJlTW5RYnhONTRUbzRnLlBORy5rY20yODc0JTJGJTI1QzElMjVBNiUyNUI4JTI1RjElMjVDMCUyNUJCXyUyNUMwJTI1RDQlMjVCNyUyNUMyJTI1QzclMjVEOCUyNUMxJTI1RDYlMjVCQyUyNUJDJTI1QkYlMjVFNC5fMDAxXyUyNTI4MTAwJTI1MjkucG5nJnR5cGU9c2M5NjBfODMyXCIsXHJcbiAgICB9LFxyXG4gICAgXSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjIsXHJcbiAgICAgICAgbmlja25hbWU6J+2Zqeqyve2VmCcsXHJcbiAgICB9LFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOidoZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50IDogXCJhYWFhXCIsXHJcbiAgICB9XSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9Pih7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDpkYXRhLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTon7Zmp6rK97ZWYJyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSAsIGFjdGlvbikgPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3RBY3Rpb24oYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBzdGF0ZS5tYWluUG9zdHMuZmlsdGVyKCh2KT0+di5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgLyphY3Rpb24uZGF0YS5jb21tZW50ICwgdXNlcmlkICwgcG9zdGlkKi9cclxuICAgICAgICAgICAgLyppbW1lciDsgqzsmqntlZjrqbQg7Zuo7JSsIOyJveqyjCDtlaAg7IiYIOyeiOuLpC4gKi9cclxuICAgICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgoeSk9PlxyXG4gICAgICAgICAgICAgICAgeS5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdO1xyXG4gICAgICAgICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSAsIC4uLnBvc3QuQ29tbWVudHNdOyAvKuuwsOyXtOydmCDslZ7snLzroZwg7IOI66Gc7Jq0IOuMk+q4gOydhCDsp5HslrTrhKPripTri6QuKi9cclxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=