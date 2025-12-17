import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Japan: React.FC<MapProps> = createMapComponent({
  name: 'Japan',
  drawPath,
  stateCode,
  constants,
});

export default Japan;
export type JapanProps = MapProps;
