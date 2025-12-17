import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Usvirginislands: React.FC<MapProps> = createMapComponent({
  name: 'Usvirginislands',
  drawPath,
  stateCode,
  constants,
});

export default Usvirginislands;
export type UsvirginislandsProps = MapProps;
