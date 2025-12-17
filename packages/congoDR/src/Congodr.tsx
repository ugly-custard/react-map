import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Congodr: React.FC<MapProps> = createMapComponent({
  name: 'Congodr',
  drawPath,
  stateCode,
  constants,
});

export default Congodr;
export type CongodrProps = MapProps;
