import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Zambia: React.FC<MapProps> = createMapComponent({
  name: 'Zambia',
  drawPath,
  stateCode,
  constants,
});

export default Zambia;
export type ZambiaProps = MapProps;
