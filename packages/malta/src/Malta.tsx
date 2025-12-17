import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Malta: React.FC<MapProps> = createMapComponent({
  name: 'Malta',
  drawPath,
  stateCode,
  constants,
});

export default Malta;
export type MaltaProps = MapProps;
