import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Iceland: React.FC<MapProps> = createMapComponent({
  name: 'Iceland',
  drawPath,
  stateCode,
  constants,
});

export default Iceland;
export type IcelandProps = MapProps;
