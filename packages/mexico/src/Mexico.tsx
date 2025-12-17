import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Mexico: React.FC<MapProps> = createMapComponent({
  name: 'Mexico',
  drawPath,
  stateCode,
  constants,
});

export default Mexico;
export type MexicoProps = MapProps;
