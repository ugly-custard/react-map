import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Asia: React.FC<MapProps> = createMapComponent({
  name: 'Asia',
  drawPath,
  stateCode,
  constants,
});

export default Asia;
export type AsiaProps = MapProps;
