webpackHotUpdate_N_E("pages/_app",{

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
  user: [{
    Posts: [{
      id: 1
    }]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3JlZHVjZXJzL3VzZXIuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsImlzTG9nZ2luZ0luIiwiaXNMb2dnaW5nT3V0IiwidXNlciIsIlBvc3RzIiwiaWQiLCJpc1NpZ25pbmdVcCIsImlzU2lnbmVkSW4iLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9naW5TdWNjZXNzQWN0aW9uIiwiZXJyIiwibG9naW5GYWlsdXJlQWN0aW9uIiwibG9nb3V0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ291dFN1Y2Nlc3NBY3Rpb24iLCJsb2dvdXRGYWlsdXJlQWN0aW9uIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwidHlwZSIsImR1bW15VXNlciIsIm5pY2tuYW1lIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJlcnJvciIsIkFERF9QT1NUX1RPX01FIiwidW5zaGlmdCIsIlJFTU9WRV9QT1NUX09GX01FIiwiZmlsdGVyIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxZQUFVLEVBQUUsS0FEWTtBQUV4QkMsYUFBVyxFQUFDLEtBRlk7QUFHeEJDLGNBQVksRUFBRSxLQUhVOztBQUdIO0FBRXJCQyxNQUFJLEVBQUUsQ0FBQztBQUNIQyxTQUFLLEVBQUcsQ0FBQztBQUFDQyxRQUFFLEVBQUM7QUFBSixLQUFEO0FBREwsR0FBRCxDQUxrQjtBQVF4QkMsYUFBVyxFQUFDLEtBUlk7QUFTeEJDLFlBQVUsRUFBQyxLQVRhO0FBV3hCQyx1QkFBcUIsRUFBQyxLQVhFO0FBWXhCQyxvQkFBa0IsRUFBRSxLQVpJO0FBYXhCQyxxQkFBbUIsRUFBQyxJQWJJO0FBZXhCQyxZQUFVLEVBQUUsRUFmWTtBQWdCeEJDLFdBQVMsRUFBRTtBQWhCYSxDQUFyQjtBQWtCQSxNQUFNQyxXQUFXLEdBQUlDLElBQUQsSUFBUztBQUNoQyxTQUFRQyxRQUFELElBQWE7QUFDaEJBLFlBQVEsQ0FBQ0Msa0JBQWtCLEVBQW5CLENBQVI7O0FBQ0EsUUFBRztBQUNDRCxjQUFRLENBQUNFLGtCQUFrQixDQUFDSCxJQUFELENBQW5CLENBQVI7QUFDSCxLQUZELENBRUMsT0FBTUksR0FBTixFQUFVO0FBQ1BILGNBQVEsQ0FBQ0ksa0JBQWtCLENBQUNMLElBQUQsQ0FBbkIsQ0FBUjtBQUNIO0FBQ0osR0FQRDtBQVFILENBVE07QUFVQSxNQUFNTSxZQUFZLEdBQUlOLElBQUQsSUFBUztBQUNqQyxTQUFRQyxRQUFELElBQWE7QUFDaEJBLFlBQVEsQ0FBQ00sbUJBQW1CLEVBQXBCLENBQVI7O0FBQ0EsUUFBRztBQUNDTixjQUFRLENBQUNPLG1CQUFtQixD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LHVCQUFMO0FBQ0lrQixhQUFLLENBQUMzQyxxQkFBTixHQUE4QixJQUE5QjtBQUNBMkMsYUFBSyxDQUFDekMsbUJBQU4sR0FBNEIsSUFBNUI7QUFDQXlDLGFBQUssQ0FBQzFDLGtCQUFOLEdBQTJCLEtBQTNCO0FBQ0E7O0FBQ0osV0FBS3lCLHVCQUFMO0FBQ0lpQixhQUFLLENBQUMzQyxxQkFBTixHQUE4QixLQUE5QjtBQUNBMkMsYUFBSyxDQUFDMUMsa0JBQU4sR0FBMkIsSUFBM0I7QUFDQTs7QUFDSixXQUFLMEIsdUJBQUw7QUFDSWdCLGFBQUssQ0FBQzNDLHFCQUFOLEdBQThCLEtBQTlCO0FBQ0EyQyxhQUFLLENBQUN6QyxtQkFBTixHQUE0QnVDLE1BQU0sQ0FBQ00sS0FBbkM7QUFDQTs7QUFDSixXQUFLQyxvREFBTDtBQUNJTCxhQUFLLENBQUNoRCxJQUFOLENBQVdDLEtBQVgsQ0FBaUJxRCxPQUFqQixDQUF5QjtBQUFDcEQsWUFBRSxFQUFHNEMsTUFBTSxDQUFDbkM7QUFBYixTQUF6QjtBQUNBOztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDWSxXQUFLNEMsdURBQUw7QUFDSVAsYUFBSyxDQUFDaEQsSUFBTixDQUFXQyxLQUFYLEdBQW1CK0MsS0FBSyxDQUFDaEQsSUFBTixDQUFXQyxLQUFYLENBQWlCdUQsTUFBakIsQ0FBeUJDLENBQUQsSUFBTUEsQ0FBQyxDQUFDdkQsRUFBRixLQUFTNEMsTUFBTSxDQUFDbkMsSUFBOUMsQ0FBbkI7QUFDQTs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRVk7QUFDSTtBQWxGUjtBQW9GSCxHQXJGYSxDQUFkO0FBdUZILENBeEZEOztBQTBGZWlDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTNjMjg4ODlkMmFkMTEwYTk5MzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FfSBmcm9tIFwiLi9wb3N0XCI7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgaXNMb2dnaW5nSW46ZmFsc2UsXHJcbiAgICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvKuuhnOq3uOyVhOybgyDsi5zrj4TspJEqL1xyXG5cclxuICAgIHVzZXI6IFt7XHJcbiAgICAgICAgUG9zdHMgOiBbe2lkOjF9XSxcclxuICAgIH1dLFxyXG4gICAgaXNTaWduaW5nVXA6ZmFsc2UsXHJcbiAgICBpc1NpZ25lZEluOmZhbHNlLFxyXG5cclxuICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzpmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOm51bGwsXHJcblxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gKGRpc3BhdGNoKSA9PntcclxuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSk7XHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3NBY3Rpb24oZGF0YSkpO1xyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT57XHJcbiAgICAgICAgZGlzcGF0Y2gobG9nb3V0UmVxdWVzdEFjdGlvbigpKTtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKGxvZ291dFN1Y2Nlc3NBY3Rpb24oZGF0YSkpO1xyXG4gICAgICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgICAgICBkaXNwYXRjaChsb2dvdXRGYWlsdXJlQWN0aW9uKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luU3VjY2Vzc0FjdGlvbj0gKGRhdGEpID0+e1xyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dpbkZhaWx1cmVBY3Rpb249IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRTdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6TE9HX09VVF9TVUNDRVNTLFxyXG4gICAgICAgIGRhdGEsXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0RmFpbHVyZUFjdGlvbiA9IChkYXRhKSA9PntcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOkxPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTpMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbj0gKGRhdGEpID0+KHtcclxuICAgIHR5cGU6TE9HX0lOX1JFUVVFU1QsXHJcbiAgICBkYXRhLFxyXG59KVxyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWUgOiAn7Zmp6rK97ZWYJyxcclxuICAgIGlkOiAxLFxyXG4gICAgUG9zdHMgOiBbe2lkIDogMX1dLFxyXG4gICAgRm9sbG93aW5nczogW3tuaWNrbmFtZSA6ICfqsIDrgpjri6QnfSx7bmlja25hbWUgOiAn6rCA44S064KY64ukJ30se25pY2tuYW1lIDogJ+uCmOuLpCd9XSxcclxuICAgIEZvbGxvd2Vyczpbe25pY2tuYW1lIDogJ+qwgOuCmOuLpCd9LHtuaWNrbmFtZSA6ICfqsIDjhLTrgpjri6QnfSx7bmlja25hbWUgOiAn64KY64ukJ31dLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUgLCBhY3Rpb24pID0+e1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUgLCAoZHJhZnQpPT57XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzp7XHJcblxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51c2VyID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6e1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaXNMb2dnZWRJbj0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTp7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc0xvZ2dlZEluPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOntcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51c2VyID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc1NpZ25lZEluID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXIuUG9zdHMudW5zaGlmdCh7aWQgOiBhY3Rpb24uZGF0YX0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8qICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RzOiBbe2lkOmFjdGlvbi5kYXRhfSwgLi4uc3RhdGUudXNlci5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51c2VyLlBvc3RzID0gZHJhZnQudXNlci5Qb3N0cy5maWx0ZXIoKHYpPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8qICAgICAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RzOiBzdGF0ZS51c2VyLlBvc3RzLmZpbHRlcigodik9PnYuaWQgPT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==