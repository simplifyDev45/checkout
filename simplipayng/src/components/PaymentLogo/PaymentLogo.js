"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentLogo = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
require("./style.css");
var PaymentLogo = function (_a) {
    var className = _a.className, iconClassName = _a.iconClassName, _b = _a.right, right = _b === void 0 ? "https://c.animaapp.com/hjcXT6qK/img/right-1.svg" : _b, _c = _a.middle, middle = _c === void 0 ? "https://c.animaapp.com/hjcXT6qK/img/middle-1.svg" : _c;
    return (react_1.default.createElement("div", { className: "payment-logo ".concat(className) },
        react_1.default.createElement("div", { className: "icon ".concat(iconClassName) },
            react_1.default.createElement("div", { className: "overlap-group" },
                react_1.default.createElement("img", { className: "right", alt: "Right", src: right }),
                react_1.default.createElement("img", { className: "middle", alt: "Middle", src: middle })))));
};
exports.PaymentLogo = PaymentLogo;
exports.PaymentLogo.propTypes = {
    right: prop_types_1.default.string,
    middle: prop_types_1.default.string,
};
