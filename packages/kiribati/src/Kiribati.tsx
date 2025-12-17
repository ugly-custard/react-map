import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Kiribati: React.FC<MapProps> = createMapComponent({
  name: 'Kiribati',
  drawPath,
  stateCode,
  constants,
});

export default Kiribati;
export type KiribatiProps = MapProps;
