import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Singapore: React.FC<MapProps>;

type SingaporeProps = MapProps;

export { type SingaporeProps, Singapore as default };
