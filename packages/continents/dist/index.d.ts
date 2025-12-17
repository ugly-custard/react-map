import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Continents: React.FC<MapProps>;

type ContinentsProps = MapProps;

export { type ContinentsProps, Continents as default };
