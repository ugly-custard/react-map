import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Tunisia: React.FC<MapProps> = createMapComponent({
  name: 'Tunisia',
  drawPath,
  stateCode,
  constants,
});

export default Tunisia;
export type TunisiaProps = MapProps;
