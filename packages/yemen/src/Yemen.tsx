import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Yemen: React.FC<MapProps> = createMapComponent({
  name: 'Yemen',
  drawPath,
  stateCode,
  constants,
});

export default Yemen;
export type YemenProps = MapProps;
