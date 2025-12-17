import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const China: React.FC<MapProps> = createMapComponent({
  name: 'China',
  drawPath,
  stateCode,
  constants,
});

export default China;
export type ChinaProps = MapProps;
