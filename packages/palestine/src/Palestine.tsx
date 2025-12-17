import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Palestine: React.FC<MapProps> = createMapComponent({
  name: 'Palestine',
  drawPath,
  stateCode,
  constants,
});

export default Palestine;
export type PalestineProps = MapProps;
