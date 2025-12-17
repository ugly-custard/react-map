import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Cocosislands: React.FC<MapProps>;

type CocosislandsProps = MapProps;

export { type CocosislandsProps, Cocosislands as default };
