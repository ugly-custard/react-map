import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Svalbard: React.FC<MapProps> = createMapComponent({
  name: 'Svalbard',
  drawPath,
  stateCode,
  constants,
});

export default Svalbard;
export type SvalbardProps = MapProps;
