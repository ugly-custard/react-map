import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Stpierre: React.FC<MapProps>;

type StpierreProps = MapProps;

export { type StpierreProps, Stpierre as default };
