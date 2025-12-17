import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Guyana: React.FC<MapProps> = createMapComponent({
  name: 'Guyana',
  drawPath,
  stateCode,
  constants,
});

export default Guyana;
export type GuyanaProps = MapProps;
