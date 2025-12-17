import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Brunei: React.FC<MapProps> = createMapComponent({
  name: 'Brunei',
  drawPath,
  stateCode,
  constants,
});

export default Brunei;
export type BruneiProps = MapProps;
