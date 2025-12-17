import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

/**
 * Interactive SVG map component for React
 */
declare const Stkittsnevis: React.FC<MapProps>;

type StkittsnevisProps = MapProps;

export { type StkittsnevisProps, Stkittsnevis as default };
