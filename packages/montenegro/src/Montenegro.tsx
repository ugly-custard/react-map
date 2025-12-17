import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Montenegro: React.FC<MapProps> = createMapComponent({
  name: 'Montenegro',
  drawPath,
  stateCode,
  constants,
});

export default Montenegro;
export type MontenegroProps = MapProps;
