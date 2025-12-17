import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Cameroon: React.FC<MapProps> = createMapComponent({
  name: 'Cameroon',
  drawPath,
  stateCode,
  constants,
});

export default Cameroon;
export type CameroonProps = MapProps;
