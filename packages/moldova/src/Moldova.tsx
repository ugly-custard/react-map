import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Moldova: React.FC<MapProps> = createMapComponent({
  name: 'Moldova',
  drawPath,
  stateCode,
  constants,
});

export default Moldova;
export type MoldovaProps = MapProps;
