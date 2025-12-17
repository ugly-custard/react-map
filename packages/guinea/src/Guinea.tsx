import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Guinea: React.FC<MapProps> = createMapComponent({
  name: 'Guinea',
  drawPath,
  stateCode,
  constants,
});

export default Guinea;
export type GuineaProps = MapProps;
