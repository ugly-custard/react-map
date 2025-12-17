import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Southafrica: React.FC<MapProps> = createMapComponent({
  name: 'Southafrica',
  drawPath,
  stateCode,
  constants,
});

export default Southafrica;
export type SouthafricaProps = MapProps;
