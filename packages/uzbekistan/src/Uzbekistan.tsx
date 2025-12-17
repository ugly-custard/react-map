import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Uzbekistan: React.FC<MapProps> = createMapComponent({
  name: 'Uzbekistan',
  drawPath,
  stateCode,
  constants,
});

export default Uzbekistan;
export type UzbekistanProps = MapProps;
