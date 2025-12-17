import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Kenya: React.FC<MapProps> = createMapComponent({
  name: 'Kenya',
  drawPath,
  stateCode,
  constants,
});

export default Kenya;
export type KenyaProps = MapProps;
