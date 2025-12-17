"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DEFAULT_CONSTANTS: () => DEFAULT_CONSTANTS,
  DefaultControls: () => DefaultControls_default,
  DefaultTooltip: () => DefaultTooltip_default,
  ZOOM_PAN_DEFAULTS: () => ZOOM_PAN_DEFAULTS,
  createMapComponent: () => createMapComponent,
  getStrokeProperties: () => getStrokeProperties,
  useMousePosition: () => useMousePosition_default,
  useZoomPan: () => useZoomPan_default
});
module.exports = __toCommonJS(src_exports);

// src/constants.ts
var DEFAULT_CONSTANTS = {
  WIDTH: 500,
  MAPCOLOR: "#ffffff",
  STROKE_COLOR: "#000000",
  STROKE_WIDTH: 0.5,
  HOVERCOLOR: "#303030",
  SELECTED_COLOR: "#ff0000"
};
var ZOOM_PAN_DEFAULTS = {
  MIN_ZOOM: 1,
  MAX_ZOOM: 3,
  ZOOM_STEP: 0.25,
  PAN_STEP: 20
};

// src/utils/strokeProperties.ts
var getStrokeProperties = (borderStyle) => {
  switch (borderStyle) {
    case "dashed":
      return { strokeDasharray: "8 4" };
    case "dotted":
      return { strokeDasharray: "2 2" };
    case "dash-dot":
      return { strokeDasharray: "8 4 2 4" };
    case "dash-double-dot":
      return { strokeDasharray: "8 4 2 4 2 4" };
    default:
      return { strokeDasharray: "none" };
  }
};

// src/hooks/useMousePosition.ts
var import_react = require("react");
var useMousePosition = () => {
  const [position, setPosition] = (0, import_react.useState)({ x: 0, y: 0 });
  (0, import_react.useEffect)(() => {
    const updateMousePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return position;
};
var useMousePosition_default = useMousePosition;

// src/hooks/useZoomPan.ts
var import_react2 = require("react");
var useZoomPan = ({
  enableZoom,
  minZoom,
  maxZoom,
  zoomStep,
  panStep,
  onZoomPanChange
}) => {
  const [zoom, setZoom] = (0, import_react2.useState)(1);
  const [panX, setPanX] = (0, import_react2.useState)(0);
  const [panY, setPanY] = (0, import_react2.useState)(0);
  const zoomIn = (0, import_react2.useCallback)(() => {
    setZoom((z) => Math.min(z + zoomStep, maxZoom));
  }, [zoomStep, maxZoom]);
  const zoomOut = (0, import_react2.useCallback)(() => {
    setZoom((z) => Math.max(z - zoomStep, minZoom));
  }, [zoomStep, minZoom]);
  const reset = (0, import_react2.useCallback)(() => {
    setZoom(1);
    setPanX(0);
    setPanY(0);
  }, []);
  const pan = (0, import_react2.useCallback)(
    (direction) => {
      const delta = panStep;
      switch (direction) {
        case "up":
          setPanY((p) => p + delta);
          break;
        case "down":
          setPanY((p) => p - delta);
          break;
        case "left":
          setPanX((p) => p + delta);
          break;
        case "right":
          setPanX((p) => p - delta);
          break;
      }
    },
    [panStep]
  );
  const setZoomValue = (0, import_react2.useCallback)(
    (value) => setZoom(Math.min(Math.max(value, minZoom), maxZoom)),
    [minZoom, maxZoom]
  );
  const setPanValue = (0, import_react2.useCallback)((x, y) => {
    setPanX(x);
    setPanY(y);
  }, []);
  const controls = {
    zoom,
    panX,
    panY,
    zoomIn,
    zoomOut,
    reset,
    pan,
    setZoom: setZoomValue,
    setPan: setPanValue,
    minZoom,
    maxZoom
  };
  (0, import_react2.useEffect)(() => {
    if (onZoomPanChange && enableZoom) {
      onZoomPanChange(controls);
    }
  }, [
    zoom,
    panX,
    panY,
    zoomIn,
    zoomOut,
    reset,
    pan,
    setZoomValue,
    setPanValue,
    minZoom,
    maxZoom,
    onZoomPanChange,
    enableZoom
  ]);
  const wrapperStyle = enableZoom ? {
    transform: `scale(${zoom}) translate(${panX}px, ${panY}px)`,
    transformOrigin: "center center",
    transition: "transform 0.15s ease-out"
  } : {};
  return { wrapperStyle, controls };
};
var useZoomPan_default = useZoomPan;

// src/components/DefaultTooltip.tsx
var import_react3 = __toESM(require("react"));
var defaultTooltipStyle = {
  position: "fixed",
  backgroundColor: "#1f2937",
  color: "white",
  padding: "6px 10px",
  borderRadius: 6,
  fontSize: 13,
  fontWeight: 500,
  pointerEvents: "none",
  zIndex: 1e3,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  whiteSpace: "nowrap"
};
var DefaultTooltip = ({ state, position }) => {
  if (!state) return null;
  return /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      style: {
        ...defaultTooltipStyle,
        left: position.x + 10,
        top: position.y + 10
      }
    },
    state
  );
};
var DefaultTooltip_default = DefaultTooltip;

