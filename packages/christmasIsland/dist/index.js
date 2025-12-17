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

// src/Christmasisland.tsx
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
var stateCode = ["Christmas Island"];
var drawPath = {
  "Christmas Island": "M583.24,826.57L678.66,819.6L710.46,749.42L698.72,600.11L749.12,510.03L749.12,387.61L779.94,238.83L787.28,122.89L799.52,38.81L735.91,0L622.39,58.21L526.49,155.23L437.92,238.83L273.03,232.86L153.15,168.67L75.35,141.8L75.35,219.42L107.64,304.01L63.6,413.49L0.48,452.3L19.57,522.97L139.93,484.15L279.39,477.69L406.12,503.07L495.17,535.91L514.25,626.49L551.93,723.04L583.24,826.57z"
};

// src/Christmasisland.tsx
var Christmasisland = (0, import_core.createMapComponent)({
  name: "Christmasisland",
  drawPath,
  stateCode,
  constants
});
var Christmasisland_default = Christmasisland;

// src/index.ts
var src_default = Christmasisland_default;
