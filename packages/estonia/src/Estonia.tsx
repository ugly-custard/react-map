import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Estonia: React.FC<MapProps> = createMapComponent({
  name: 'Estonia',
  drawPath,
  stateCode,
  constants,
});

export default Estonia;
export type EstoniaProps = MapProps;
