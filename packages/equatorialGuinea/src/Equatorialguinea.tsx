import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Equatorialguinea: React.FC<MapProps> = createMapComponent({
  name: 'Equatorialguinea',
  drawPath,
  stateCode,
  constants,
});

export default Equatorialguinea;
export type EquatorialguineaProps = MapProps;
