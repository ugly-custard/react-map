import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Botswana: React.FC<MapProps> = createMapComponent({
  name: 'Botswana',
  drawPath,
  stateCode,
  constants,
});

export default Botswana;
export type BotswanaProps = MapProps;
