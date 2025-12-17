import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Ukraine: React.FC<MapProps> = createMapComponent({
  name: 'Ukraine',
  drawPath,
  stateCode,
  constants,
});

export default Ukraine;
export type UkraineProps = MapProps;
