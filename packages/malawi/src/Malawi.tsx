import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Malawi: React.FC<MapProps> = createMapComponent({
  name: 'Malawi',
  drawPath,
  stateCode,
  constants,
});

export default Malawi;
export type MalawiProps = MapProps;
