import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Northamerica: React.FC<MapProps> = createMapComponent({
  name: 'Northamerica',
  drawPath,
  stateCode,
  constants,
});

export default Northamerica;
export type NorthamericaProps = MapProps;
