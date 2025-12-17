import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Tokelau: React.FC<MapProps>;

type TokelauProps = MapProps;

export { type TokelauProps, Tokelau as default };
