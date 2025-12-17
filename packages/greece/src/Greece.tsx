import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Greece: React.FC<MapProps> = createMapComponent({
  name: 'Greece',
  drawPath,
  stateCode,
  constants,
});

export default Greece;
export type GreeceProps = MapProps;
