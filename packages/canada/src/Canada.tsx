import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Canada: React.FC<MapProps> = createMapComponent({
  name: 'Canada',
  drawPath,
  stateCode,
  constants,
});

export default Canada;
export type CanadaProps = MapProps;
