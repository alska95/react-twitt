webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsInR5cGUiLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImR1bW15UG9zdEFjdGlvbiIsImR1bW15Q29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwiZmlsdGVyIiwidiIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInkiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxXQUFTLEVBQUcsQ0FBQztBQUNUQyxNQUFFLEVBQUMsQ0FETTtBQUVU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ZSxFQUFFdUIsTUFBTSxDQUFDQyxLQUg1QjtBQUlJMUIseUJBQWlCLEVBQUU7QUFKdkI7O0FBTUosU0FBS1ksbUJBQUw7QUFDSSw2Q0FDT1ksS0FEUDtBQUVJcEIsc0JBQWMsRUFBRSxLQUZwQjtBQUdJRCx5QkFBaUIsRUFBRTtBQUh2Qjs7QUFLSixTQUFLVSxtQkFBTDtBQUF5QjtBQUNyQjs7QUFDQTtBQUNBLGNBQU1nQixTQUFTLEdBQUdMLEtBQUssQ0FBQ3RDLFNBQU4sQ0FBZ0I0QyxTQUFoQixDQUEyQkMsQ0FBRCxJQUN4Q0EsQ0FBQyxDQUFDNUMsRUFBRixLQUFTc0MsTUFBTSxDQUFDUCxJQUFQLENBQVljLE1BRFAsQ0FBbEI7QUFFQSxjQUFNQyxJQUFJLEdBQUdULEtBQUssQ0FBQ3RDLFNBQU4sQ0FBZ0IyQyxTQUFoQixDQUFiO0FBQ0FJLFlBQUksQ0FBQ3RDLFFBQUwsR0FBZ0IsQ0FBQzJCLFlBQVksQ0FBQ0csTUFBTSxDQUFDUCxJQUFQLENBQVk1QixPQUFiLENBQWIsRUFBcUMsR0FBRzJDLElBQUksQ0FBQ3RDLFFBQTdDLENBQWhCO0FBQXdFOztBQUN4RSxjQUFNVCxTQUFTLEdBQUcsQ0FBQyxHQUFHc0MsS0FBSyxDQUFDdEMsU0FBVixDQUFsQjtBQUNBQSxpQkFBUyxDQUFDMkMsU0FBRCxDQUFULEdBQXVCSSxJQUF2QjtBQUVBLCtDQUNPVCxLQURQO0FBRUlwQix3QkFBYyxFQUFFLElBRnBCO0FBR0lELDJCQUFpQixFQUFFO0FBSHZCO0FBS0g7O0FBRUQsU0FBS1csbUJBQUw7QUFDSSxhQUFNO0FBQ0ZWLHNCQUFjLEVBQUUsS0FEZDtBQUVGQyx1QkFBZSxFQUFFb0IsTUFBTSxDQUFDQyxLQUZ0QjtBQUdGdkIseUJBQWlCLEVBQUU7QUFIakIsT0FBTjs7QUFNSjtBQUNJLCtCQUNPcUIsS0FEUDtBQTdFUjtBQWlGSCxDQWxGRDs7QUFvRmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM3YzBjZWUxYmIxZTdjZjY3MWY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbi8q642U66+4642w7J207YSwIOyDneyEsVxyXG4qIDEuc2hvcnRJZCA6IOqyuey5mOq4sCDtnpjrk6Ag7JWE7J2065SU66W8IOyDneyEse2VtOykgOuLpC5cclxuKiAyLmZha2VyIDog6rCB7KKFIOuNlOuvuOuNsOydtO2EsCDsoJzqs7UqL1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0cyA6IFt7XHJcbiAgICAgICAgaWQ6MSxcclxuICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgaWQ6MSxcclxuICAgICAgICAgICAgbmlja25hbWU6J+2Zqeqyve2VmCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50Oifssqsg67KI7J6sIOqyjOyLnOq4gCAj7ZW07IucICPrpqzsl5HtirgnLFxyXG4gICAgICAgIEltYWdlczpbeyAvL+yLnO2AhOudvOydtOymiCDsi5wg64yA66y47J6Q66GcIOuwmO2ZmOuQmOq4sOyXkCDrjIDrrLjsnpDroZwgKOyhsOyduOyXsOyCsOyduOuTrz8pXHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQXlNVFpmTlRrZyUyRk1EQXhOakV6TkRVek1Ea3pPRFF4LjdlZmhCQU5WOXYxOEkwRFVRaEgtVGMyN3h1STV1WVNjMEU2R1lob0dKTkVnLkZLbGpOX0p0TnRwbnQ2akxGbVhwOXhYQWRhdGVoUmJlTW5RYnhONTRUbzRnLlBORy5rY20yODc0JTJGJTI1QzElMjVBNiUyNUI4JTI1RjElMjVDMCUyNUJCXyUyNUMwJTI1RDQlMjVCNyUyNUMyJTI1QzclMjVEOCUyNUMxJTI1RDYlMjVCQyUyNUJDJTI1QkYlMjVFNC5fMDAxXyUyNTI4MTAwJTI1MjkucG5nJnR5cGU9c2M5NjBfODMyJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIHNyYzpcIi4uL2ltYWdlcy/qt7jrprwxLnBuZ1wiLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBVc2VyOntcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTonaGUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50IDogXCJhYWFhXCIsXHJcblxyXG4gICAgICAgIH1dLFxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOltdLC8v7J2066+47KeAIOyXheuhnOuTnOyLnOyXkCDsnbTrr7jsp4Ag7KCA7J6lXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvciA6IGZhbHNlLFxyXG5cclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nIDogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZSA6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yIDogZmFsc2UsXHJcblxyXG4gICAgYWRkQ29tbWVudExvYWRpbmcgOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3IgOiBmYWxzZSxcclxuXHJcbn07XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4oe1xyXG4gICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIGRhdGFcclxufSlcclxuXHJcbmNvbnN0IGR1bW15UG9zdEFjdGlvbiA9IChkYXRhKSA9Pih7XHJcbiAgICBpZDogZGF0YS5pZCxcclxuICAgIGNvbnRlbnQ6ZGF0YS5jb250ZW50LFxyXG4gICAgSW1hZ2VzIDogW3tcclxuICAgICAgICBzcmM6XCJodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEF5TVRaZk5Ua2clMkZNREF4TmpFek5EVXpNRGt6T0RReC43ZWZoQkFOVjl2MThJMERVUWhILVRjMjd4dUk1dVlTYzBFNkdZaG9HSk5FZy5GS2xqTl9KdE50cG50NmpMRm1YcDl4WEFkYXRlaFJiZU1uUWJ4TjU0VG80Zy5QTkcua2NtMjg3NCUyRiUyNUMxJTI1QTYlMjVCOCUyNUYxJTI1QzAlMjVCQl8lMjVDMCUyNUQ0JTI1QjclMjVDMiUyNUM3JTI1RDglMjVDMSUyNUQ2JTI1QkMlMjVCQyUyNUJGJTI1RTQuXzAwMV8lMjUyODEwMCUyNTI5LnBuZyZ0eXBlPXNjOTYwXzgzMlwiLFxyXG4gICAgfSxcclxuICAgIF0sXHJcbiAgICBVc2VyOntcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIG5pY2tuYW1lOiftmanqsr3tlZgnLFxyXG4gICAgfSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBuaWNrbmFtZTonaGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudCA6IFwiYWFhYVwiLFxyXG4gICAgfV0sXHJcbn0pXHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4oe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIGNvbnRlbnQ6ZGF0YSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6J+2Zqeqyve2VmCcsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUgLCBhY3Rpb24pID0+e1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSl7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0QWN0aW9uKGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcigodik9PnYuaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzp7XHJcbiAgICAgICAgICAgIC8qYWN0aW9uLmRhdGEuY29tbWVudCAsIHVzZXJpZCAsIHBvc3RpZCovXHJcbiAgICAgICAgICAgIC8qaW1tZXIg7IKs7Jqp7ZWY66m0IO2bqOyUrCDsib3qsowg7ZWgIOyImCDsnojri6QuICovXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgoKHkpPT5cclxuICAgICAgICAgICAgICAgIHkuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBzdGF0ZS5tYWluUG9zdHNbcG9zdEluZGV4XTtcclxuICAgICAgICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkgLCAuLi5wb3N0LkNvbW1lbnRzXTsgLyrrsLDsl7TsnZgg7JWe7Jy866GcIOyDiOuhnOyatCDrjJPquIDsnYQg7KeR7Ja064Sj64qU64ukLiovXHJcbiAgICAgICAgICAgIGNvbnN0IG1haW5Qb3N0cyA9IFsuLi5zdGF0ZS5tYWluUG9zdHNdO1xyXG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcblxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9