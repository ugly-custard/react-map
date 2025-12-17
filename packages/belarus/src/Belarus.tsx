import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Belarus: React.FC<MapProps> = createMapComponent({
  name: 'Belarus',
  drawPath,
  stateCode,
  constants,
});

export default Belarus;
export type BelarusProps = MapProps;
