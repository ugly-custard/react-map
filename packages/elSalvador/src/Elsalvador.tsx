import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Elsalvador: React.FC<MapProps> = createMapComponent({
  name: 'Elsalvador',
  drawPath,
  stateCode,
  constants,
});

export default Elsalvador;
export type ElsalvadorProps = MapProps;
