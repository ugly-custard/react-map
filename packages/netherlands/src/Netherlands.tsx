import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Netherlands: React.FC<MapProps> = createMapComponent({
  name: 'Netherlands',
  drawPath,
  stateCode,
  constants,
});

export default Netherlands;
export type NetherlandsProps = MapProps;
