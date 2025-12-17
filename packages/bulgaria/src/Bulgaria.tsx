import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Bulgaria: React.FC<MapProps> = createMapComponent({
  name: 'Bulgaria',
  drawPath,
  stateCode,
  constants,
});

export default Bulgaria;
export type BulgariaProps = MapProps;
