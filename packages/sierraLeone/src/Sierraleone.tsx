import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Sierraleone: React.FC<MapProps> = createMapComponent({
  name: 'Sierraleone',
  drawPath,
  stateCode,
  constants,
});

export default Sierraleone;
export type SierraleoneProps = MapProps;
