import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Micronesia: React.FC<MapProps> = createMapComponent({
  name: 'Micronesia',
  drawPath,
  stateCode,
  constants,
});

export default Micronesia;
export type MicronesiaProps = MapProps;
