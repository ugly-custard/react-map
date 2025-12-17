import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Belgium: React.FC<MapProps> = createMapComponent({
  name: 'Belgium',
  drawPath,
  stateCode,
  constants,
});

export default Belgium;
export type BelgiumProps = MapProps;
