import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Belize: React.FC<MapProps> = createMapComponent({
  name: 'Belize',
  drawPath,
  stateCode,
  constants,
});

export default Belize;
export type BelizeProps = MapProps;
