import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Peru: React.FC<MapProps> = createMapComponent({
  name: 'Peru',
  drawPath,
  stateCode,
  constants,
});

export default Peru;
export type PeruProps = MapProps;
