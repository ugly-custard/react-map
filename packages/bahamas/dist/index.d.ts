import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Bahamas: React.FC<MapProps>;

type BahamasProps = MapProps;

export { type BahamasProps, Bahamas as default };
