import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Togo: React.FC<MapProps> = createMapComponent({
  name: 'Togo',
  drawPath,
  stateCode,
  constants,
});

export default Togo;
export type TogoProps = MapProps;
