import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Macedonia: React.FC<MapProps> = createMapComponent({
  name: 'Macedonia',
  drawPath,
  stateCode,
  constants,
});

export default Macedonia;
export type MacedoniaProps = MapProps;
