import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Aruba: React.FC<MapProps> = createMapComponent({
  name: 'Aruba',
  drawPath,
  stateCode,
  constants,
});

export default Aruba;
export type ArubaProps = MapProps;
