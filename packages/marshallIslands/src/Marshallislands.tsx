import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Marshallislands: React.FC<MapProps> = createMapComponent({
  name: 'Marshallislands',
  drawPath,
  stateCode,
  constants,
});

export default Marshallislands;
export type MarshallislandsProps = MapProps;
