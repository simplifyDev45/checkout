"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Success = void 0;
var react_1 = __importDefault(require("react"));
var IconPx_1 = require("../components/Success/components/IconPx");
var IconPxWrapper_1 = require("../components/Success/components/IconPxWrapper");
var Icon24PxShieldcheck_1 = require("../icons/Icon24PxShieldcheck");
var Icon24PxXsquare1_1 = require("../iconsSuccess/icons/Icon24PxXsquare1");
require("./style.css");
var Success = function () {
    return (react_1.default.createElement("div", { className: "frame3" },
        react_1.default.createElement("div", { className: "div" },
            react_1.default.createElement(Icon24PxXsquare1_1.Icon24PxXsquare1, { className: "icon-instance-node", color: "#FCA5A5" }),
            react_1.default.createElement("div", { className: "div-2" },
                react_1.default.createElement("div", { className: "div-3" },
                    react_1.default.createElement("div", { className: "group-wrapper" },
                        react_1.default.createElement("div", { className: "group" },
                            react_1.default.createElement("img", { className: "img", alt: "frame3", src: "https://c.animaapp.com/xUiKisyv/img/frame3-9820.svg" }),
                            react_1.default.createElement("div", { className: "div-4" },
                                react_1.default.createElement("img", { className: "star", alt: "Star", src: "https://c.animaapp.com/xUiKisyv/img/star-3.svg" }),
                                react_1.default.createElement("img", { className: "star-2", alt: "Star", src: "https://c.animaapp.com/xUiKisyv/img/star-4.svg" }),
                                react_1.default.createElement("div", { className: "rectangle" }),
                                react_1.default.createElement("div", { className: "rectangle-2" })),
                            react_1.default.createElement("div", { className: "div-5" },
                                react_1.default.createElement("img", { className: "star-3", alt: "Star", src: "https://c.animaapp.com/xUiKisyv/img/star-5.svg" }),
                                react_1.default.createElement("div", { className: "rectangle-3" }),
                                react_1.default.createElement("div", { className: "rectangle-4" }),
                                react_1.default.createElement("div", { className: "ellipse" }),
                                react_1.default.createElement("div", { className: "ellipse-2" })))),
                    react_1.default.createElement("div", { className: "div-6" },
                        react_1.default.createElement(IconPx_1.IconPx, null),
                        react_1.default.createElement("div", { className: "text-wrapper" }, "Success!"),
                        react_1.default.createElement(IconPxWrapper_1.IconPxWrapper, null))),
                react_1.default.createElement("p", { className: "p" }, "You paid NGN 1000 to simplify"))),
        react_1.default.createElement("div", { className: "div-7" },
            react_1.default.createElement(Icon24PxShieldcheck_1.Icon24PxShieldcheck, { className: "icon-instance-node", color: "#09C63E" }),
            react_1.default.createElement("p", { className: "secured-by-simplipay" },
                react_1.default.createElement("span", { className: "span" }, "Secured by"),
                react_1.default.createElement("span", { className: "text-wrapper-2" }, " Simplipay")))));
};
exports.Success = Success;
