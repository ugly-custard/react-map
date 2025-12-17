import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Gibraltar: React.FC<MapProps> = createMapComponent({
  name: 'Gibraltar',
  drawPath,
  stateCode,
  constants,
});

export default Gibraltar;
export type GibraltarProps = MapProps;
