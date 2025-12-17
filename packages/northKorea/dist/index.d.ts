import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Northkorea: React.FC<MapProps>;

type NorthkoreaProps = MapProps;

export { type NorthkoreaProps, Northkorea as default };
