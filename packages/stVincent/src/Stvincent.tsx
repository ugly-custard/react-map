import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Stvincent: React.FC<MapProps> = createMapComponent({
  name: 'Stvincent',
  drawPath,
  stateCode,
  constants,
});

export default Stvincent;
export type StvincentProps = MapProps;
