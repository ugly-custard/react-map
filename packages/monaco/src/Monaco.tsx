import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Monaco: React.FC<MapProps> = createMapComponent({
  name: 'Monaco',
  drawPath,
  stateCode,
  constants,
});

export default Monaco;
export type MonacoProps = MapProps;
