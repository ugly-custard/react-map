import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Tokelau: React.FC<MapProps> = createMapComponent({
  name: 'Tokelau',
  drawPath,
  stateCode,
  constants,
});

export default Tokelau;
export type TokelauProps = MapProps;
