import React from 'react';

/**
 * Map of region/state codes to their fill colors
 */
interface RegionColorMap {
    [key: string]: string;
}
/**
 * Props passed to custom tooltip render function
 */
interface TooltipRenderProps {
    /** Currently hovered region/state name */
    state: string | null;
    /** Mouse position */
    position: {
        x: number;
        y: number;
    };
    /** Whether any region is being hovered */
    isHovered: boolean;
    /** Whether the hovered region is selected */
    isSelected: boolean;
}
/**
 * Zoom and pan control interface
 */
interface ZoomPanControls {
    /** Current zoom level */
    zoom: number;
    /** Current X pan offset */
    panX: number;
    /** Current Y pan offset */
    panY: number;
    /** Zoom in by zoomStep */
    zoomIn: () => void;
    /** Zoom out by zoomStep */
    zoomOut: () => void;
    /** Reset to initial zoom and pan */
    reset: () => void;
    /** Pan in a direction */
    pan: (direction: 'up' | 'down' | 'left' | 'right') => void;
    /** Set zoom to specific value */
    setZoom: (zoom: number) => void;
    /** Set pan to specific values */
    setPan: (x: number, y: number) => void;
    /** Minimum zoom level */
    minZoom: number;
    /** Maximum zoom level */
    maxZoom: number;
}
/**
 * Border/stroke style for map regions
 */
type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'dash-dot' | 'dash-double-dot';
/**
 * Position for zoom/pan controls overlay
 */
type ControlsPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
/**
 * Base props for all map components
 */
interface MapProps {
    /** Selection mode: single or multiple regions */
    type: 'select-single' | 'select-multiple';
    /** Width of the map container */
    width?: number | string;
    /** Height of the map container */
    height?: number | string;
    /** Default fill color for regions */
    mapColor?: string;
    /** Border/stroke color */
    strokeColor?: string;
    /** Border/stroke width */
    strokeWidth?: number;
    /** Fill color when hovering over a region */
    hoverColor?: string;
    /** Fill color when a region is selected */
    selectColor?: string;
    /** Border style for regions */
    borderStyle?: BorderStyle;
    /** Custom colors for specific regions by their code/name */
    cityColors?: RegionColorMap;
    /** Disable click/selection functionality */
    disableClick?: boolean;
    /** Disable hover effects */
    disableHover?: boolean;
    /** Callback when a region is selected/deselected */
    onSelect?: (state: string | null, selectedStates?: string[]) => void;
    /** Callback when hovering over a region */
    onHover?: (stateId: string | null) => void;
    /** Show tooltip on hover. Can be boolean or custom render function */
    renderTooltip?: boolean | ((props: TooltipRenderProps) => React.ReactNode);
    /** Enable zoom and pan functionality */
    enableZoom?: boolean;
    /** Show zoom/pan controls when enableZoom is true */
    showControls?: boolean;
    /** Position of zoom/pan controls */
    controlsPosition?: ControlsPosition;
    /** Minimum zoom level */
    minZoom?: number;
    /** Maximum zoom level */
    maxZoom?: number;
    /** Zoom increment/decrement step */
    zoomStep?: number;
    /** Pan increment step */
    panStep?: number;
    /** Callback when zoom/pan state changes */
    onZoomPanChange?: (controls: ZoomPanControls) => void;
}
/**
 * Configuration for creating a map component
 */
interface MapConfig {
    /** Display name of the map (e.g., 'India', 'Usa') */
    name: string;
    /** SVG path data for each region, keyed by region code */
    drawPath: Record<string, string>;
    /** Array of region codes/names */
    stateCode: string[];
    /** Default constants for this map */
    constants: MapConstants;
}
/**
 * Default constants for a map
 */
interface MapConstants {
    /** Default width */
    WIDTH: number;
    /** Default map fill color */
    MAPCOLOR: string;
    /** Default stroke color */
    STROKE_COLOR: string;
    /** Default stroke width */
    STROKE_WIDTH: number;
    /** Default hover color */
    HOVERCOLOR: string;
    /** Default selected color */
    SELECTED_COLOR: string;
}

/**
 * Default constants used when a map doesn't provide its own
 */
declare const DEFAULT_CONSTANTS: MapConstants;
/**
 * Default zoom/pan settings
 */
declare const ZOOM_PAN_DEFAULTS: {
    readonly MIN_ZOOM: 1;
    readonly MAX_ZOOM: 3;
    readonly ZOOM_STEP: 0.25;
    readonly PAN_STEP: 20;
};

/**
 * Returns SVG stroke-dasharray properties for the given border style
 */
declare const getStrokeProperties: (borderStyle?: BorderStyle) => {
    strokeDasharray: string;
};

interface MousePosition {
    x: number;
    y: number;
}
/**
 * Hook that tracks the current mouse position globally
 */
declare const useMousePosition: () => MousePosition;

interface UseZoomPanOptions {
    enableZoom: boolean;
    minZoom: number;
    maxZoom: number;
    zoomStep: number;
    panStep: number;
    onZoomPanChange?: (controls: ZoomPanControls) => void;
}
interface UseZoomPanReturn {
    wrapperStyle: React.CSSProperties;
    controls: ZoomPanControls;
}
/**
 * Hook that manages zoom and pan state for a map component
 */
declare const useZoomPan: ({ enableZoom, minZoom, maxZoom, zoomStep, panStep, onZoomPanChange, }: UseZoomPanOptions) => UseZoomPanReturn;

interface DefaultTooltipProps {
    state: string | null;
    position: {
        x: number;
        y: number;
    };
}
/**
 * Default tooltip component that displays the hovered region name
 */
declare const DefaultTooltip: ({ state, position }: DefaultTooltipProps) => React.JSX.Element | null;

interface DefaultControlsProps {
    controls: ZoomPanControls;
    position: ControlsPosition;
}
/**
 * Default zoom/pan controls component with grid layout
 */
declare const DefaultControls: ({ controls, position }: DefaultControlsProps) => React.JSX.Element;

/**
 * Factory function to create a map component from configuration
 *
 * @param config - Map configuration including name, paths, state codes, and constants
 * @returns A React component that renders an interactive SVG map
 *
 * @example
 * ```tsx
 * import { createMapComponent, MapProps } from '@react-map/core';
 * import { drawPath, stateCode, constants } from './constants';
 *
 * const India = createMapComponent({
 *   name: 'India',
 *   drawPath,
 *   stateCode,
 *   constants,
 * });
 *
 * export default India;
 * export type IndiaProps = MapProps;
 * ```
 */
declare function createMapComponent(config: MapConfig): React.FC<MapProps>;

export { type BorderStyle, type ControlsPosition, DEFAULT_CONSTANTS, DefaultControls, DefaultTooltip, type MapConfig, type MapConstants, type MapProps, type RegionColorMap, type TooltipRenderProps, ZOOM_PAN_DEFAULTS, type ZoomPanControls, createMapComponent, getStrokeProperties, useMousePosition, useZoomPan };
