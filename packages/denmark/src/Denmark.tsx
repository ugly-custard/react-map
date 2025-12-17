import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Denmark: React.FC<MapProps> = createMapComponent({
  name: 'Denmark',
  drawPath,
  stateCode,
  constants,
});

export default Denmark;
export type DenmarkProps = MapProps;
