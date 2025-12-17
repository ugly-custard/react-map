import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Laos: React.FC<MapProps> = createMapComponent({
  name: 'Laos',
  drawPath,
  stateCode,
  constants,
});

export default Laos;
export type LaosProps = MapProps;
