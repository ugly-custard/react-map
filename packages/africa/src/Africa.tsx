import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Africa: React.FC<MapProps> = createMapComponent({
  name: 'Africa',
  drawPath,
  stateCode,
  constants,
});

export default Africa;
export type AfricaProps = MapProps;
