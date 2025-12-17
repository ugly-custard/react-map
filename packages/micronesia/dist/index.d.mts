import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Micronesia: React.FC<MapProps>;

type MicronesiaProps = MapProps;

export { type MicronesiaProps, Micronesia as default };
