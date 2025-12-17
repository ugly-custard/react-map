import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Cameroon: React.FC<MapProps>;

type CameroonProps = MapProps;

export { type CameroonProps, Cameroon as default };
