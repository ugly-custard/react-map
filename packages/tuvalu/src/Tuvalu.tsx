import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Tuvalu: React.FC<MapProps> = createMapComponent({
  name: 'Tuvalu',
  drawPath,
  stateCode,
  constants,
});

export default Tuvalu;
export type TuvaluProps = MapProps;
