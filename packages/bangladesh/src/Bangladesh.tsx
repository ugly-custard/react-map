import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Bangladesh: React.FC<MapProps> = createMapComponent({
  name: 'Bangladesh',
  drawPath,
  stateCode,
  constants,
});

export default Bangladesh;
export type BangladeshProps = MapProps;
