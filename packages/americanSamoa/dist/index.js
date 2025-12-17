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

// src/Americansamoa.tsx
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
var stateCode = ["Western", "Swain's Island", "Rose Atoll", "Manu's", "Eastern"];
var drawPath = {
  Western: "M102.2,913.65L101.93,909.82L100.11,906.55L95.64,907.35L86.16,907.17L81.77,908.04L70.14,915.06L72.44,917.12L79.64,920.84L90.83,928.5L92.7,930.64L100.03,924.65L107.99,913.76L105.64,913.1L102.2,913.65z",
  "Swain's Island": "M0.65,0L0.41,2.49L1.78,4.1L3.98,2.99L4.15,0.32L0.65,0z",
  "Rose Atoll": "M799.29,975.26L799.59,971.88L798.76,971.56L796.15,972.66L799.29,975.26z",
  "Manu's": "M450.08,894.16L449.02,890.04L443.6,887.95L431.97,887.67L426.21,888.73L422.08,891.76L424.23,892.99L425.73,895.15L426.77,898.02L427.5,901.39L430.31,901.62L432.57,901.3L434.18,900.01L435.14,897.54L437.84,898.87L440.24,898.98L442.45,897.95L444.62,895.61L448.17,897.08L450.08,894.16zM396.69,874.93L393.54,873.55L390.53,872.63L387.8,872.7L385.61,874.33L385.6,874.33L387.37,878L389.99,878.34L396.69,874.93z",
  Eastern: "M135.75,899.67L127.81,896.78L116.51,896.16L106.4,898.45L100.11,906.55L101.93,909.82L102.2,913.65L105.64,913.1L107.99,913.76L110.47,910.38L117.1,905.42L121.74,904.14L137.62,903.31L141.91,901.39L142.24,897.9L139.78,896.21L135.75,899.67z"
};

// src/Americansamoa.tsx
var Americansamoa = (0, import_core.createMapComponent)({
  name: "Americansamoa",
  drawPath,
  stateCode,
  constants
});
var Americansamoa_default = Americansamoa;

// src/index.ts
var src_default = Americansamoa_default;
