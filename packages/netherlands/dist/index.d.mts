import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Netherlands: React.FC<MapProps>;

type NetherlandsProps = MapProps;

export { type NetherlandsProps, Netherlands as default };
