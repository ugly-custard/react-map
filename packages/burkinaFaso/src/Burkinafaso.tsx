import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map component for React
 */
const Burkinafaso: React.FC<MapProps> = createMapComponent({
  name: 'Burkinafaso',
  drawPath,
  stateCode,
  constants,
});

export default Burkinafaso;
export type BurkinafasoProps = MapProps;
