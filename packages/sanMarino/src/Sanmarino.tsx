import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Sanmarino: React.FC<MapProps> = createMapComponent({
  name: 'Sanmarino',
  drawPath,
  stateCode,
  constants,
});

export default Sanmarino;
export type SanmarinoProps = MapProps;
