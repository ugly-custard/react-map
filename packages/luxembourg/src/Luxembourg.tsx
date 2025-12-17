import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Luxembourg: React.FC<MapProps> = createMapComponent({
  name: 'Luxembourg',
  drawPath,
  stateCode,
  constants,
});

export default Luxembourg;
export type LuxembourgProps = MapProps;
