import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Russia: React.FC<MapProps> = createMapComponent({
  name: 'Russia',
  drawPath,
  stateCode,
  constants,
});

export default Russia;
export type RussiaProps = MapProps;
