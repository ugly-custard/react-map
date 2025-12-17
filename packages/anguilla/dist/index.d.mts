import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Anguilla: React.FC<MapProps>;

type AnguillaProps = MapProps;

export { type AnguillaProps, Anguilla as default };
