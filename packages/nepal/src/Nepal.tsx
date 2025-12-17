import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Nepal: React.FC<MapProps> = createMapComponent({
  name: 'Nepal',
  drawPath,
  stateCode,
  constants,
});

export default Nepal;
export type NepalProps = MapProps;
