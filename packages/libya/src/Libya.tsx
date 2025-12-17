import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Libya: React.FC<MapProps> = createMapComponent({
  name: 'Libya',
  drawPath,
  stateCode,
  constants,
});

export default Libya;
export type LibyaProps = MapProps;
