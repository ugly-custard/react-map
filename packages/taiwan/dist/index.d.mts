import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Taiwan: React.FC<MapProps>;

type TaiwanProps = MapProps;

export { type TaiwanProps, Taiwan as default };
