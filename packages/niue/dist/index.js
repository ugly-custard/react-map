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

// src/Niue.tsx
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
var stateCode = ["Niue"];
var drawPath = {
  Niue: "M246.17,901.9L331.77,832.87L369.82,816.85L405.92,835.75L604.29,697.7L689.5,595L732.98,554.33L799.56,529.28L745.4,419.21L610.11,43.1L597.3,19.7L474.05,5.34L414.07,0L260.93,5.34L164.65,197.05L136.9,216.76L115.16,218.82L96.72,223.74L80.22,250.02L76.92,286.98L90.31,315.31L107.59,342L115.74,370.75L13.45,531.74L0.44,622.11L115.74,660.31L126.22,682.91L148.35,766.72L122.73,783.57L107.59,801.23L95.36,819.31L80.22,835.75L140.39,827.53L193.38,830.41L231.23,852.59L246.17,901.9z"
};

// src/Niue.tsx
var Niue = (0, import_core.createMapComponent)({
  name: "Niue",
  drawPath,
  stateCode,
  constants
});
var Niue_default = Niue;

// src/index.ts
var src_default = Niue_default;
