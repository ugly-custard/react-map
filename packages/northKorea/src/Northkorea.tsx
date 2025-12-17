import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Northkorea: React.FC<MapProps> = createMapComponent({
  name: 'Northkorea',
  drawPath,
  stateCode,
  constants,
});

export default Northkorea;
export type NorthkoreaProps = MapProps;
