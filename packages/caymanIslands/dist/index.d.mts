import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Caymanislands: React.FC<MapProps>;

type CaymanislandsProps = MapProps;

export { type CaymanislandsProps, Caymanislands as default };
