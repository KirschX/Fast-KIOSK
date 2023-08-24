"use strict";
exports.id = 494;
exports.ids = [494];
exports.modules = {

/***/ 9494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ GuideBox)
/* harmony export */ });
/* unused harmony export LoadingRing */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8255);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6861);
/* harmony import */ var _public_character_head_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4417);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8075);





const loadingRingVariants = {
    rotate: {
        rotate: [
            0,
            360
        ]
    },
    stopped: {
        rotate: 240
    }
};
const LoadingRing = ({ isLoading = true })=>{
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .useAnimation */ ._)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (isLoading) {
            controls.start("rotate");
        } else {
            controls.stop();
        }
    }, [
        isLoading,
        controls
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
        initial: {
            rotate: 150
        },
        animate: controls,
        variants: loadingRingVariants,
        transition: {
            duration: 1,
            ease: "linear",
            repeat: Infinity
        },
        style: {
            border: "8px solid white",
            borderTop: "8px solid #FEBB15",
            borderRadius: "50%",
            width: "210px",
            height: "210px",
            position: "absolute"
        }
    });
};
// const LoadingImage = () => (
// );
function GuideBox({ text, children, isLoading = true }) {
    const [displayText, setDisplayText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(children || text);
    const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { handleAddProduct, order, handleUpdateProduct, handleResetOrder, handleSetOrderStage, handleSetPayStage } = (0,_hooks_useOrder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Update the display text when either text or children prop changes
        setDisplayText(children || text);
    }, [
        children,
        text
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: " flex px-10",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " relative w-[210px] h-[210px] flex justify-center pl-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoadingRing, {
                            isLoading: isLoading
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: " flex justify-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_public_character_head_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .E.div, {
                    className: " text-guide pl-14",
                    initial: "hidden",
                    animate: "visible",
                    variants: {
                        hidden: {
                            opacity: 0
                        },
                        visible: {
                            opacity: 1
                        }
                    },
                    transition: {
                        duration: 1
                    },
                    children: displayText
                }, `${order.orderStage}-${order.payStage}`)
            ]
        })
    });
}


/***/ })

};
;