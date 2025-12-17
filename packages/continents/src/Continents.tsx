import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Continents: React.FC<MapProps> = createMapComponent({
  name: 'Continents',
  drawPath,
  stateCode,
  constants,
});

export default Continents;
export type ContinentsProps = MapProps;
