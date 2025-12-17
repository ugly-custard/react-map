import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Oceania: React.FC<MapProps> = createMapComponent({
  name: 'Oceania',
  drawPath,
  stateCode,
  constants,
});

export default Oceania;
export type OceaniaProps = MapProps;
