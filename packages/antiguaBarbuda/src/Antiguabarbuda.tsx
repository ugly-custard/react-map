import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Antiguabarbuda: React.FC<MapProps> = createMapComponent({
  name: 'Antiguabarbuda',
  drawPath,
  stateCode,
  constants,
});

export default Antiguabarbuda;
export type AntiguabarbudaProps = MapProps;
