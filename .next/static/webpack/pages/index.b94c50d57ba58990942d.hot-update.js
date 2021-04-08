webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PostCard.js":
/*!************************************!*\
  !*** ./src/components/PostCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./src/components/PostImages.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CommentForm */ "./src/components/CommentForm.js");
/* harmony import */ var _PostCardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostCardContent */ "./src/components/PostCardContent.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/post */ "./src/reducers/post.js");



var _jsxFileName = "I:\\react4\\src\\components\\PostCard.js",
    _s = $RefreshSig$();










const ButtonGroup = antd__WEBPACK_IMPORTED_MODULE_2__["Button"].Group; //cover antd기능
//popover 마우스 올리면 더보기

const PostCard = ({
  post
}) => {
  _s();

  const {
    0: liked,
    1: setLiked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: commentFormOpened,
    1: setCommentFormOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const me = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.user.user);
  const removePostLoading = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.post.removePostLoading);
  const id = me && me.id;
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setLiked(prev => !prev);
  }, []);
  const onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    setCommentFormOpened(prev => !prev);
  }, []);
  const removePost = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  });
  {
    /*만약 로그인 했으면 아이디가 있음.
    내 아이디와 게시글 장성자 아이디와 같다면
    포스트 수정 가능*/
  }
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      marginBottom: 10
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 42
      }, undefined),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, undefined), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartTwoTone"], {
        twoToneColor: "red",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 29
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 30
      }, undefined), commentFormOpened ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageTwoTone"], {
        onClick: onToggleComment
      }, "commnet", false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
        onClick: onToggleComment
      }, "commnet", false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
        content: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ButtonGroup, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              children: "\uC218\uC815"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              type: 'danger',
              onClick: removePost,
              loading: removePostLoading,
              children: "\uC0AD\uC81C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 33
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            children: "\uC2E0\uACE0"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 33
          }, undefined)
        }, void 0, false),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 25
        }, undefined), ","]
      }, "more", true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, undefined)],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: post.User.nickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 29
        }, undefined),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostCardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 34
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CommentForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
        header: `${post.Comments.length} 댓글`,
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
            author: item.User.nickname,
            avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
              children: item.User.nickname[0]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 45
            }, undefined),
            content: item.content
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }, undefined), "\uB313\uAE00 \uBD80\uBD84"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, undefined);
};

_s(PostCard, "2aLur7Lc8PvxfOJtabytiqqYnFU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"]];
});

