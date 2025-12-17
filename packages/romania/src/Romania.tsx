import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Romania: React.FC<MapProps> = createMapComponent({
  name: 'Romania',
  drawPath,
  stateCode,
  constants,
});

export default Romania;
export type RomaniaProps = MapProps;
