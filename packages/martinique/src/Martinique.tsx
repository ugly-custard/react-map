import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Martinique: React.FC<MapProps> = createMapComponent({
  name: 'Martinique',
  drawPath,
  stateCode,
  constants,
});

export default Martinique;
export type MartiniqueProps = MapProps;
