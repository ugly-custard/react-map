import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Nauru: React.FC<MapProps>;

type NauruProps = MapProps;

export { type NauruProps, Nauru as default };
