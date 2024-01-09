"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default = void 0;
var LongButton_1 = require("./LongButton");
exports.default = {
    title: "Components/LongButton",
    component: LongButton_1.LongButton,
    argTypes: {
        property1: {
            options: ["variant-4", "filled", "outline", "inactive"],
            control: { type: "select" },
        },
    },
};
exports.Default = {
    args: {
        property1: "variant-4",
        className: {},
        text: "Next",
    },
};
