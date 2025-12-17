import React from 'react';
import { createMapComponent } from '@react-map/core';
import type { MapProps } from '@react-map/core';
import { drawPath, stateCode, constants } from './constants';

/**
 * Interactive SVG map of India with states
 *
 * @example
 * ```tsx
 * import India from '@react-map/india';
 *
 * function App() {
 *   return (
 *     <India
 *       type="select-single"
 *       onSelect={(state) => console.log('Selected:', state)}
 *     />
 *   );
 * }
 * ```
 */
const India: React.FC<MapProps> = createMapComponent({
  name: 'India',
  drawPath,
  stateCode,
  constants,
});

export default India;
export type IndiaProps = MapProps;
