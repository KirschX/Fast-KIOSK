(() => {
var exports = {};
exports.id = 597;
exports.ids = [597];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 5031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: [
        'f3',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9575)), "C:\\Users\\mk448\\Dv_study\\새 폴더\\front\\src\\app\\f3\\page.tsx"],
          
        }]
      },
        {
          
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      },
        {
          'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5904)), "C:\\Users\\mk448\\Dv_study\\새 폴더\\front\\src\\app\\layout.tsx"],
          metadata: {
    icon: [(async (props) => (await Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3881))).default(props))],
    apple: [],
    openGraph: [],
    twitter: [],
    manifest: undefined
  }
        }
      ]
      }.children;
const pages = ["C:\\Users\\mk448\\Dv_study\\새 폴더\\front\\src\\app\\f3\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/f3/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/f3/page",
        pathname: "/f3",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 4070:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7529))

/***/ }),

/***/ 7529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ F3)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./public/character_head.svg
var character_head = __webpack_require__(4417);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs + 1 modules
var use_animation = __webpack_require__(8255);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 113 modules
var motion = __webpack_require__(6861);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./src/components/timerBox.tsx



const loadingRingVariants = {
    rotate: {
        rotate: [
            0,
            360
        ]
    },
    stopped: {
        rotate: 0
    }
};
const LoadingRing = ({ isLoading })=>{
    const controls = (0,use_animation/* useAnimation */._)();
    (0,react_.useEffect)(()=>{
        if (isLoading) {
            controls.start("rotate");
        } else {
            controls.stop();
        }
    }, [
        isLoading,
        controls
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
        initial: {
            rotate: 0
        },
        animate: controls,
        variants: loadingRingVariants,
        transition: {
            duration: 1,
            ease: "linear",
            repeat: Infinity
        },
        style: {
            border: "4px solid white",
            borderTop: "4px solid #FEBB15",
            borderRadius: "50%",
            width: "180px",
            height: "180px",
            position: "absolute"
        }
    });
};
// const LoadingImage = () => (
// );
function TimerBox({ time, isLoading = true }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " w-[180px] h-[135px] flex justify-center items-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(LoadingRing, {
                    isLoading: isLoading
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: time
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./src/components/cardPaymentAnimation.tsx


function CardPaymentAnimation() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-gray-400 w-[400px] h-[80px] rounded-[70px] mb-[700px] flex justify-center mt-80 relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute bg-gray-600 w-[210px] h-[30px] top-[30px] rounded-t-xl"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                className: "bg-blue-600 w-[200px] h-[250px] relative top-[200px] rounded-xl",
                initial: "hidden",
                animate: "visible",
                variants: cardVariants,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "bg-white w-10 h-10 relative left-[100px] top-6 rounded-lg"
                })
            })
        ]
    });
}
const cardVariants = {
    hidden: {
        x: 0
    },
    visible: {
        y: -170,
        transition: {
            duration: 1,
            repeat: Infinity
        }
    }
};

// EXTERNAL MODULE: ./src/hooks/useVoiceGuidance.ts
var useVoiceGuidance = __webpack_require__(4408);
;// CONCATENATED MODULE: ./src/app/f3/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

// import { LoadingRing } from "@/components/guideBox";





function F3() {
    const [timer, setTimer] = (0,react_.useState)(60);
    const router = (0,navigation.useRouter)();
    const { voiceStarted, startVoiceGuidance, stopVoiceGuidance } = (0,useVoiceGuidance/* default */.Z)();
    (0,react_.useEffect)(()=>{
        startVoiceGuidance("카드를 투입구에 넣어주세요.");
        const intervalId = setInterval(()=>{
            setTimer((prevTimer)=>{
                if (prevTimer > 1) return prevTimer - 1;
                clearInterval(intervalId);
                router.push("/f2");
                return 0;
            });
        }, 1000);
        return ()=>clearInterval(intervalId); // Clear the interval when the component is unmounted
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " w-full items-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " flex justify-start",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " h-[300px] text-h1 font-bold pt-20 ml-10",
                    children: "결제하기"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " flex justify-center items-center ",
                children: /*#__PURE__*/ jsx_runtime_.jsx(CardPaymentAnimation, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " text-guide flex mx-8 font-medium mb-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(character_head/* default */.Z, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "위 영상과 같이 아래 카드 투입구에 카드를 삽입해주세요."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " flex justify-center items-center ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full relative rounded-[50px] flex bg-gray-Light_2 text-gray-Medium py-16 mx-20 shadow-lg text-h2 text-center justify-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "결제 취소"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " absolute right-20",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(TimerBox, {
                                time: timer,
                                isLoading: true
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " text-[50px]",
                onClick: ()=>{
                    router.push("/f4");
                },
                children: "결제 완료"
            })
        ]
    });
}


/***/ }),

/***/ 9575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\mk448\Dv_study\새 폴더\front\src\app\f3\page.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(696)


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,846,654,742,469], () => (__webpack_exec__(5031)));
module.exports = __webpack_exports__;

})();