import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Nigeria: React.FC<MapProps> = createMapComponent({
  name: 'Nigeria',
  drawPath,
  stateCode,
  constants,
});

export default Nigeria;
export type NigeriaProps = MapProps;
