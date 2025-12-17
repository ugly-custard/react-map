import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Mayotte: React.FC<MapProps>;

type MayotteProps = MapProps;

export { type MayotteProps, Mayotte as default };