// src/components/DefaultControls.tsx
var import_react4 = __toESM(require("react"));
var controlButtonStyle = {
  width: 28,
  height: 28,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  border: "none",
  borderRadius: 4,
  cursor: "pointer",
  fontSize: 14,
  color: "#374151",
  transition: "background-color 0.15s ease",
  margin: 0,
  padding: 0
};
var controlsContainerStyle = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 4,
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  borderRadius: 8,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  zIndex: 10
};
var controlsRowStyle = {
  display: "flex",
  gap: 4
};
var emptySlotStyle = {
  width: 28,
  height: 28
};
var getControlsPositionStyle = (position) => {
  switch (position) {
    case "top-left":
      return { top: 10, left: 10 };
    case "top-right":
      return { top: 10, right: 10 };
    case "bottom-left":
      return { bottom: 10, left: 10 };
    case "bottom-right":
    default:
      return { bottom: 10, right: 10 };
  }
};
var DefaultControls = ({ controls, position }) => {
  const { zoomIn, zoomOut, reset, pan } = controls;
  return /* @__PURE__ */ import_react4.default.createElement("div", { style: { ...controlsContainerStyle, ...getControlsPositionStyle(position) } }, /* @__PURE__ */ import_react4.default.createElement("div", { style: controlsRowStyle }, /* @__PURE__ */ import_react4.default.createElement("div", { style: emptySlotStyle }), /* @__PURE__ */ import_react4.default.createElement("button", { type: "button", style: controlButtonStyle, onClick: () => pan("up"), "aria-label": "Pan up" }, "\u2191"), /* @__PURE__ */ import_react4.default.createElement("button", { type: "button", style: controlButtonStyle, onClick: zoomIn, "aria-label": "Zoom in" }, "+")), /* @__PURE__ */ import_react4.default.createElement("div", { style: controlsRowStyle }, /* @__PURE__ */ import_react4.default.createElement("button", { type: "button", style: controlButtonStyle, onClick: () => pan("left"), "aria-label": "Pan left" }, "\u2190"), /* @__PURE__ */ import_react4.default.createElement("button", { type: "button", style: controlButtonStyle, onClick: reset, "aria-label": "Reset" }, "\u27F2"), /* @__PURE__ */ import_react4.default.createElement("button", { type: "button", style: controlButtonStyle, onClick: () => pan("right"), "aria-label": "Pan right" }, "\u2192")), /* @__PURE__ */ import_react4.default.createElement("div", { style: controlsRowStyle }, /* @__PURE__ */ import_react4.default.createElement("div", { style: emptySlotStyle }), /* @__PURE__ */ import_react4.default.createElement("button", { type: "button", style: controlButtonStyle, onClick: () => pan("down"), "aria-label": "Pan down" }, "\u2193"), /* @__PURE__ */ import_react4.default.createElement("button", { type: "button", style: controlButtonStyle, onClick: zoomOut, "aria-label": "Zoom out" }, "\u2212")));
};
var DefaultControls_default = DefaultControls;

