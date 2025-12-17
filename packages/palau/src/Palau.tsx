import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Palau: React.FC<MapProps> = createMapComponent({
  name: 'Palau',
  drawPath,
  stateCode,
  constants,
});

export default Palau;
export type PalauProps = MapProps;
