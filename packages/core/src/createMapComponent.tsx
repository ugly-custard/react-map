import React, { useEffect, useState, useMemo, useCallback, useRef, useId } from 'react';
import type { MapProps, MapConfig } from './types';
import { DEFAULT_CONSTANTS, ZOOM_PAN_DEFAULTS } from './constants';
import { getStrokeProperties } from './utils/strokeProperties';
import { useMousePosition, useZoomPan } from './hooks';
import { DefaultTooltip, DefaultControls } from './components';

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
export function createMapComponent(config: MapConfig): React.FC<MapProps> {
  const { name, drawPath, stateCode, constants } = config;

  // Merge with defaults
  const mapConstants = { ...DEFAULT_CONSTANTS, ...constants };

  const MapComponent: React.FC<MapProps> = ({
    type,
    width = mapConstants.WIDTH,
    height,
    mapColor = mapConstants.MAPCOLOR,
    strokeColor = mapConstants.STROKE_COLOR,
    strokeWidth = mapConstants.STROKE_WIDTH,
    hoverColor = mapConstants.HOVERCOLOR,
    selectColor = mapConstants.SELECTED_COLOR,
    borderStyle,
    cityColors = {},
    disableClick = false,
    disableHover = false,
    onSelect,
    onHover,
    renderTooltip = true,
    enableZoom = false,
    showControls = true,
    controlsPosition = 'bottom-right',
    minZoom = ZOOM_PAN_DEFAULTS.MIN_ZOOM,
    maxZoom = ZOOM_PAN_DEFAULTS.MAX_ZOOM,
    zoomStep = ZOOM_PAN_DEFAULTS.ZOOM_STEP,
    panStep = ZOOM_PAN_DEFAULTS.PAN_STEP,
    onZoomPanChange,
  }) => {
    const instanceId = useId().replace(/:/g, '');
    const { x, y } = useMousePosition();
    const [viewBox, setViewBox] = useState('0 0 100 100');
    const [stateHovered, setStateHovered] = useState<string | null>(null);
    const lastHoveredRef = useRef<string | null>(null);
    const strokeProps = useMemo(() => getStrokeProperties(borderStyle), [borderStyle]);

    const [selectedSingle, setSelectedSingle] = useState<string | null>(null);
    const [selectedMultiple, setSelectedMultiple] = useState<string[]>([]);

    const isSelected = useCallback(
      (state: string) => (type === 'select-single' ? selectedSingle === state : selectedMultiple.includes(state)),
      [type, selectedSingle, selectedMultiple]
    );

    const { wrapperStyle, controls } = useZoomPan({
      enableZoom,
      minZoom,
      maxZoom,
      zoomStep,
      panStep,
      onZoomPanChange,
    });

    useEffect(() => {
      const svg = document.getElementById(`svg-${instanceId}`) as SVGGraphicsElement | null;
      if (svg) {
        const bbox = svg.getBBox();
        setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
      }
    }, [instanceId]);

    useEffect(() => {
      stateCode.forEach((state) => {
        const path = document.getElementById(`${state}-${instanceId}`);
        if (!path) return;
        if (state === lastHoveredRef.current || isSelected(state)) return;
        path.style.fill = cityColors[state] || mapColor;
      });
    }, [cityColors, mapColor, instanceId, isSelected]);

    useEffect(() => {
      if (type === 'select-single' && selectedSingle) {
        const path = document.getElementById(`${selectedSingle}-${instanceId}`);
        if (path) path.style.fill = selectColor;
      } else if (type === 'select-multiple') {
        selectedMultiple.forEach((state) => {
          const path = document.getElementById(`${state}-${instanceId}`);
          if (path) path.style.fill = selectColor;
        });
      }
    }, [selectedSingle, selectedMultiple, selectColor, instanceId, type]);

    const handleMouseEnter = useCallback(
      (stateId: string) => {
        lastHoveredRef.current = stateId;
        setStateHovered(stateId);
        onHover?.(stateId);

        if (!disableHover) {
          const path = document.getElementById(`${stateId}-${instanceId}`);
          if (path) {
            path.style.fill = isSelected(stateId) ? selectColor : hoverColor;
          }
        }
      },
      [instanceId, disableHover, selectColor, hoverColor, onHover, isSelected]
    );

    const handleMouseLeave = useCallback(
      (stateId: string) => {
        if (lastHoveredRef.current === stateId) {
          lastHoveredRef.current = null;
          setStateHovered(null);
          onHover?.(null);
        }

        if (!disableHover) {
          const path = document.getElementById(`${stateId}-${instanceId}`);
          if (path) {
            path.style.fill = isSelected(stateId) ? selectColor : cityColors[stateId] || mapColor;
          }
        }
      },
      [instanceId, disableHover, selectColor, cityColors, mapColor, onHover, isSelected]
    );

    const handleClick = useCallback(
      (stateId: string) => {
        if (disableClick) return;

        if (type === 'select-single') {
          const newSelected = selectedSingle === stateId ? null : stateId;
          if (selectedSingle && selectedSingle !== stateId) {
            const prevPath = document.getElementById(`${selectedSingle}-${instanceId}`);
            if (prevPath) prevPath.style.fill = cityColors[selectedSingle] || mapColor;
          }
          if (selectedSingle === stateId) {
            const path = document.getElementById(`${stateId}-${instanceId}`);
            if (path) path.style.fill = cityColors[stateId] || mapColor;
          }
          setSelectedSingle(newSelected);
          onSelect?.(newSelected);
        } else {
          if (selectedMultiple.includes(stateId)) {
            const updated = selectedMultiple.filter((s) => s !== stateId);
            const path = document.getElementById(`${stateId}-${instanceId}`);
            if (path) path.style.fill = cityColors[stateId] || mapColor;
            setSelectedMultiple(updated);
            onSelect?.(stateId, updated);
          } else {
            const updated = [...selectedMultiple, stateId];
            const path = document.getElementById(`${stateId}-${instanceId}`);
            if (path) path.style.fill = selectColor;
            setSelectedMultiple(updated);
            onSelect?.(stateId, updated);
          }
        }
      },
      [type, selectedSingle, selectedMultiple, disableClick, instanceId, cityColors, mapColor, selectColor, onSelect]
    );

    const containerStyle: React.CSSProperties = {
      position: 'relative',
      overflow: 'hidden',
      width,
      height,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const mapStyle: React.CSSProperties = {
      width: '100%',
      height: '100%',
      maxWidth: width,
      maxHeight: height,
      stroke: strokeColor,
      strokeWidth,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...strokeProps,
      ...wrapperStyle,
    };

    const svgStyle: React.CSSProperties = {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
    };

    return (
      <div style={containerStyle}>
        <div style={mapStyle}>
          <svg id={`svg-${instanceId}`} viewBox={viewBox} style={svgStyle} preserveAspectRatio="xMidYMid meet">
            {stateCode.map((code) => (
              <path
                key={code}
                id={`${code}-${instanceId}`}
                d={drawPath[code]}
                onClick={() => handleClick(code)}
                onMouseEnter={() => handleMouseEnter(code)}
                onMouseLeave={() => handleMouseLeave(code)}
                style={{
                  fill: cityColors[code] || mapColor,
                  cursor: disableClick ? 'default' : 'pointer',
                  ...strokeProps,
                }}
              />
            ))}
          </svg>
        </div>

        {enableZoom && showControls && <DefaultControls controls={controls} position={controlsPosition} />}

        {renderTooltip === true && <DefaultTooltip state={stateHovered} position={{ x, y }} />}
        {typeof renderTooltip === 'function' &&
          renderTooltip({
            state: stateHovered,
            position: { x, y },
            isHovered: !!stateHovered,
            isSelected: stateHovered ? isSelected(stateHovered) : false,
          })}
      </div>
    );
  };

  // Set display name for debugging
  MapComponent.displayName = name;

  return MapComponent;
}
