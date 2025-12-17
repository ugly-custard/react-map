import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Somalia: React.FC<MapProps> = createMapComponent({
  name: 'Somalia',
  drawPath,
  stateCode,
  constants,
});

export default Somalia;
export type SomaliaProps = MapProps;
