import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Martinique: React.FC<MapProps>;

type MartiniqueProps = MapProps;

export { type MartiniqueProps, Martinique as default };
