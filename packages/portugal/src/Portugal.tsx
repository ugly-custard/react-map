import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Portugal: React.FC<MapProps> = createMapComponent({
  name: 'Portugal',
  drawPath,
  stateCode,
  constants,
});

export default Portugal;
export type PortugalProps = MapProps;
