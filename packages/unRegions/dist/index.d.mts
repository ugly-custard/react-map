import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Unregions: React.FC<MapProps>;

type UnregionsProps = MapProps;

export { type UnregionsProps, Unregions as default };
