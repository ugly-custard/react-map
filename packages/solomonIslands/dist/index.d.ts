import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Solomonislands: React.FC<MapProps>;

type SolomonislandsProps = MapProps;

export { type SolomonislandsProps, Solomonislands as default };
