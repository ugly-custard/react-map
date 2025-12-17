import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Bhutan: React.FC<MapProps> = createMapComponent({
  name: 'Bhutan',
  drawPath,
  stateCode,
  constants,
});

export default Bhutan;
export type BhutanProps = MapProps;
