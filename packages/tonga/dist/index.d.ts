import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Tonga: React.FC<MapProps>;

type TongaProps = MapProps;

export { type TongaProps, Tonga as default };
