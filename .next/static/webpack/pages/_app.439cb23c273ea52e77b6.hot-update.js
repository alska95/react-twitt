webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/reducers/post.js":
/*!******************************!*\
  !*** ./src/reducers/post.js ***!
  \******************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPostRequestAction, addCommentRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
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
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
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
  id: shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3Bvc3QuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsImRhdGEiLCJ0eXBlIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJkdW1teVBvc3RBY3Rpb24iLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJlcnJvciIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInkiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVPLE1BQU1BLFlBQVksR0FBRztBQUN4QkMsV0FBUyxFQUFHLENBQUM7QUFDVEMsTUFBRSxFQUFDLENBRE07QUFFVEMsUUFBSSxFQUFDO0FBQ0RELFFBQUUsRUFBQyxDQURGO0FBRURFLGNBQVEsRUFBQztBQUZSLEtBRkk7QUFNVEMsV0FBTyxFQUFDLG1CQU5DO0FBT1RDLFVBQU0sRUFBQyxDQUFDO0FBQUU7QUFDTkMsU0FBRyxFQUFFO0FBREQsS0FBRCxFQUVKO0FBQ0NBLFNBQUcsRUFBRTtBQUROLEtBRkksRUFJSjtBQUNDQSxT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LGNBQU1jLFNBQVMsR0FBR0gsS0FBSyxDQUFDOUIsU0FBTixDQUFnQmtDLFNBQWhCLENBQTJCQyxDQUFELElBQ3hDQSxDQUFDLENBQUNsQyxFQUFGLEtBQVM4QixNQUFNLENBQUNULElBQVAsQ0FBWWMsTUFEUCxDQUFsQjtBQUVBLGNBQU1DLElBQUksR0FBR1AsS0FBSyxDQUFDOUIsU0FBTixDQUFnQmlDLFNBQWhCLENBQWI7QUFDQUksWUFBSSxDQUFDOUIsUUFBTCxHQUFnQixDQUFDcUIsWUFBWSxDQUFDRyxNQUFNLENBQUNULElBQVAsQ0FBWWxCLE9BQWIsQ0FBYixFQUFxQyxHQUFHaUMsSUFBSSxDQUFDOUIsUUFBN0MsQ0FBaEI7QUFDQSxjQUFNUCxTQUFTLEdBQUcsQ0FBQyxHQUFHOEIsS0FBSyxDQUFDOUIsU0FBVixDQUFsQjtBQUNBQSxpQkFBUyxDQUFDaUMsU0FBRCxDQUFULEdBQXVCSSxJQUF2QjtBQUVBLCtDQUNPUCxLQURQO0FBRUlqQix3QkFBYyxFQUFFLElBRnBCO0FBR0lELDJCQUFpQixFQUFFO0FBSHZCO0FBS0g7O0FBRUQsU0FBS1EsbUJBQUw7QUFDSSxhQUFNO0FBQ0ZQLHNCQUFjLEVBQUUsS0FEZDtBQUVGQyx1QkFBZSxFQUFFaUIsTUFBTSxDQUFDQyxLQUZ0QjtBQUdGcEIseUJBQWlCLEVBQUU7QUFIakIsT0FBTjs7QUFNSjtBQUNJLCtCQUNPa0IsS0FEUDtBQXJEUjtBQXlESCxDQTFERDs7QUE0RGVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDM5Y2IyM2MyNzNlYTUyZTc3YjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5cclxuLyrrjZTrr7jrjbDsnbTthLAg7IOd7ISxXHJcbiogMS5zaG9ydElkIDog6rK57LmY6riwIO2emOuToCDslYTsnbTrlJTrpbwg7IOd7ISx7ZW07KSA64ukLlxyXG4qIDIuZmFrZXIgOiDqsIHsooUg642U66+4642w7J207YSwIOygnOqztSovXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzIDogW3tcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTon7Zmp6rK97ZWYJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6J+yyqyDrsojsnqwg6rKM7Iuc6riAICPtlbTsi5wgI+umrOyXke2KuCcsXHJcbiAgICAgICAgSW1hZ2VzOlt7IC8v7Iuc7YCE65287J207KaIIOyLnCDrjIDrrLjsnpDroZwg67CY7ZmY65CY6riw7JeQIOuMgOusuOyekOuhnCAo7KGw7J247Jew7IKw7J2465OvPylcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkZNakF5TVRBeU1UWmZOVGtnJTJGTURBeE5qRXpORFV6TURrek9EUXguN2VmaEJBTlY5djE4STBEVVFoSC1UYzI3eHVJNXVZU2MwRTZHWWhvR0pORWcuRktsak5fSnROdHBudDZqTEZtWHA5eFhBZGF0ZWhSYmVNblFieE41NFRvNGcuUE5HLmtjbTI4NzQlMkYlMjVDMSUyNUE2JTI1QjglMjVGMSUyNUMwJTI1QkJfJTI1QzAlMjVENCUyNUI3JTI1QzIlMjVDNyUyNUQ4JTI1QzElMjVENiUyNUJDJTI1QkMlMjVCRiUyNUU0Ll8wMDFfJTI1MjgxMDAlMjUyOS5wbmcmdHlwZT1zYzk2MF84MzInLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgc3JjOlwiLi4vaW1hZ2VzL+q3uOumvDEucG5nXCIsXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIFVzZXI6e1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6J2hlJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudCA6IFwiYWFhYVwiLFxyXG4gICAgICAgIH1dLFxyXG4gICAgfV0sXHJcbiAgICBpbWFnZVBhdGhzOltdLC8v7J2066+47KeAIOyXheuhnOuTnOyLnOyXkCDsnbTrr7jsp4Ag7KCA7J6lXHJcbiAgICBhZGRQb3N0TG9hZGluZyA6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmUgOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvciA6IGZhbHNlLFxyXG5cclxuICAgIGFkZENvbW1lbnRMb2FkaW5nIDogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZSA6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yIDogZmFsc2UsXHJcblxyXG59O1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgZGF0YVxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlQb3N0QWN0aW9uID0gKGRhdGEpID0+KHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBjb250ZW50OmRhdGEsXHJcbiAgICBJbWFnZXMgOiBbe1xyXG4gICAgICAgIHNyYzpcImh0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQXlNVFpmTlRrZyUyRk1EQXhOakV6TkRVek1Ea3pPRFF4LjdlZmhCQU5WOXYxOEkwRFVRaEgtVGMyN3h1STV1WVNjMEU2R1lob0dKTkVnLkZLbGpOX0p0TnRwbnQ2akxGbVhwOXhYQWRhdGVoUmJlTW5RYnhONTRUbzRnLlBORy5rY20yODc0JTJGJTI1QzElMjVBNiUyNUI4JTI1RjElMjVDMCUyNUJCXyUyNUMwJTI1RDQlMjVCNyUyNUMyJTI1QzclMjVEOCUyNUMxJTI1RDYlMjVCQyUyNUJDJTI1QkYlMjVFNC5fMDAxXyUyNTI4MTAwJTI1MjkucG5nJnR5cGU9c2M5NjBfODMyXCIsXHJcbiAgICB9LFxyXG4gICAgXSxcclxuICAgIFVzZXI6e1xyXG4gICAgICAgIGlkOjIsXHJcbiAgICAgICAgbmlja25hbWU6J+2Zqeqyve2VmCcsXHJcbiAgICB9LFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgVXNlcjp7XHJcbiAgICAgICAgICAgIG5pY2tuYW1lOidoZScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50IDogXCJhYWFhXCIsXHJcbiAgICB9XSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9Pih7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgY29udGVudDpkYXRhLFxyXG4gICAgVXNlcjp7XHJcbiAgICAgICAgaWQ6MixcclxuICAgICAgICBuaWNrbmFtZTon7Zmp6rK97ZWYJyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSAsIGFjdGlvbikgPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdEVycm9yOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3RBY3Rpb24oYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgLyphY3Rpb24uZGF0YS5jb21tZW50ICwgdXNlcmlkICwgcG9zdGlkKi9cclxuICAgICAgICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgoeSk9PlxyXG4gICAgICAgICAgICAgICAgeS5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdO1xyXG4gICAgICAgICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSAsIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG5cclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==