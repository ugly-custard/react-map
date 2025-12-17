import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Burundi: React.FC<MapProps> = createMapComponent({
  name: 'Burundi',
  drawPath,
  stateCode,
  constants,
});

export default Burundi;
export type BurundiProps = MapProps;
