import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Maldives: React.FC<MapProps>;

type MaldivesProps = MapProps;

export { type MaldivesProps, Maldives as default };
