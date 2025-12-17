import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Saudiarabia: React.FC<MapProps> = createMapComponent({
  name: 'Saudiarabia',
  drawPath,
  stateCode,
  constants,
});

export default Saudiarabia;
export type SaudiarabiaProps = MapProps;
