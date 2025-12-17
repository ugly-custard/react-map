import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Britishvirginislands: React.FC<MapProps> = createMapComponent({
  name: 'Britishvirginislands',
  drawPath,
  stateCode,
  constants,
});

export default Britishvirginislands;
export type BritishvirginislandsProps = MapProps;
