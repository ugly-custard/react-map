import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Costarica: React.FC<MapProps> = createMapComponent({
  name: 'Costarica',
  drawPath,
  stateCode,
  constants,
});

export default Costarica;
export type CostaricaProps = MapProps;
