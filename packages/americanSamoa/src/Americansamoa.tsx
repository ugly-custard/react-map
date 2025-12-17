import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Americansamoa: React.FC<MapProps> = createMapComponent({
  name: 'Americansamoa',
  drawPath,
  stateCode,
  constants,
});

export default Americansamoa;
export type AmericansamoaProps = MapProps;
