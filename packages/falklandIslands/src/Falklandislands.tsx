import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Falklandislands: React.FC<MapProps> = createMapComponent({
  name: 'Falklandislands',
  drawPath,
  stateCode,
  constants,
});

export default Falklandislands;
export type FalklandislandsProps = MapProps;
