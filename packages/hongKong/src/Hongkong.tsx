import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Hongkong: React.FC<MapProps> = createMapComponent({
  name: 'Hongkong',
  drawPath,
  stateCode,
  constants,
});

export default Hongkong;
export type HongkongProps = MapProps;
