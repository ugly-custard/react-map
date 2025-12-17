import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Ecuador: React.FC<MapProps> = createMapComponent({
  name: 'Ecuador',
  drawPath,
  stateCode,
  constants,
});

export default Ecuador;
export type EcuadorProps = MapProps;
