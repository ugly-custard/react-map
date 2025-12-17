import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Montserrat: React.FC<MapProps>;

type MontserratProps = MapProps;

export { type MontserratProps, Montserrat as default };
