import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Dominica: React.FC<MapProps> = createMapComponent({
  name: 'Dominica',
  drawPath,
  stateCode,
  constants,
});

export default Dominica;
export type DominicaProps = MapProps;
