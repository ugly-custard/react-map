import React from 'react';
import { MapProps } from '@react-map/core';
export { BorderStyle, ControlsPosition, RegionColorMap, TooltipRenderProps, ZoomPanControls } from '@react-map/core';

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
declare const India: React.FC<MapProps>;

type IndiaProps = MapProps;

export { type IndiaProps, India as default };
