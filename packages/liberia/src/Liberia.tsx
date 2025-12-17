import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Liberia: React.FC<MapProps> = createMapComponent({
  name: 'Liberia',
  drawPath,
  stateCode,
  constants,
});

export default Liberia;
export type LiberiaProps = MapProps;
