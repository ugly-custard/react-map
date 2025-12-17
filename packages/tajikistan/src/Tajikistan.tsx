import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Tajikistan: React.FC<MapProps> = createMapComponent({
  name: 'Tajikistan',
  drawPath,
  stateCode,
  constants,
});

export default Tajikistan;
export type TajikistanProps = MapProps;
