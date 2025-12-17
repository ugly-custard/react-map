import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Mayotte: React.FC<MapProps> = createMapComponent({
  name: 'Mayotte',
  drawPath,
  stateCode,
  constants,
});

export default Mayotte;
export type MayotteProps = MapProps;
