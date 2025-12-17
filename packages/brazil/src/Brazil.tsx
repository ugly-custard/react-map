import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Brazil: React.FC<MapProps> = createMapComponent({
  name: 'Brazil',
  drawPath,
  stateCode,
  constants,
});

export default Brazil;
export type BrazilProps = MapProps;
