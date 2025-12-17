import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Armenia: React.FC<MapProps> = createMapComponent({
  name: 'Armenia',
  drawPath,
  stateCode,
  constants,
});

export default Armenia;
export type ArmeniaProps = MapProps;
