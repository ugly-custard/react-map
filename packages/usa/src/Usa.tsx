import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Usa: React.FC<MapProps> = createMapComponent({
  name: 'Usa',
  drawPath,
  stateCode,
  constants,
});

export default Usa;
export type UsaProps = MapProps;
