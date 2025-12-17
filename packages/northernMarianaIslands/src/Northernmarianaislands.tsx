import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Northernmarianaislands: React.FC<MapProps> = createMapComponent({
  name: 'Northernmarianaislands',
  drawPath,
  stateCode,
  constants,
});

export default Northernmarianaislands;
export type NorthernmarianaislandsProps = MapProps;
