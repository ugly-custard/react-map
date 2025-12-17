import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Grenada: React.FC<MapProps> = createMapComponent({
  name: 'Grenada',
  drawPath,
  stateCode,
  constants,
});

export default Grenada;
export type GrenadaProps = MapProps;
