import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Pitcairnislands: React.FC<MapProps> = createMapComponent({
  name: 'Pitcairnislands',
  drawPath,
  stateCode,
  constants,
});

export default Pitcairnislands;
export type PitcairnislandsProps = MapProps;
