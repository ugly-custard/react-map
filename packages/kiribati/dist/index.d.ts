import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Kiribati: React.FC<MapProps>;

type KiribatiProps = MapProps;

export { type KiribatiProps, Kiribati as default };
