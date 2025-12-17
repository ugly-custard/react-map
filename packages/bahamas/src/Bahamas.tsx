import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Bahamas: React.FC<MapProps> = createMapComponent({
  name: 'Bahamas',
  drawPath,
  stateCode,
  constants,
});

export default Bahamas;
export type BahamasProps = MapProps;
