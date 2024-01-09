"use strict";
/*
We're constantly improving the code you see.
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon24PxShieldcheck = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var Icon24PxShieldcheck = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#5E718D" : _b, className = _a.className;
    return (react_1.default.createElement("svg", { className: "icon-24-px-shieldcheck ".concat(className), fill: "none", height: "25", viewBox: "0 0 24 25", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { className: "path", d: "M16.125 9.5L10.625 14.75L7.875 12.125M3.75 10.5V5C3.75 4.80109 3.82902 4.61032 3.96967 4.46967C4.11032 4.32902 4.30109 4.25 4.5 4.25H19.5C19.6989 4.25 19.8897 4.32902 20.0303 4.46967C20.171 4.61032 20.25 4.80109 20.25 5V10.5C20.25 18.3764 13.5651 20.986 12.2303 21.4285C12.0811 21.4798 11.9189 21.4798 11.7697 21.4285C10.4349 20.986 3.75 18.3764 3.75 10.5Z", stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })));
};
exports.Icon24PxShieldcheck = Icon24PxShieldcheck;
exports.Icon24PxShieldcheck.propTypes = {
    color: prop_types_1.default.string,
};
