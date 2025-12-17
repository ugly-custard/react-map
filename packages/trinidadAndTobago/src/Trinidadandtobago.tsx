import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Trinidadandtobago: React.FC<MapProps> = createMapComponent({
  name: 'Trinidadandtobago',
  drawPath,
  stateCode,
  constants,
});

export default Trinidadandtobago;
export type TrinidadandtobagoProps = MapProps;
