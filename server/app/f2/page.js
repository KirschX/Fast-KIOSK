(() => {
var exports = {};
exports.id = 403;
exports.ids = [403];
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

/***/ 116:
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
        'f2',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5534)), "C:\\Users\\mk448\\Dv_study\\새 폴더\\front\\src\\app\\f2\\page.tsx"],
          
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
const pages = ["C:\\Users\\mk448\\Dv_study\\새 폴더\\front\\src\\app\\f2\\page.tsx"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/f2/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_PAGE,
        page: "/f2/page",
        pathname: "/f2",
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

/***/ 166:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9651))

/***/ }),

/***/ 9651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ F2)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: ./src/hooks/useOrder.ts
var useOrder = __webpack_require__(8075);
;// CONCATENATED MODULE: ./src/helper/orderComputer.ts
const burgerNameToTypeMapping = {
    빅맥: "bigMac",
    "불고기 버거": "bulgogi",
    "베이컨 토마토 디럭스": "BTD"
};
const optionToEnglish = (option)=>{
    switch(option){
        case "피클":
            return "pickle";
        case "양파":
            return "onion";
        case "토마토":
            return "tomato";
        case "양상추":
            return "cabbage";
        case "고기패티":
            return "patty";
        case "치즈":
            return "cheese";
        default:
            throw new Error(`Unknown option: ${option}`);
    }
};
const getBurgerType = (name)=>{
    return burgerNameToTypeMapping[name];
};
const computeTotalPrice = (menuPrices, products)=>{
    return products.reduce((total, item)=>{
        let productPrice = 0;
        const burgerType = getBurgerType(item.burger);
        // 메인 메뉴 계산
        if (burgerType) {
            productPrice += item.type === "단품" ? menuPrices.burger[burgerType][0] * item.quantity : menuPrices.burger[burgerType][1] * item.quantity;
        }
        // 옵션 추가 시 계산
        productPrice += Object.entries(item.ingredients).reduce((acc, cur)=>{
            const [ingredient, quantity] = cur;
            // console.log(ingredient, quantity);
            if (quantity === 0) return acc;
            if (ingredient) {
                return acc + menuPrices.options[optionToEnglish(ingredient)] * quantity;
            } else return acc;
        }, 0);
        return total + productPrice;
    }, 0);
};
const computeItemPrices = (menuPrices, products)=>{
    return products.map((item)=>{
        let productPrice = 0;
        const burgerType = getBurgerType(item.burger);
        if (burgerType) {
            productPrice += item.type === "단품" ? menuPrices.burger[burgerType][0] * item.quantity : menuPrices.burger[burgerType][1] * item.quantity;
            productPrice += Object.entries(item.ingredients).reduce((acc, cur)=>{
                const [ingredient, quantity] = cur;
                if (quantity === 0) return acc;
                else return acc + menuPrices.options[optionToEnglish(ingredient)] * quantity;
            }, 0);
            return productPrice;
        } else {
            return 0;
        }
    });
};

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/hooks/useVoiceGuidance.ts
var useVoiceGuidance = __webpack_require__(4408);
;// CONCATENATED MODULE: ./public/x.svg
var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgX = function SvgX(props) {
  return /*#__PURE__*/react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 68,
    height: 68,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react_.createElement("path", {
    fill: "#000",
    d: "M68 12.367 55.633 0 34 21.633 12.367 0 0 12.367 21.633 34 0 55.633 12.367 68 34 46.367 55.633 68 68 55.633 46.367 34 68 12.367Z"
  })));
};
/* harmony default export */ const x = (SvgX);
// EXTERNAL MODULE: ./src/components/guideBox.tsx
var guideBox = __webpack_require__(9494);
// EXTERNAL MODULE: ./src/hooks/useAudioRecording.ts
var useAudioRecording = __webpack_require__(6425);
;// CONCATENATED MODULE: ./src/app/f2/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 








