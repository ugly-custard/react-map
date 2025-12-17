import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Tanzania: React.FC<MapProps> = createMapComponent({
  name: 'Tanzania',
  drawPath,
  stateCode,
  constants,
});

export default Tanzania;
export type TanzaniaProps = MapProps;
