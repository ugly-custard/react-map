import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Chad: React.FC<MapProps> = createMapComponent({
  name: 'Chad',
  drawPath,
  stateCode,
  constants,
});

export default Chad;
export type ChadProps = MapProps;
