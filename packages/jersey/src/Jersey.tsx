import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Jersey: React.FC<MapProps> = createMapComponent({
  name: 'Jersey',
  drawPath,
  stateCode,
  constants,
});

export default Jersey;
export type JerseyProps = MapProps;