function F2() {
    const router = (0,navigation.useRouter)();
    const { handleAddProduct, order, handleUpdateProduct, handleResetOrder, handleRemoveProduct, handleSetOrderStage, handleSetCurrentOrderNumber, handleSetPayStage, handleSetTargetOrderNumber } = (0,useOrder/* default */.Z)();
    const { startRecording, stopRecording, loading } = (0,useAudioRecording/* default */.Z)();
    const { voiceStarted, startVoiceGuidance, stopVoiceGuidance } = (0,useVoiceGuidance/* default */.Z)();
    const { menuPrices, products, payStage } = order;
    const totalPrice = computeTotalPrice(order.menuPrices, order.products);
    const itemPrices = computeItemPrices(order.menuPrices, order.products);
    const guideText = [
        `결제하실 금액은 ${totalPrice}원 입니다.`,
        `결제를 원하시면 결제하기 라고 말씀하시거나 버튼을 눌러주세요.`
    ];
    const guideTextJSX = [
        `결제하실 금액은 ${totalPrice}원 입니다.`,
        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                "결제를 원하시면 ",
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-WineBerry",
                    children: "결제하기"
                }),
                " 라고 말씀하시거나 버튼을 눌러주세요."
            ]
        })
    ];
    const handleVoiceEnd = async ()=>{
        const response = await startRecording();
        if (response) {
            // console.log(order);
            // if (order.ok) setOrderStage(1);
            // else setOrderStage(2);
            const formData = new FormData();
            formData.append("audio_file", response, "audio.webm");
            const responseData = await fetch("https://sr-kiosk-api-shs2783.koyeb.app/api/stt/pay", {
                method: "POST",
                headers: {
                    accept: "application/json"
                },
                body: formData
            });
            const result = await responseData.json();
            console.log(result);
            if (result.pay) router.push("/f3");
        }
    };
    (0,react_.useEffect)(()=>{
        if (payStage === 0) {
            if (products.length !== 0) startVoiceGuidance(guideText[payStage], ()=>{
                handleSetPayStage(1);
            });
        }
        if (payStage === 1) {
            startVoiceGuidance(guideText[payStage], ()=>{
                handleVoiceEnd();
            });
        }
    }, [
        payStage
    ]);
    // console.log(
    //   Object.keys(
    //     item.ingredients
    //   )
    //     .filter(
    //       (key) =>
    //         item.ingredients[key as keyof typeof item.ingredients] > 0
    //     )
    //     .map((item) => optionToKorean(item))
    //     .join(", ")
    // )
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " w-full items-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " flex justify-start mb-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " h-[300px] text-h1 font-bold pt-20 ml-10",
                    children: "주문내역"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " grid grid-cols-11 text-[50px] mx-10 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " col-span-3",
                        children: "메뉴"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " col-span-3",
                        children: "구성변경"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " col-span-2",
                        children: "가격"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " col-span-2",
                        children: "수량변경"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " col-span-1",
                        children: "취소"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " col-span-4 border-b-[1px] mb-20",
                children: " "
            }),
            order.products.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " grid grid-cols-11 text-[50px] mx-10 mb-10 text-center items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " col-span-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: " flex-col",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: " font-bold",
                                        children: item.burger
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: " text-[36px] text-gray-Light overflow-hidden",
                                        children: (()=>{
                                            const filteredKeys = Object.keys(item.ingredients).filter((key)=>item.ingredients[key] > 0);
                                            const displayText = filteredKeys.join(", ");
                                            return displayText.length > 10 ? displayText.slice(0, 10) + "..." : displayText;
                                        })()
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: " text-[36px] text-gray-Light",
                                        children: `${item.side}, ${item.beverage}`
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " col-span-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: " flex-col space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        onClick: ()=>{
                                            handleSetTargetOrderNumber(index);
                                            router.push("f2/side");
                                        },
                                        className: " rounded-[40px] p-4 border border-black",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "사이드/음료"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: " text-[32px] relative left-2",
                                                children: "변경"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        onClick: ()=>{
                                            handleSetTargetOrderNumber(index);
                                            router.push("f2/ingredients");
                                        },
                                        className: " rounded-[40px] p-4 border border-black",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "재료"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: " text-[32px] relative left-2",
                                                children: "변경"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: " col-span-2",
                            children: `${itemPrices[index]}원`
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: " col-span-2 space-x-6 font-bold",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: ()=>{
                                        console.log(+item.quantity - 1);
                                        handleUpdateProduct(index, {
                                            quantity: +item.quantity - 1
                                        });
                                    },
                                    className: " text-[#D3D2D2] text-[120px]",
                                    children: "-"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: " text-[80px] relative bottom-[8px]",
                                    children: item.quantity
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    onClick: ()=>{
                                        console.log(item);
                                        console.log(order.products);
                                        handleUpdateProduct(index, {
                                            quantity: +item.quantity + 1
                                        });
                                    },
                                    className: " text-[#D3D2D2] text-[120px]",
                                    children: "+"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>{
                                handleRemoveProduct(index);
                                handleSetCurrentOrderNumber(order.currentOrderNumber - 1);
                            },
                            className: " col-span-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: " flex justify-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(x, {})
                            })
                        })
                    ]
                }, index)),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " col-span-4 border-b-[1px]",
                children: " "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " flex justify-end p-4 text-guide font-bold mb-40",
                children: `총 ${totalPrice}원`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " mb-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx(guideBox/* default */.Z, {
                    isLoading: loading,
                    children: guideTextJSX[order.payStage]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: " text-h2 font-bold text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: " flex mx-20 space-x-20",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>{
                                    handleSetOrderStage(0);
                                    handleSetCurrentOrderNumber(order.currentOrderNumber + 1);
                                    router.push("/f1");
                                },
                                className: " w-1/2 rounded-[80px] bg-gray-Light_2 text-gray-Medium p-20 shadow-[5px_8px_8px_0px_rgba(0,0,0,0.15)]",
                                children: "추가 주문"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: ()=>{
                                    router.push("/f3");
                                },
                                className: " w-1/2 rounded-[80px] bg-LightningYellow text-white p-20 shadow-[5px_8px_8px_0px_rgba(0,0,0,0.15)]",
                                children: "결제하기"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " flex ",
                        onClick: ()=>{
                            handleResetOrder();
                            // handleRemoveProduct(order.currentOrderNumber);
                            handleSetOrderStage(0);
                            router.push("/f1");
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full rounded-[80px] bg-gray-Light_2 text-gray-Medium p-4 mx-20 mt-20 shadow-lg",
                            children: "다시 주문"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 5534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\mk448\Dv_study\새 폴더\front\src\app\f2\page.tsx`)

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
var __webpack_exports__ = __webpack_require__.X(0, [587,846,654,562,75,469,425,494], () => (__webpack_exec__(116)));
module.exports = __webpack_exports__;

})();