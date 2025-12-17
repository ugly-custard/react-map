import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Eritrea: React.FC<MapProps> = createMapComponent({
  name: 'Eritrea',
  drawPath,
  stateCode,
  constants,
});

export default Eritrea;
export type EritreaProps = MapProps;
