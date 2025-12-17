import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Turkey: React.FC<MapProps>;

type TurkeyProps = MapProps;

export { type TurkeyProps, Turkey as default };
