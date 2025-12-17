import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Curacao: React.FC<MapProps>;

type CuracaoProps = MapProps;

export { type CuracaoProps, Curacao as default };
