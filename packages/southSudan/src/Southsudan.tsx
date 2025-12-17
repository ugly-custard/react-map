import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Southsudan: React.FC<MapProps> = createMapComponent({
  name: 'Southsudan',
  drawPath,
  stateCode,
  constants,
});

export default Southsudan;
export type SouthsudanProps = MapProps;
