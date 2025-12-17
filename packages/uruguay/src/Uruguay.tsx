import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Uruguay: React.FC<MapProps> = createMapComponent({
  name: 'Uruguay',
  drawPath,
  stateCode,
  constants,
});

export default Uruguay;
export type UruguayProps = MapProps;