_c = PostCard;
PostCard.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUG9zdENhcmQuanMiXSwibmFtZXMiOlsiQnV0dG9uR3JvdXAiLCJCdXR0b24iLCJHcm91cCIsIlBvc3RDYXJkIiwicG9zdCIsImxpa2VkIiwic2V0TGlrZWQiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJtZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicmVtb3ZlUG9zdExvYWRpbmciLCJpZCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvblRvZ2dsZUNvbW1lbnQiLCJyZW1vdmVQb3N0IiwidHlwZSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwibWFyZ2luQm90dG9tIiwiSW1hZ2VzIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwiaXRlbSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsR0FBR0MsMkNBQU0sQ0FBQ0MsS0FBM0IsQyxDQUVBO0FBQ0E7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQW1CQyxzREFBUSxDQUFDLEtBQUQsQ0FBakM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsaUJBQUQ7QUFBQSxPQUFxQkM7QUFBckIsTUFBNkNGLHNEQUFRLENBQUMsS0FBRCxDQUEzRDtBQUNBLFFBQU1HLEVBQUUsR0FBR0MsK0RBQVcsQ0FBRUMsS0FBRCxJQUFTQSxL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QUFULEdBQXFCO0FBQ2pCOUIsTUFBSSxFQUFHK0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEUCxDQUFyQjtBQUdlbEMsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjk0YzUwZDU3YmE1ODk5MDk0MmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0F2YXRhciwgQnV0dG9uLCBDYXJkLCBQb3BvdmVyLCBMaXN0LCBDb21tZW50fSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1JldHdlZXRPdXRsaW5lZCAsIE1lc3NhZ2VUd29Ub25lLCBIZWFydE91dGxpbmVkLEhlYXJ0VHdvVG9uZSAsIE1lc3NhZ2VPdXRsaW5lZCwgRWxsaXBzaXNPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gXCIuL1Bvc3RJbWFnZXNcIjtcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gXCIuL0NvbW1lbnRGb3JtXCI7XHJcbmltcG9ydCBQb3N0Q2FyZENvbnRlbnQgZnJvbSBcIi4vUG9zdENhcmRDb250ZW50XCI7XHJcbmltcG9ydCB7UkVNT1ZFX1BPU1RfUkVRVUVTVH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwID0gQnV0dG9uLkdyb3VwO1xyXG5cclxuLy9jb3ZlciBhbnRk6riw64qlXHJcbi8vcG9wb3ZlciDrp4jsmrDsiqQg7Jis66as66m0IOuNlOuztOq4sFxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7cG9zdH0pID0+IHtcclxuICAgIGNvbnN0IFtsaWtlZCxzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY29tbWVudEZvcm1PcGVuZWQgLCBzZXRDb21tZW50Rm9ybU9wZW5lZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLnVzZXIudXNlcik7XHJcbiAgICBjb25zdCByZW1vdmVQb3N0TG9hZGluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PiBzdGF0ZS5wb3N0LnJlbW92ZVBvc3RMb2FkaW5nKTtcclxuICAgIGNvbnN0IGlkID0gbWUgJiYgbWUuaWQ7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBzZXRMaWtlZCgocHJldik9PiFwcmV2KTtcclxuICAgIH0gLCBbXSk7XHJcbiAgICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgICAgIHNldENvbW1lbnRGb3JtT3BlbmVkKChwcmV2KT0+IXByZXYpO1xyXG4gICAgfSAsIFtdKTtcclxuXHJcbiAgICBjb25zdCByZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCk9PntcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6UkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICAgICAgZGF0YTpwb3N0LmlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgey8q66eM7JW9IOuhnOq3uOyduCDtlojsnLzrqbQg7JWE7J2065SU6rCAIOyeiOydjC5cclxuICAgIOuCtCDslYTsnbTrlJTsmYAg6rKM7Iuc6riAIOyepeyEseyekCDslYTsnbTrlJTsmYAg6rCZ64uk66m0XHJcbiAgICDtj6zsiqTtirgg7IiY7KCVIOqwgOuKpSovfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luQm90dG9tOjEwfX0+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBjb3Zlcj17cG9zdC5JbWFnZXNbMF0gJiYgPFBvc3RJbWFnZXMgaW1hZ2VzID0ge3Bvc3QuSW1hZ2VzfS8+fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxSZXR3ZWV0T3V0bGluZWQga2V5ID1cInJldHdlZXRcIi8+LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yID0gXCJyZWRcIiBrZXkgPVwiaGVhcnRcIiBvbkNsaWNrID17b25Ub2dnbGVMaWtlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6PEhlYXJ0T3V0bGluZWQga2V5ID1cImhlYXJ0XCIgb25DbGljayA9e29uVG9nZ2xlTGlrZX0vPiAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudEZvcm1PcGVuZWQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVR3b1RvbmUgIGtleSA9XCJjb21tbmV0XCIgb25DbGljayA9IHtvblRvZ2dsZUNvbW1lbnR9Lz46XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQga2V5ID1cImNvbW1uZXRcIiBvbkNsaWNrID0ge29uVG9nZ2xlQ29tbWVudH0vPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlciBrZXkgPVwibW9yZVwiIGNvbnRlbnQ9eyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkID8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9eydkYW5nZXInfSBvbkNsaWNrPXtyZW1vdmVQb3N0fSBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30+7IKt7KCcPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiA8QnV0dG9uPuyLoOqzoDwvQnV0dG9uPn1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCAvPixcclxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID17cG9zdC5Vc2VyLm5pY2tuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXs8UG9zdENhcmRDb250ZW50IHBvc3REYXRhID0ge3Bvc3QuY29udGVudH0vPn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge2NvbW1lbnRGb3JtT3BlbmVkICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3QgPSB7cG9zdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcj17YCR7cG9zdC5Db21tZW50cy5sZW5ndGh9IOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9e1wiaG9yaXpvbnRhbFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSk9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e2l0ZW0uVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyPntpdGVtLlVzZXIubmlja25hbWVbMF19PC9BdmF0YXI+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIOuMk+q4gCDrtoDrtoRcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG57LypcclxuICAgICAgICAgICAgPENvbW1lbnRzLz4qL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuUG9zdENhcmQucHJvcFR5cGVzID0ge1xyXG4gICAgcG9zdCA6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==