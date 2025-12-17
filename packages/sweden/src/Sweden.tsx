import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Sweden: React.FC<MapProps> = createMapComponent({
  name: 'Sweden',
  drawPath,
  stateCode,
  constants,
});

export default Sweden;
export type SwedenProps = MapProps;
