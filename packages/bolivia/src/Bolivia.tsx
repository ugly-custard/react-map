import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Bolivia: React.FC<MapProps> = createMapComponent({
  name: 'Bolivia',
  drawPath,
  stateCode,
  constants,
});

export default Bolivia;
export type BoliviaProps = MapProps;
