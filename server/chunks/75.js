"use strict";
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 8075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1161);
/* harmony import */ var _redux_thunks_orderThunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3446);



const useOrder = ()=>{
    // const { startRecording, stopRecording, loading } = useAudioRecording();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAppDispatch */ .T)();
    const order = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .C)((state)=>state.order);
    const handleAddProduct = async (input)=>{
        if (!(input instanceof Blob)) {
            const currentState = dispatch((dispatch, getState)=>getState()).order;
            if (currentState.products.some((product)=>product.orderNumber === input.orderNumber)) {
                return;
            }
            dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .addProduct */ .gK)(input));
            dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .setOrderStage */ .d1)(1));
        } else {
            const currentState = dispatch((dispatch, getState)=>getState()).order;
            // if (currentState.orderStage === 1 || currentState.orderStage === 2)
            //   return;
            try {
                const result = await dispatch((0,_redux_thunks_orderThunks__WEBPACK_IMPORTED_MODULE_2__/* .processVoiceToOrderState */ .M)(input));
                if (result.payload.burger) {
                    dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .setOrderStage */ .d1)(1));
                } else {
                    currentState.orderStage === 2 ? dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .setOrderStage */ .d1)(5)) : dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .setOrderStage */ .d1)(2));
                }
            } catch (error) {
                console.error("Error processing voice:", error);
                return;
            }
        }
    };
    const handleUpdateProduct = (orderNumber, changes)=>{
        console.log(orderNumber, changes);
        dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .updateProduct */ .nM)({
            orderNumber,
            changes
        }));
    };
    const handleRemoveProduct = (orderNumber)=>dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .removeProduct */ .kh)(orderNumber));
    const handleResetOrder = ()=>dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .resetOrder */ .H8)());
    const handleSetTakeout = (isTakeout)=>dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .setTakeout */ .O_)(isTakeout));
    const handleSetOrderStage = (orderStage)=>dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .setOrderStage */ .d1)(orderStage));
    const handleSetCurrentOrderNumber = (orderNumber)=>dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .setCurrentOrderNumber */ .g0)(orderNumber));
    const handleSetPayStage = (payStage)=>dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .setPayStage */ .q8)(payStage));
    const handleSetTargetOrderNumber = (targetOrderNumber)=>dispatch((0,_redux_slices_orderSlice__WEBPACK_IMPORTED_MODULE_1__/* .setTargetOrderNumber */ .V8)(targetOrderNumber));
    return {
        order,
        handleAddProduct,
        handleUpdateProduct,
        handleRemoveProduct,
        handleResetOrder,
        handleSetTakeout,
        handleSetCurrentOrderNumber,
        handleSetOrderStage,
        handleSetPayStage,
        handleSetTargetOrderNumber
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useOrder);


/***/ }),

/***/ 2897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useAppSelector),
/* harmony export */   T: () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;