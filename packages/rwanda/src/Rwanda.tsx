import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Rwanda: React.FC<MapProps> = createMapComponent({
  name: 'Rwanda',
  drawPath,
  stateCode,
  constants,
});

export default Rwanda;
export type RwandaProps = MapProps;
