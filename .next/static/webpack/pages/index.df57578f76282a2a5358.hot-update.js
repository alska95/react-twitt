webpackHotUpdate_N_E("pages/index",{

/***/ "./src/reducers/user.js":
/*!******************************!*\
  !*** ./src/reducers/user.js ***!
  \******************************/
/*! exports provided: initialState, loginAction, logoutAction, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOG_OUT_REQUEST, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, loginSuccessAction, loginFailureAction, logoutSuccessAction, logoutFailureAction, logoutRequestAction, loginRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var I_react4_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./src/reducers/post.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(I_react4_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const initialState = {
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,

  /*로그아웃 시도중*/
  user: null,
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
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, draft => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        {
          draft.isLoggedIn = true;
          break;
        }

      case LOG_IN_SUCCESS:
        {
          draft.user = dummyUser(action.data);
          draft.isLoggedIn = true;
          draft.isLoggingIn = false;
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

      case _post__WEBPACK_IMPORTED_MODULE_1__["ADD_POST_TO_ME"]:
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

      case _post__WEBPACK_IMPORTED_MODULE_1__["REMOVE_POST_OF_ME"]:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ0luIiwiaXNMb2dnaW5nT3V0IiwidXNlciIsImlzU2lnbmluZ1VwIiwiaXNTaWduZWRJbiIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5BY3Rpb24iLCJkYXRhIiwiZGlzcGF0Y2giLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJlcnIiLCJsb2dpbkZhaWx1cmVBY3Rpb24iLCJsb2dvdXRBY3Rpb24iLCJsb2dvdXRSZXF1ZXN0QWN0aW9uIiwibG9nb3V0U3VjY2Vzc0FjdGlvbiIsImxvZ291dEZhaWx1cmVBY3Rpb24iLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJ0eXBlIiwiZHVtbXlVc2VyIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJlcnJvciIsIkFERF9QT1NUX1RPX01FIiwidW5zaGlmdCIsIlJFTU9WRV9QT1NUX09GX01FIiwiZmlsdGVyIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxZQUFVLEVBQUUsS0FEWTtBQUV4QkMsYUFBVyxFQUFDLEtBRlk7QUFHeEJDLGNBQVksRUFBRSxLQUhVOztBQUdIO0FBRXJCQyxNQUFJLEVBQUUsSUFMa0I7QUFNeEJDLGFBQVcsRUFBQyxLQU5ZO0FBT3hCQyxZQUFVLEVBQUMsS0FQYTtBQVN4QkMsdUJBQXFCLEVBQUMsS0FURTtBQVV4QkMsb0JBQWtCLEVBQUUsS0FWSTtBQVd4QkMscUJBQW1CLEVBQUMsSUFYSTtBQWF4QkMsWUFBVSxFQUFFLEVBYlk7QUFjeEJDLFdBQVMsRUFBRTtBQWRhLENBQXJCO0FBZ0JBLE1BQU1DLFdBQVcsR0FBSUMsSUFBRCxJQUFTO0FBQ2hDLFNBQVFDLFFBQUQsSUFBYTtBQUNoQkEsWUFBUSxDQUFDQyxrQkFBa0IsRUFBbkIsQ0FBUjs7QUFDQSxRQUFHO0FBQ0NELGNBQVEsQ0FBQ0Usa0JBQWtCLENBQUNILElBQUQsQ0FBbkIsQ0FBUjtBQUNILEtBRkQsQ0FFQyxPQUFNSSxHQUFOLEVBQVU7QUFDUEgsY0FBUSxDQUFDSSxrQkFBa0IsQ0FBQ0wsSUFBRCxDQUFuQixDQUFSO0FBQ0g7QUFDSixHQVBEO0FBUUgsQ0FUTTtBQVVBLE1BQU1NLFlBQVksR0FBSU4sSUFBRCxJQUFTO0FBQ2pDLFNBQVFDLFFBQUQsSUFBYTtBQUNoQkEsWUFBUSxDQUFDTSxtQkFBbUIsRUFBcEIsQ0FBUjs7QUFDQSxRQUFHO0FBQ0NOLGNBQVEsQ0FBQ08sbUJBQW1CLENBQUNSLElBQUQsQ0FBcEIsQ0FBUjtBQUNILEtBRkQsQ0FFQyxPQUFNSSxHQUFOLEVBQVU7QUFDUEgsY0FBUSxD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QUFOLEdBQTRCLElBQTVCO0FBQ0EyQyxhQUFLLENBQUM1QyxrQkFBTixHQUEyQixLQUEzQjtBQUNBOztBQUNKLFdBQUt5Qix1QkFBTDtBQUNJbUIsYUFBSyxDQUFDN0MscUJBQU4sR0FBOEIsS0FBOUI7QUFDQTZDLGFBQUssQ0FBQzVDLGtCQUFOLEdBQTJCLElBQTNCO0FBQ0E7O0FBQ0osV0FBSzBCLHVCQUFMO0FBQ0lrQixhQUFLLENBQUM3QyxxQkFBTixHQUE4QixLQUE5QjtBQUNBNkMsYUFBSyxDQUFDM0MsbUJBQU4sR0FBNEJ5QyxNQUFNLENBQUNNLEtBQW5DO0FBQ0E7O0FBQ0osV0FBS0Msb0RBQUw7QUFDSUwsYUFBSyxDQUFDaEQsSUFBTixDQUFXeUMsS0FBWCxDQUFpQmEsT0FBakIsQ0FBeUI7QUFBQ2QsWUFBRSxFQUFHTSxNQUFNLENBQUNyQztBQUFiLFNBQXpCO0FBQ0E7O0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNZLFdBQUs4Qyx1REFBTDtBQUNJUCxhQUFLLENBQUNoRCxJQUFOLENBQVd5QyxLQUFYLEdBQW1CTyxLQUFLLENBQUNoRCxJQUFOLENBQVd5QyxLQUFYLENBQWlCZSxNQUFqQixDQUF5QkMsQ0FBRCxJQUFNQSxDQUFDLENBQUNqQixFQUFGLEtBQVNNLE1BQU0sQ0FBQ3JDLElBQTlDLENBQW5CO0FBQ0E7O0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVZO0FBQ0k7QUFsRlI7QUFvRkgsR0FyRmEsQ0FBZDtBQXVGSCxDQXhGRDs7QUEwRmVtQyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZjU3NTc4Zjc2MjgyYTJhNTM1OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUV9IGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSBcImltbWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICBpc0xvZ2dpbmdJbjpmYWxzZSxcclxuICAgIGlzTG9nZ2luZ091dDogZmFsc2UsIC8q66Gc6re47JWE7JuDIOyLnOuPhOykkSovXHJcblxyXG4gICAgdXNlcjogbnVsbCxcclxuICAgIGlzU2lnbmluZ1VwOmZhbHNlLFxyXG4gICAgaXNTaWduZWRJbjpmYWxzZSxcclxuXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6ZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjpudWxsLFxyXG5cclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5SZXF1ZXN0QWN0aW9uKCkpO1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzQWN0aW9uKGRhdGEpKTtcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlQWN0aW9uKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+e1xyXG4gICAgICAgIGRpc3BhdGNoKGxvZ291dFJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dvdXRTdWNjZXNzQWN0aW9uKGRhdGEpKTtcclxuICAgICAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgZGlzcGF0Y2gobG9nb3V0RmFpbHVyZUFjdGlvbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblN1Y2Nlc3NBY3Rpb249IChkYXRhKSA9PntcclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgbG9naW5GYWlsdXJlQWN0aW9uPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgbG9nb3V0U3VjY2Vzc0FjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dEZhaWx1cmVBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb249IChkYXRhKSA9Pih7XHJcbiAgICB0eXBlOkxPR19JTl9SRVFVRVNULFxyXG4gICAgZGF0YSxcclxufSlcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSxcclxuICAgIG5pY2tuYW1lIDogJ+2Zqeqyve2VmCcsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzIDogW3tpZCA6IDF9XSxcclxuICAgIEZvbGxvd2luZ3M6IFt7bmlja25hbWUgOiAn6rCA64KY64ukJ30se25pY2tuYW1lIDogJ+qwgOOEtOuCmOuLpCd9LHtuaWNrbmFtZSA6ICfrgpjri6QnfV0sXHJcbiAgICBGb2xsb3dlcnM6W3tuaWNrbmFtZSA6ICfqsIDrgpjri6QnfSx7bmlja25hbWUgOiAn6rCA44S064KY64ukJ30se25pY2tuYW1lIDogJ+uCmOuLpCd9XSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlICwgYWN0aW9uKSA9PntcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlICwgKGRyYWZ0KT0+e1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXNlciA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW49IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXNlciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNTaWduZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51c2VyLlBvc3RzLnVuc2hpZnQoe2lkIDogYWN0aW9uLmRhdGF9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vKiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0czogW3tpZDphY3Rpb24uZGF0YX0sIC4uLnN0YXRlLnVzZXIuUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXNlci5Qb3N0cyA9IGRyYWZ0LnVzZXIuUG9zdHMuZmlsdGVyKCh2KT0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4vKiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0czogc3RhdGUudXNlci5Qb3N0cy5maWx0ZXIoKHYpPT52LmlkID09PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=