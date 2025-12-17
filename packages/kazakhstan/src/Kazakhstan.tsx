import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Kazakhstan: React.FC<MapProps> = createMapComponent({
  name: 'Kazakhstan',
  drawPath,
  stateCode,
  constants,
});

export default Kazakhstan;
export type KazakhstanProps = MapProps;
