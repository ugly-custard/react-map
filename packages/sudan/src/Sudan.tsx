import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Sudan: React.FC<MapProps> = createMapComponent({
  name: 'Sudan',
  drawPath,
  stateCode,
  constants,
});

export default Sudan;
export type SudanProps = MapProps;
