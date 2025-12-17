import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Mexico: React.FC<MapProps>;

type MexicoProps = MapProps;

export { type MexicoProps, Mexico as default };
