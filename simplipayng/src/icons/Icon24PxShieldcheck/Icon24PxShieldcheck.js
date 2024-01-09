"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon24PxShieldcheck = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var Icon24PxShieldcheck = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#5E718D" : _b, className = _a.className;
    return (react_1.default.createElement("svg", { className: "icon-24-px-shieldcheck ".concat(className), fill: "none", height: "24", viewBox: "0 0 25 24", width: "25", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { className: "path", d: "M16.625 9L11.125 14.25L8.375 11.625M4.25 10V4.5C4.25 4.30109 4.32902 4.11032 4.46967 3.96967C4.61032 3.82902 4.80109 3.75 5 3.75H20C20.1989 3.75 20.3897 3.82902 20.5303 3.96967C20.671 4.11032 20.75 4.30109 20.75 4.5V10C20.75 17.8764 14.0651 20.486 12.7303 20.9285C12.5811 20.9798 12.4189 20.9798 12.2697 20.9285C10.9349 20.486 4.25 17.8764 4.25 10Z", stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })));
};
exports.Icon24PxShieldcheck = Icon24PxShieldcheck;
exports.Icon24PxShieldcheck.propTypes = {
    color: prop_types_1.default.string,
};
