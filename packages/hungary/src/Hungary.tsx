import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Hungary: React.FC<MapProps> = createMapComponent({
  name: 'Hungary',
  drawPath,
  stateCode,
  constants,
});

export default Hungary;
export type HungaryProps = MapProps;
