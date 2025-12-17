import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Middleeast: React.FC<MapProps> = createMapComponent({
  name: 'Middleeast',
  drawPath,
  stateCode,
  constants,
});

export default Middleeast;
export type MiddleeastProps = MapProps;
