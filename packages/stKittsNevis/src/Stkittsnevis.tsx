import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Stkittsnevis: React.FC<MapProps> = createMapComponent({
  name: 'Stkittsnevis',
  drawPath,
  stateCode,
  constants,
});

export default Stkittsnevis;
export type StkittsnevisProps = MapProps;
