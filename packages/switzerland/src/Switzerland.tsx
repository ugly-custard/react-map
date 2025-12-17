import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Switzerland: React.FC<MapProps> = createMapComponent({
  name: 'Switzerland',
  drawPath,
  stateCode,
  constants,
});

export default Switzerland;
export type SwitzerlandProps = MapProps;
