import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Pakistan: React.FC<MapProps> = createMapComponent({
  name: 'Pakistan',
  drawPath,
  stateCode,
  constants,
});

export default Pakistan;
export type PakistanProps = MapProps;
