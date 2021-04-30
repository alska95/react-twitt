webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/sagas/user.js":
/*!***************************!*\
  !*** ./src/sagas/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./src/reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





function signUpAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user', data);
}

function* SignUp(action) {
  try {
    // const result = yield call(signUpAPI);
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log('result : ', result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error('err : ', err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

_c = SignUp;

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/login', data);
}

function* LogIn(action) {
  /*로그인 리퀘스트할때 매개변수로 전달된다.*/
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    /*const result = yield call(logInAPI , action.data) /!*===loginApi(action.data)*!/*/

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOG_IN_FAILURE"],
      data: err.response.data
    });
  }
}

_c2 = LogIn;

function logOutAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user/logout', data);
}

function* LogOut(action) {
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    console.log(result);
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

_c3 = LogOut;

function LoadUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/user');
}

_c4 = LoadUserAPI;

function* LoadUser(action) {
  try {
    const result = yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(LoadUserAPI, action.data);
    console.log(result);
    /*        const result = yield call(LoadUserAPI)*/

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      /*엑션을 만들어줌. dispatch*/
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_FAILURE"],
      data: err.response.data
    });
  }
}

_c5 = LoadUser;

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

_c6 = Follow;

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


_c7 = UnFollow;

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

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_REQUEST"], LoadUser);
}

function* userSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogout), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignup)]);
}

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "SignUp");
$RefreshReg$(_c2, "LogIn");
$RefreshReg$(_c3, "LogOut");
$RefreshReg$(_c4, "LoadUserAPI");
$RefreshReg$(_c5, "LoadUser");
$RefreshReg$(_c6, "Follow");
$RefreshReg$(_c7, "UnFollow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NhZ2FzL3VzZXIuanMiXSwibmFtZXMiOlsic2lnblVwQVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsIlNpZ25VcCIsImFjdGlvbiIsInJlc3VsdCIsImNhbGwiLCJjb25zb2xlIiwibG9nIiwicHV0IiwidHlwZSIsIlNJR05fVVBfU1VDQ0VTUyIsImVyciIsImVycm9yIiwiU0lHTl9VUF9GQUlMVVJFIiwicmVzcG9uc2UiLCJsb2dJbkFQSSIsIkxvZ0luIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsImxvZ091dEFQSSIsIkxvZ091dCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkxvYWRVc2VyQVBJIiwiTG9hZFVzZXIiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiRm9sbG93IiwiZGVsYXkiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVW5Gb2xsb3ciLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIndhdGNoTG9naW4iLCJ0YWtlTGF0ZXN0IiwiTE9HX0lOX1JFUVVFU1QiLCJ3YXRjaExvZ291dCIsIkxPR19PVVRfUkVRVUVTVCIsIndhdGNoU2lnbnVwIiwiU0lHTl9VUF9SRVFVRVNUIiwid2F0Y2hGb2xsb3ciLCJGT0xMT1dfUkVRVUVTVCIsIndhdGNoVW5Gb2xsb3ciLCJVTkZPTExPV19SRVFVRVNUIiwid2F0Y2hMb2FkVXNlciIsIkxPQURfVVNFUl9SRVFVRVNUIiwidXNlclNhZ2EiLCJhbGwiLCJmb3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFpQkE7O0FBR0EsU0FBU0EsU0FBVCxDQUFtQkMsSUFBbkIsRUFBd0I7QUFDcEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLE9BQVgsRUFBcUJGLElB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RUFBVSxDQUFDRyw4REFBRCxFQUFtQmxCLE1BQW5CLENBQWhCO0FBQ0g7O0FBQ0QsVUFBVW1CLFdBQVYsR0FBdUI7QUFDbkIsUUFBTUoscUVBQVUsQ0FBQ0ssOERBQUQsRUFBa0J0QyxNQUFsQixDQUFoQjtBQUNIOztBQUNELFVBQVV1QyxXQUFWLEdBQXVCO0FBQ25CLFFBQU1OLHFFQUFVLENBQUNPLDZEQUFELEVBQWlCZixNQUFqQixDQUFoQjtBQUNIOztBQUNELFVBQVVnQixhQUFWLEdBQXlCO0FBQ3JCLFFBQU1SLHFFQUFVLENBQUNTLCtEQUFELEVBQW1CYixRQUFuQixDQUFoQjtBQUNIOztBQUNELFVBQVVjLGFBQVYsR0FBeUI7QUFDckIsUUFBTVYscUVBQVUsQ0FBQ1csZ0VBQUQsRUFBb0J0QixRQUFwQixDQUFoQjtBQUNIOztBQUVjLFVBQVV1QixRQUFWLEdBQW9CO0FBQy9CLFFBQU1DLG9FQUFHLENBQUMsQ0FDTkMscUVBQUksQ0FBQ1IsV0FBRCxDQURFLEVBRU5RLHFFQUFJLENBQUNKLGFBQUQsQ0FGRSxFQUdOSSxxRUFBSSxDQUFDTixhQUFELENBSEUsRUFJTk0scUVBQUksQ0FBQ2YsVUFBRCxDQUpFLEVBS05lLHFFQUFJLENBQUNaLFdBQUQsQ0FMRSxFQU1OWSxxRUFBSSxDQUFDVixXQUFELENBTkUsQ0FBRCxDQUFUO0FBUUgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNjJlYzlmNmIxZGFiMWY3MTdkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthbGwsIGNhbGwsIGZvcmt9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtkZWxheSwgcHV0LCB0YWtlTGF0ZXN0fSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX0lOX1JFUVVFU1RcclxuICAgICxcclxuICAgIExPR19PVVRfRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCxcclxuICAgIExPR19PVVRfU1VDQ0VTUyxcclxuICAgIFNJR05fVVBfRkFJTFVSRSxcclxuICAgIFNJR05fVVBfUkVRVUVTVCxcclxuICAgIFNJR05fVVBfU1VDQ0VTUyxcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICBGT0xMT1dfUkVRVUVTVCxcclxuICAgIEZPTExPV19TVUNDRVNTLFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBVTkZPTExPV19TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLCBMT0FEX1VTRVJfUkVRVUVTVCwgTE9BRF9VU0VSX1NVQ0NFU1MsIExPQURfVVNFUl9GQUlMVVJFXHJcbn0gZnJvbSBcIi4uL3JlZHVjZXJzL3VzZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHNpZ25VcEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicgLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogU2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEkgLCBhY3Rpb24uZGF0YSlcclxuICAgICAgICBjb25zb2xlLmxvZygncmVzdWx0IDogJyAsIHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2VyciA6ICcgLCBlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJyxkYXRhKVxyXG59XHJcbmZ1bmN0aW9uKiBMb2dJbihhY3Rpb24pey8q66Gc6re47J24IOumrO2AmOyKpO2KuO2VoOuVjCDrp6TqsJzrs4DsiJjroZwg7KCE64us65Cc64ukLiovXHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSAsIGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIC8qY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSAsIGFjdGlvbi5kYXRhKSAvISo9PT1sb2dpbkFwaShhY3Rpb24uZGF0YSkqIS8qL1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhIDogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSShkYXRhKXtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlci9sb2dvdXQnICwgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIExvZ091dChhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIC8qICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSkqL1xyXG4gICAgICAgIHlpZWxkIHB1dCh7Lyrsl5HshZjsnYQg66eM65Ok7Ja07KSMLiBkaXNwYXRjaCovXHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19PVVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBMb2FkVXNlckFQSSgpe1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyJyk7XHJcbn1cclxuZnVuY3Rpb24qIExvYWRVc2VyKGFjdGlvbil7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChMb2FkVXNlckFQSSAsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgIC8qICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKExvYWRVc2VyQVBJKSovXHJcbiAgICAgICAgeWllbGQgcHV0KHsvKuyXkeyFmOydhCDrp4zrk6TslrTspIwuIGRpc3BhdGNoKi9cclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGEgOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIEZvbGxvdyhhY3Rpb24pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTpGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaCAoZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhIDogYWN0aW9uLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogVW5Gb2xsb3coYWN0aW9uKXtcclxuICAgIHRyeXtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6VU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YSA6IGFjdGlvbi5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgIH1jYXRjaCAoZXJyKXtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOlVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGEgOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuLypwdXTsnYAgZGlzcGF0Y2gg7Jet7ZWgXHJcbiogZm9yayDripQg67mE64+Z6riwIO2VqOyImO2YuOy2nCAoIOqysOqzvCDslYjquLDri6Trpqzqs6Ag67CU66GcIOuLpOydjOq6vCDsi6TtlokpXHJcbiogY2FsbCDsnYAg64+Z6riwIO2VqOyImO2YuOy2nCovXHJcblxyXG4vKuydtOuypO2KuCDrpqzsiqTrhIjrk6QqL1xyXG4vKnRha2XsnYAgMe2ajOyaqeydtOq4sOuVjOusuOyXkCB3aGlsZeuhnCDqsJDsi7zri6QgPT09IHRha2VFdmVyeSovXHJcbmZ1bmN0aW9uKiB3YXRjaExvZ2luKCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBMb2dJbik7IC8qdGFrZUxhdGVzdCA6IOyLpOyImOuhnCDrjZTruJTtgbTrpq3tlZjrqbQg66eI7KeA66eJ6rq866eMIOuwm+ydjC4qL1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ291dCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QgLCBMb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ251cCgpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIFNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBGb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuRm9sbG93KCl7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIFVuRm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpe1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgTG9hZFVzZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKXtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5Gb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dpbiksXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ291dCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ251cCksXHJcbiAgICBdKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=