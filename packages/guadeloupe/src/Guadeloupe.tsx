import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Guadeloupe: React.FC<MapProps> = createMapComponent({
  name: 'Guadeloupe',
  drawPath,
  stateCode,
  constants,
});

export default Guadeloupe;
export type GuadeloupeProps = MapProps;
