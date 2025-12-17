import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Stlucia: React.FC<MapProps> = createMapComponent({
  name: 'Stlucia',
  drawPath,
  stateCode,
  constants,
});

export default Stlucia;
export type StluciaProps = MapProps;
