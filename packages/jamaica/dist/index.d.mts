import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Jamaica: React.FC<MapProps>;

type JamaicaProps = MapProps;

export { type JamaicaProps, Jamaica as default };
