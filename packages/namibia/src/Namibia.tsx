import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Namibia: React.FC<MapProps> = createMapComponent({
  name: 'Namibia',
  drawPath,
  stateCode,
  constants,
});

export default Namibia;
export type NamibiaProps = MapProps;
