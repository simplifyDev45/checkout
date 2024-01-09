"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon24PxMoney = void 0;
var prop_types_1 = __importDefault(require("prop-types"));
var react_1 = __importDefault(require("react"));
var Icon24PxMoney = function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#9CA3AF" : _b, className = _a.className;
    return (react_1.default.createElement("svg", { className: "icon-24-px-money ".concat(className), fill: "none", height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("path", { className: "path", d: "M16.5 18L22.5 12.75M7.5 18L1.5 12.75M16.5 6L22.5 11.25M7.5 6L1.5 11.25M2.25 6H21.75C22.1642 6 22.5 6.33579 22.5 6.75V17.25C22.5 17.6642 22.1642 18 21.75 18H2.25C1.83579 18 1.5 17.6642 1.5 17.25V6.75C1.5 6.33579 1.83579 6 2.25 6ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z", stroke: color, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.5" })));
};
exports.Icon24PxMoney = Icon24PxMoney;
exports.Icon24PxMoney.propTypes = {
    color: prop_types_1.default.string,
};
