import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Finland: React.FC<MapProps> = createMapComponent({
  name: 'Finland',
  drawPath,
  stateCode,
  constants,
});

export default Finland;
export type FinlandProps = MapProps;