// src/createMapComponent.tsx
var import_react5 = __toESM(require("react"));
function createMapComponent(config) {
  const { name, drawPath, stateCode, constants } = config;
  const mapConstants = { ...DEFAULT_CONSTANTS, ...constants };
  const MapComponent = ({
    type,
    width = mapConstants.WIDTH,
    height,
    mapColor = mapConstants.MAPCOLOR,
    strokeColor = mapConstants.STROKE_COLOR,
    strokeWidth = mapConstants.STROKE_WIDTH,
    hoverColor = mapConstants.HOVERCOLOR,
    selectColor = mapConstants.SELECTED_COLOR,
    borderStyle,
    cityColors = {},
    disableClick = false,
    disableHover = false,
    onSelect,
    onHover,
    renderTooltip = true,
    enableZoom = false,
    showControls = true,
    controlsPosition = "bottom-right",
    minZoom = ZOOM_PAN_DEFAULTS.MIN_ZOOM,
    maxZoom = ZOOM_PAN_DEFAULTS.MAX_ZOOM,
    zoomStep = ZOOM_PAN_DEFAULTS.ZOOM_STEP,
    panStep = ZOOM_PAN_DEFAULTS.PAN_STEP,
    onZoomPanChange
  }) => {
    const instanceId = (0, import_react5.useId)().replace(/:/g, "");
    const { x, y } = useMousePosition_default();
    const [viewBox, setViewBox] = (0, import_react5.useState)("0 0 100 100");
    const [stateHovered, setStateHovered] = (0, import_react5.useState)(null);
    const lastHoveredRef = (0, import_react5.useRef)(null);
    const strokeProps = (0, import_react5.useMemo)(() => getStrokeProperties(borderStyle), [borderStyle]);
    const [selectedSingle, setSelectedSingle] = (0, import_react5.useState)(null);
    const [selectedMultiple, setSelectedMultiple] = (0, import_react5.useState)([]);
    const isSelected = (0, import_react5.useCallback)(
      (state) => type === "select-single" ? selectedSingle === state : selectedMultiple.includes(state),
      [type, selectedSingle, selectedMultiple]
    );
    const { wrapperStyle, controls } = useZoomPan_default({
      enableZoom,
      minZoom,
      maxZoom,
      zoomStep,
      panStep,
      onZoomPanChange
    });
    (0, import_react5.useEffect)(() => {
      const svg = document.getElementById(`svg-${instanceId}`);
      if (svg) {
        const bbox = svg.getBBox();
        setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      }
    }, [instanceId]);
    (0, import_react5.useEffect)(() => {
      stateCode.forEach((state) => {
        const path = document.getElementById(`${state}-${instanceId}`);
        if (!path) return;
        if (state === lastHoveredRef.current || isSelected(state)) return;
        path.style.fill = cityColors[state] || mapColor;
      });
    }, [cityColors, mapColor, instanceId, isSelected]);
    (0, import_react5.useEffect)(() => {
      if (type === "select-single" && selectedSingle) {
        const path = document.getElementById(`${selectedSingle}-${instanceId}`);
        if (path) path.style.fill = selectColor;
      } else if (type === "select-multiple") {
        selectedMultiple.forEach((state) => {
          const path = document.getElementById(`${state}-${instanceId}`);
          if (path) path.style.fill = selectColor;
        });
      }
    }, [selectedSingle, selectedMultiple, selectColor, instanceId, type]);
    const handleMouseEnter = (0, import_react5.useCallback)(
      (stateId) => {
        lastHoveredRef.current = stateId;
        setStateHovered(stateId);
        onHover?.(stateId);
        if (!disableHover) {
          const path = document.getElementById(`${stateId}-${instanceId}`);
          if (path) {
            path.style.fill = isSelected(stateId) ? selectColor : hoverColor;
          }
        }
      },
      [instanceId, disableHover, selectColor, hoverColor, onHover, isSelected]
    );
    const handleMouseLeave = (0, import_react5.useCallback)(
      (stateId) => {
        if (lastHoveredRef.current === stateId) {
          lastHoveredRef.current = null;
          setStateHovered(null);
          onHover?.(null);
        }
        if (!disableHover) {
          const path = document.getElementById(`${stateId}-${instanceId}`);
          if (path) {
            path.style.fill = isSelected(stateId) ? selectColor : cityColors[stateId] || mapColor;
          }
        }
      },
      [instanceId, disableHover, selectColor, cityColors, mapColor, onHover, isSelected]
    );
    const handleClick = (0, import_react5.useCallback)(
      (stateId) => {
        if (disableClick) return;
        if (type === "select-single") {
          const newSelected = selectedSingle === stateId ? null : stateId;
          if (selectedSingle && selectedSingle !== stateId) {
            const prevPath = document.getElementById(`${selectedSingle}-${instanceId}`);
            if (prevPath) prevPath.style.fill = cityColors[selectedSingle] || mapColor;
          }
          if (selectedSingle === stateId) {
            const path = document.getElementById(`${stateId}-${instanceId}`);
            if (path) path.style.fill = cityColors[stateId] || mapColor;
          }
          setSelectedSingle(newSelected);
          onSelect?.(newSelected);
        } else {
          if (selectedMultiple.includes(stateId)) {
            const updated = selectedMultiple.filter((s) => s !== stateId);
            const path = document.getElementById(`${stateId}-${instanceId}`);
            if (path) path.style.fill = cityColors[stateId] || mapColor;
            setSelectedMultiple(updated);
            onSelect?.(stateId, updated);
          } else {
            const updated = [...selectedMultiple, stateId];
            const path = document.getElementById(`${stateId}-${instanceId}`);
            if (path) path.style.fill = selectColor;
            setSelectedMultiple(updated);
            onSelect?.(stateId, updated);
          }
        }
      },
      [type, selectedSingle, selectedMultiple, disableClick, instanceId, cityColors, mapColor, selectColor, onSelect]
    );
    const containerStyle = {
      position: "relative",
      overflow: "hidden",
      width,
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    const mapStyle = {
      width: "100%",
      height: "100%",
      maxWidth: width,
      maxHeight: height,
      stroke: strokeColor,
      strokeWidth,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...strokeProps,
      ...wrapperStyle
    };
    const svgStyle = {
      width: "100%",
      height: "100%",
      maxWidth: "100%",
      maxHeight: "100%"
    };
    return /* @__PURE__ */ import_react5.default.createElement("div", { style: containerStyle }, /* @__PURE__ */ import_react5.default.createElement("div", { style: mapStyle }, /* @__PURE__ */ import_react5.default.createElement("svg", { id: `svg-${instanceId}`, viewBox, style: svgStyle, preserveAspectRatio: "xMidYMid meet" }, stateCode.map((code) => /* @__PURE__ */ import_react5.default.createElement(
      "path",
      {
        key: code,
        id: `${code}-${instanceId}`,
        d: drawPath[code],
        onClick: () => handleClick(code),
        onMouseEnter: () => handleMouseEnter(code),
        onMouseLeave: () => handleMouseLeave(code),
        style: {
          fill: cityColors[code] || mapColor,
          cursor: disableClick ? "default" : "pointer",
          ...strokeProps
        }
      }
    )))), enableZoom && showControls && /* @__PURE__ */ import_react5.default.createElement(DefaultControls_default, { controls, position: controlsPosition }), renderTooltip === true && /* @__PURE__ */ import_react5.default.createElement(DefaultTooltip_default, { state: stateHovered, position: { x, y } }), typeof renderTooltip === "function" && renderTooltip({
      state: stateHovered,
      position: { x, y },
      isHovered: !!stateHovered,
      isSelected: stateHovered ? isSelected(stateHovered) : false
    }));
  };
  MapComponent.displayName = name;
  return MapComponent;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_CONSTANTS,
  DefaultControls,
  DefaultTooltip,
  ZOOM_PAN_DEFAULTS,
  createMapComponent,
  getStrokeProperties,
  useMousePosition,
  useZoomPan
});
