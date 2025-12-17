import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Capeverde: React.FC<MapProps>;

type CapeverdeProps = MapProps;

export { type CapeverdeProps, Capeverde as default };
