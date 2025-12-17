import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Faroeislands: React.FC<MapProps>;

type FaroeislandsProps = MapProps;

export { type FaroeislandsProps, Faroeislands as default };
