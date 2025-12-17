"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

// src/Curacao.tsx
var import_core = require("@react-map/core");

// src/constants.ts
var constants = {
  WIDTH: 500,
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: 0.5,
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var stateCode = ["Cura\xE7ao"];
var drawPath = {
  Cura\u00E7ao: "M697.68,662.5L743.72,659.49L782.92,651.72L799.4,640.34L789.24,622.95L723.56,555.71L680.52,519.39L666.08,496.07L660.58,457.74L649.52,433.65L622.74,417.18L389.73,359.84L310.73,321.43L242.79,256.37L225.79,218.41L206.45,130.47L185.91,94.89L152.51,65.55L118.88,44.83L39.65,10.94L29.27,1.69L20.09,0L10.99,6.93L0.6,23.88L15.27,56.08L18.66,92.12L14.37,160.05L23.17,185.77L44.32,202.71L69.67,216.1L91.34,231.81L148.22,324.81L172.82,354.37L201.86,365.38L237.53,368.69L267.85,381.16L280.71,419.65L304.41,460.44L359.26,505.07L420.35,540.93L515.23,569.48L611.83,635.72L660.58,659.03L697.68,662.5z"
};

// src/Curacao.tsx
var Curacao = (0, import_core.createMapComponent)({
  name: "Curacao",
  drawPath,
  stateCode,
  constants
});
var Curacao_default = Curacao;

// src/index.ts
var src_default = Curacao_default;
