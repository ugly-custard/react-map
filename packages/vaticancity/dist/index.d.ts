import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Vaticancity: React.FC<MapProps>;

type VaticancityProps = MapProps;

export { type VaticancityProps, Vaticancity as default };
