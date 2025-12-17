import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Cocosislands: React.FC<MapProps> = createMapComponent({
  name: 'Cocosislands',
  drawPath,
  stateCode,
  constants,
});

export default Cocosislands;
export type CocosislandsProps = MapProps;
