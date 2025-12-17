import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Gibraltar: React.FC<MapProps>;

type GibraltarProps = MapProps;

export { type GibraltarProps, Gibraltar as default };
