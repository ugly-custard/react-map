import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Svalbard: React.FC<MapProps>;

type SvalbardProps = MapProps;

export { type SvalbardProps, Svalbard as default };
