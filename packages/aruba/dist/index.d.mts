import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Aruba: React.FC<MapProps>;

type ArubaProps = MapProps;

export { type ArubaProps, Aruba as default };
