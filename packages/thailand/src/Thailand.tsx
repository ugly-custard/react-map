import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Thailand: React.FC<MapProps> = createMapComponent({
  name: 'Thailand',
  drawPath,
  stateCode,
  constants,
});

export default Thailand;
export type ThailandProps = MapProps;
